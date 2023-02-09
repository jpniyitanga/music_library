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
  },
  printPlaylists: function() {
    let playlistKeys = Object.keys(this.playlists);
    for (let key of playlistKeys) {
      console.log(`${key}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`);
    }
  },

  printTracks: function() {
    let tracksKeys = Object.keys(this.tracks);
    for (let key of tracksKeys) {
      console.log(`${key}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`);
    }
  },
       
  printPlaylist: function(playlistId) {
    let playlistNames = Object.keys(this.playlists);
    for (let playlist of playlistNames) {
      if (playlist === playlistId) {
        let playlistTracks = Object.values(this.playlists[playlist].tracks);
        //console.log(playlistTracks)
        console.log(`${playlist}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
       
        for (let track of playlistTracks) {
          console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
        }
       
      }
                     
    }
       
       
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    //let trackKeys = Object.keys(this.tracks);
                                        
    if (trackId in this.tracks && playlistId in this.playlists) {
      //console.log(library.tracks)
      //console.log(library.playlists)
      this.playlists[playlistId].tracks.push(trackId);
    } else {
      console.log(`Track or Library not found`);
    }
    return this.playlists;
       
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    let newTrack = this.generateUid();
    this.tracks[newTrack] = {
      //id: generateUid(),
      name: name,
      artist: artist,
      album: album
    };
    return this.tracks;
  },

  addPlaylist: function(name) {
    let newPlayList = this.generateUid();
    this.playlists[newPlayList] = {
      //id: generateUid(),
      name: name
    };
    return this.playlists;
  }

       
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p02");


// adds an existing track to an existing playlist
//console.log(library.ddTrackToPlaylist("t01", "p02"));


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)

//console.log(library.generateUid());


// adds a track to the library
console.log(library.addTrack("As It Was", "Harry Styles", "Harry's House"));


// adds a playlist to the library
console.log(library.addPlaylist("p5"));


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};