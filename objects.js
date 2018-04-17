var playlist = {galantis:'hunter'};
function updatePlaylist(playlist, artistName,songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  console.log(playlist)
 return (delete playlist.artistName)
}