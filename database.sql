
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "artists" (
	"id" SERIAL PRIMARY KEY,
	"artist_name" VARCHAR (160) NOT NULL,
	"user_id" INT REFERENCES "user"("id")
);
CREATE TABLE "albums" (
	"id" SERIAL PRIMARY KEY,
	"album_title" VARCHAR (160) NOT NULL,
	"artist_id" INT REFERENCES "artists"("id"),
	"year_published" INT,
	"copy_type" VARCHAR (60),
	"track_listing" VARCHAR (500),
	"user_id" INT REFERENCES "user"("id")
); 
CREATE TABLE "journals" (
	"id" SERIAL PRIMARY KEY,
	"album_id" INT REFERENCES "albums"("id"),
	"notes" TEXT,
	"user_id" INT REFERENCES "user"("id")
);

   // Check if the artist already exists
   const checkArtistQuery = `SELECT id FROM artists WHERE artist_name = \$1`;
   const checkArtistResult = await connection.query(checkArtistQuery, [artist_name]);

   if (checkArtistResult.rows.length > 0) {
     // Artist already exists, retrieve the existing artist ID
     const artistId = checkArtistResult.rows[0].id;
     // Use the existing artist ID to add the new album
     const addNewAlbum = `INSERT INTO albums (artist_id, album_title, year_published, copy_type, track_listing) VALUES (\$1, \$2, \$3, \$4, \$5);`;
     await connection.query(addNewAlbum, [artistId, album_title, year_published, copy_type, track_listing]);
   } else {
     // Artist does not exist, insert a new artist entry
     const sqlAddArtist = `INSERT INTO artists (artist_name) VALUES (\$1) RETURNING id`;
     const result = await connection.query(sqlAddArtist, [artist_name]);
     const artistId = result.rows[0].id;
     // Use the newly inserted artist ID to add the new album
     const addNewAlbum = `INSERT INTO albums (artist_id, album_title, year_published, copy_type, track_listing) VALUES (\$1, \$2, \$3, \$4, \$5);`;
     await connection.query(addNewAlbum, [artistId, album_title, year_published, copy_type, track_listing]);
   }
	