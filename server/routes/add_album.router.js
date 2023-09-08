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
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("inside /api/add_album POST route");
  console.log("req.body:", req.body);

  const queryValues = [
    req.body.artist_name,
    req.body.album_title,
    req.body.year_published,
    req.body.copy_type,
    req.body.track_listing,
    req.user.id,
  ];
  const queryText =
    `INSERT INTO "albums" ("artist_name", "album_title", "year_published", "copy_type", "track_listing") VALUES ($1, $2, $3, $4, $5);`
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
