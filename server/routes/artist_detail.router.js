const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET all albums corresponding to each artist
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('inside api/artist_detail GET route');
    console.log('req.params.id is', req.params.id)
    let queryText = `SELECT artists.artist_name, albums.album_title, albums.id
                        FROM artists
                        JOIN albums ON artists.id = albums.artist_id
                        WHERE artists.id = $1
                        GROUP BY artists.artist_name, albums.album_title, albums.id
                        ORDER BY artists.artist_name ASC;`;
    let queryValues = [req.params.id]
    pool.query(queryText, queryValues).then((result) => {
        console.log(result.rows)
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
