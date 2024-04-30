"use strict";
//Question 40
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    const album = { artist: artist, title: title, };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("mehran", "mehran", 2001);
const album2 = make_album("mehran", "mehran", 2002);
const album3 = make_album("mehran", "mehran", 2003);
console.log(album1);
console.log(album2);
console.log(album3);
