//Question 40



interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album { const album: Album = { artist: artist, title: title, }; 
if (tracks){
 album.tracks = tracks;
}
return album; }


const album1 = make_album("mehran", "mehran", 2001);
const album2 = make_album("mehran", "mehran", 2002);
const album3 = make_album("mehran", "mehran", 2003);

console.log(album1);
console.log(album2);
console.log(album3);
