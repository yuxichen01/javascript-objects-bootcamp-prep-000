var playlist = {galantis:'hunter'};
function updatePlaylist(plist, artistName,songTitle) {
  plist[artistName] = songTitle
  return plist
}
function removeFromPlaylist(plist, artistName) {
 return (delete plist.artistName)
}