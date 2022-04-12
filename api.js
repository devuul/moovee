// Interacts with the YTS API
const axios = require("axios");

function searchMovie(query, cb) {
    (query === "moo") ? console.log("\n-- 🐄 --\n") : ""; // 🐄 
    
    axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`)
    .then(res => {
        res = res.data;

        // if any matching movies found 
        if (res.status == 'ok' && res.data.movie_count > 0) {
            cb(res.data.movies)
        } else {
            // no movies found
            console.error("No moovies found 🌠 ")
        }
    }).catch(err => {
        console.error(err);
    })
}

module.exports = {
    searchMovie
}