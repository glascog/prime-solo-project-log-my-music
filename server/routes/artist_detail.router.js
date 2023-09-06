const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET all albums corresponding to each artist
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('inside api/artist_detail GET route');
    let queryText = `SELECT artists.artist_name, albums.album_title
                        FROM artists
                        JOIN albums ON artists.id = albums.artist_id
                        GROUP BY artists.artist_name, albums.album_title
                        ORDER BY artists.artist_name ASC;`;
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