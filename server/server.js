const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const artistRouter = require('./routes/artist.router');
const albumRouter = require('./routes/album.router');
const artistDetailRouter = require('./routes/artist_detail.router');
const albumDetailRouter = require('./routes/album_detail.router');
const addAlbumRouter = require('./routes/add_album.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/artist', artistRouter);
app.use('/api/album', albumRouter);
app.use('/api/artist_detail', artistDetailRouter);
app.use('/api/album_detail', albumDetailRouter);
app.use('/api/add_album', addAlbumRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
