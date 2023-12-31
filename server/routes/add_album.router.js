const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
});

/**
 * POST new album to database
 */
router.post("/", rejectUnauthenticated, async (req, res) => {
  console.log("inside /api/add_album POST route");
  console.log("req.body:", req.body);

  const artist_name = req.body.artist_name;
  const album_title = req.body.album_title;
  const year_published = req.body.year_published;
  const copy_type = req.body.copy_type;
  const track_listing = req.body.track_listing;

  const connection = await pool.connect()
  
  try {
    await connection.query('BEGIN;');
    // Check if the artist already exists
    const checkArtistQuery = `SELECT id FROM artists WHERE artist_name = $1;`;
    const checkArtistResult = await connection.query(checkArtistQuery, [artist_name]);
    if (checkArtistResult.rows.length > 0) {
      // Artist already exists, retrieve the existing artist ID
      const artistId = checkArtistResult.rows[0].id;
      console.log("checkArtistResult:", checkArtistResult.rows[0].id);
      // Use the existing artist ID to add the new album
      const addNewAlbum = `INSERT INTO albums (artist_id, album_title, year_published, copy_type, track_listing, user_id) VALUES ($1, $2, $3, $4, $5, $6);`;
      await connection.query(addNewAlbum, [artistId, album_title, year_published, copy_type, track_listing, req.user.id]);
    } else {
      // Artist does not exist, insert a new artist entry
      const sqlAddArtist = `INSERT INTO artists (artist_name, user_id) VALUES ($1, $2) RETURNING id;`;
      const result = await connection.query(sqlAddArtist, [artist_name, req.user.id]);
      console.log("result:", result);
      const NewArtistId = result.rows[0].id;
      // Use the newly inserted artist ID to add the new album
      const addNewAlbum = `INSERT INTO albums (artist_id, album_title, year_published, copy_type, track_listing, user_id) VALUES ($1, $2, $3, $4, $5, $6);`;
      await connection.query(addNewAlbum, [NewArtistId, album_title, year_published, copy_type, track_listing, req.user.id]);
    }
    await connection.query('COMMIT;');
    res.sendStatus(200);
  } catch(error) {
    await connection.query('ROLLBACK;');
    console.log('Error adding new album - Rolling back catalog addition', error);
    res.sendStatus(500);
  } finally {
    connection.release()
  }
});

module.exports = router;
