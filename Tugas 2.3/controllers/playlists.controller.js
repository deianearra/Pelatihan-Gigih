const playlistService = require('../services/playlists.service');

function addSongToPlaylist(req, res) {
  const { title, artists, url } = req.body;

  if (!title || !artists || !url) {
    return res.status(400).json({ error: 'Title, artists, and URL are required.' });
  }

  playlistService.addSongToPlaylist(title, artists, url);
  res.status(201).json({ message: 'Song added to the playlist successfully.' });
}

function playSongFromPlaylist(req, res) {
  const { url } = req.body;

  const song = playlistService.findSongByURL(url);
  if (!song) {
    return res.status(404).json({ error: 'Song not found in the playlist.' });
  }

  playlistService.playSongFromPlaylist(url);
  res.status(200).json({ message: 'Song is now playing.' });
}

function getPlaylist(req, res) {
  res.status(200).json({ playlist: playlistService.getPlaylist() });
}

function getMostPlayed(req, res) {
  res.status(200).json({ playlist: playlistService.getMostPlayed() });
}

module.exports = {
  addSongToPlaylist,
  playSongFromPlaylist,
  getPlaylist,
  getMostPlayed,
};
