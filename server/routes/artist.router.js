const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all the user's artists from the DB
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('inside api/artist GET route');
  console.log('user', req.user);
  let queryText = `SELECT artists.id, artists.artist_name, count(albums.artist_id)
                    FROM artists
                    JOIN albums ON artists.id = albums.artist_id
                    GROUP BY artists.id, artists.artist_name
                    ORDER BY artist_name ASC;`;
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
