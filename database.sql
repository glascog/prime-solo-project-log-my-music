
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

1	Live Dead	Grateful Dead	1969	Vinyl	Dark Star, St. Stephen, The Eleven, Lovelight, DDHNM, Feedback, And We Bid You Goodnight	
2	Workingman's Dead	Grateful Dead	1970	Vinyl	Uncle John's Band, High Time, Dire Wolf, New Speedway Boogie, Cumberland Blues, Black Peter, Easy Wind, Casey Jones	
3	American Beauty	Grateful Dead	1970	Vinyl	Box of Rain, Friend of the Devil, Sugar Magnolia, Operator, Candyman, Ripple, Brokedown Palace, Till the Morning Comes, Attics of my Life	
4	Chocolate and Cheese	Ween	1994	CD	Take Me Away, Spinal Menengitis, Freedom of 76, I Cant Put my finger on it, A Tear for Eddie, Roses are Free, Baby Bitch, Mister Would You Please help My Pony?, Drifter in the Dark, Voodoo Lady, Joppa Road, Candi, Buenas Tardes Amigo, The HIV Song, What Deaner was Talkin' About, Dont Shit where you eat	
5	The Mollusk	Ween	1997	CD	I'm Dancing In the Show Tonight, The Mollusk, Polka Dot Tail, I'll Be Your Johnny on the Spot, Mutilated Lips, The Blarney Stone, Its Gonna Be (Alright), The Golden Eel, Cold Blows the Wind, Pink Eye-On My Leg, Waving My Dick in The Wind, Buckingham Green, Ocean Man, She Wanted to Leave 	
6	A Deeper Understanding	The War On Drugs	2017	vinyl	Good Stuff	