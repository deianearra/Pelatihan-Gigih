const playlistModel = {
    songs: [],
  };
  
  // Function to find a song by its Spotify URL
  function findSongByURL(url) {
    return playlistModel.songs.find((song) => song.url === url);
  }
  
  function addSongToPlaylist(title, artists, url) {
    playlistModel.songs.push({
      title,
      artists,
      url,
      playCount: 0,
    });
  }
  
  function playSongFromPlaylist(url) {
    const song = findSongByURL(url);
    if (song) {
      song.playCount++;
    }
  }
  
  function getPlaylist() {
    return playlistModel.songs;
  }
  
  function getMostPlayed() {
    return [...playlistModel.songs].sort((a, b) => b.playCount - a.playCount);
  }
  
  module.exports = {
    findSongByURL,
    addSongToPlaylist,
    playSongFromPlaylist,
    getPlaylist,
    getMostPlayed,
  };
  