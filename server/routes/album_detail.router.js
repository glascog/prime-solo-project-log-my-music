const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET details on album with album id
 */
router.get("/:id", rejectUnauthenticated, (req, res) => {
  console.log("inside api/album_detail GET route");
  console.log("req.params.id is", req.params.id);
  let queryText = `SELECT artists.artist_name, albums.album_title, albums.year_published, albums.copy_type, albums.track_listing, albums.id
                      FROM artists
                      JOIN albums ON artists.id = albums.artist_id
                      WHERE albums.id = $1
                      GROUP BY artists.artist_name, albums.album_title, albums.id
                      ORDER BY artists.artist_name ASC;`;
  let queryValues = [req.params.id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// PUT route to update notes
router.put("/:id", rejectUnauthenticated, (req, res) => {
  console.log('editNote put route');
  console.log("req.params.id is:", req.params.id);
  console.log('req.body is:', req.body);

  const albumNotes = req.body.notes


});


/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
