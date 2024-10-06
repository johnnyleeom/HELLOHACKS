// provides functionality of having an array which stores the songs 
// we use node. js and express 
// and the ability to get, post, and deletes the songs when the front end is implemented and connected

const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());

let playlist = 
    [{song: 'See you Again - Tyler the Creator', id: 1, uvote: 0, dvote:2}, 
        {song: 'spng', id:2, uvote:0, dvote: 1}
    ];
let songID = 0;
let upvotes = 0;
let downvotes = 0;

app.get("/playlist", (request, response)=> {
    response.json(playlist);
});

app.post("/playlist", (request, response) => {
    const newSong = {
        song: request.body.song,
        id: songID++, 
        uvote: upvotes, 
        dvote: downvotes
    };
    playlist.push(newSong);
    playlist.sort((a, b) => (a.dvote - b.dvote));
    response.json(newSong);
}); 

app.delete("/playlist/:id", (request, response) => {
    const songId = parseInt(request.params.id);
    playlist = playlists.filter((song) => song.id !== songId);
    response.sendStatus(200);
});


app.listen(port,() => {
    console.log("server is running");
});