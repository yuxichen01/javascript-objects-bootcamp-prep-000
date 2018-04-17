var playlist = {galantis:'hunter'};
function updatePlaylist(playlist, artistName,songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
 return (delete playlist.artistName)
}