var playlist = {galantis:'hunter'};
function updatePlaylist(plist, artistName,songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(plist, artistName) {
 return (delete playlist.artistName)
}