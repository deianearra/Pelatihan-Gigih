const playlistModel = require('../models/playlists.model');

function addSongToPlaylist(title, artists, url) {
  return playlistModel.addSongToPlaylist(title, artists, url);
}

function playSongFromPlaylist(url) {
  return playlistModel.playSongFromPlaylist(url);
}

function getPlaylist() {
  return playlistModel.getPlaylist();
}

function getMostPlayed() {
  return playlistModel.getMostPlayed();
}

module.exports = {
  addSongToPlaylist,
  playSongFromPlaylist,
  getPlaylist,
  getMostPlayed,
};
