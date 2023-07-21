const express = require('express');
const router = express.Router();
const playlistsController = require('../controllers/playlists.controller');

// Route to add a song to the playlist
router.post('/addSong', playlistsController.addSongToPlaylist);

// Route to play a song from the playlist
router.post('/playSong', playlistsController.playSongFromPlaylist);

// Route to get the list of songs from the playlist
router.get('/getPlaylist', playlistsController.getPlaylist);

// Route to get the list of songs sorted by most played
router.get('/getMostPlayed', playlistsController.getMostPlayed);

module.exports = router;
