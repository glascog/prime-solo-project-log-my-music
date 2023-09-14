import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ArtistList from '../ArtistList/ArtistList';
import AlbumList from '../AlbumList/AlbumList';
import ArtistDetail from '../ArtistDetail/ArtistDetail';
import AlbumDetail from '../AlbumDetail/AlbumDetail';
import AddAlbum from '../AddAlbum/AddAlbum';
import AddNotes from '../AddNotes/AddNotes';
import EditAlbum from '../EditAlbum/EditAlbum';
import EditNote from '../EditNote/EditNote';
import BottomNav from '../Nav/BottomNav';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows ArtistList else shows LoginPage
            exact
            path="/artists"
          >
            <ArtistList />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AlbumList else shows LoginPage
            exact
            path="/albums"
          >
            <AlbumList />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows ArtistDetail else shows LoginPage
            
            path="/artist_detail/:artistId"
          >
            <ArtistDetail />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AlbumDetail else shows LoginPage
            exact
            path="/album_detail/:albumId"
          >
            <AlbumDetail />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AlbumDetail else shows LoginPage
            exact
            path="/add_album"
          >
            <AddAlbum />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AlbumDetail else shows LoginPage
            exact
            path="/add_notes/:albumId"
          >
            <AddNotes />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AlbumDetail else shows LoginPage
            exact
            path="/edit_album"
          >
            <EditAlbum />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AlbumDetail else shows LoginPage
            exact
            path="/edit_note/:noteId"
          >
            <EditNote />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
        <BottomNav />
      </div>
  
    </Router>

  

  );
}

export default App;
