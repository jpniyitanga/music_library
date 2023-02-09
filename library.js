const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
     let playlistKeys = Object.keys(library.playlists);
     for (key of playlistKeys) {
       console.log(`${key}: ${library.playlists[key].name} - ${library.playlists[key].tracks.length} tracks`);
     }         
}
//printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       let tracksKeys = Object.keys(library.tracks);
       for (key of tracksKeys) {
              console.log(`${key}: ${library.tracks[key].name} by ${library.tracks[key].artist} (${library.tracks[key].album})`)
       }
}
//printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {       
       playlistNames = Object.keys(library.playlists);
       for (playlist of playlistNames){
              if (playlist === playlistId) {
                     let playlistTracks = Object.values(library.playlists[playlist].tracks);
                     //console.log(playlistTracks)
                     console.log(`${playlist}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} tracks`);

                     for(track of playlistTracks) {
                            console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
                     }

              }
              
       }


}
//printPlaylist("p02");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {       
       let trackKeys = Object.keys(library.tracks);
                                 
       if (trackId in library.tracks && playlistId in library.playlists) {
              //console.log(library.tracks)
              //console.log(library.playlists)
              library.playlists[playlistId].tracks.push(trackId);
       } else {
              console.log(`Track or Library not found`)
       }
       return library.playlists;                                

};
//console.log(addTrackToPlaylist("t01", "p02"));




// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
//console.log(generateUid());


// adds a track to the library
const addTrack = function(name, artist, album) {
       let newTrack = generateUid();
       library.tracks[newTrack] = {
         //id: generateUid(),
         name: name,
         artist: artist,
         album: album
       };
       return library.tracks;
     };

//console.log(addTrack("As It Was", "Harry Styles", "Harry's House"));


// adds a playlist to the library
const addPlaylist = function(name) {
       let newPlayList = generateUid();
       library.playlists[newPlayList] = {
              //id: generateUid(),
              name: name
       };
       return library.playlists;
};
//console.log(addPlaylist("p5"));


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}