const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET all the user's albums from the DB
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('inside api/album GET route');
  console.log('user', req.user);
  let queryText = `SELECT albums.id AS album_id, albums.album_title, artists.artist_name 
                    FROM albums
                    JOIN artists ON albums.artist_id = artists.id
                    ORDER BY album_title ASC;`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }) .catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
});

router.put("/:id", rejectUnauthenticated, (req, res) => {
  // update this album
  console.log("editAlbum put route");
  console.log("req.params.id is:", req.params.id);
  // const albumToUpdate = req.params.id;
  const queryText = `UPDATE albums SET album_title = $1 WHERE id = $2`;
  pool
    .query(queryText, [req.body.album_title, req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error on database put request", error);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryValues = [req.params.id]
  let queryText = 'DELETE from albums WHERE id = $1';
  console.log('inside delete router')
  pool.query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
