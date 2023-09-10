const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all the user's artists from the DB
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('inside api/album GET route');
  console.log('user', req.user);
  let queryText = `SELECT "album_title", "artist_name" 
                    FROM "albums"
                    JOIN "artists" ON albums.artist_id = artists.id
                    ORDER BY "album_title" ASC;`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }) .catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
