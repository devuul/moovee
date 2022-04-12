const ASK = require('./ask');
const YTS_API = require('./api');
const PLAYER = require('./player');

// ask user for movie query
ASK.searchQuery()
.then(query => {
	// replace whitespace with underscore
	query = query.replace(/\s/g, "_");
	
	YTS_API.searchMovie(query, (movies) => {
		// show movie results
		movies.forEach((movie, i) => {
			console.log(`[${i + 1}] ${movie.title_long} \n    📅 year: ${movie.year}  🌟 rating: ${movie.rating}\n`)
		})

		// prompt user to choose movie
		ASK.chooseMovie(movies)
		.then(chosen_movie => {
			const movieTorrents = chosen_movie.torrents;
			
			// show available movie resolutions
			movieTorrents.forEach((torrent, i) => {
				console.log(`[${i + 1}] ${torrent.quality}\n    🧩 size: ${torrent.size}\n`)
			})

			// prompt user to choose quality
			ASK.chooseQuality(movieTorrents)
			.then(chosen_quality => {		
				// play the movie with default player
				console.log(`\nPlaying movie ${chosen_movie.title_long} at ${chosen_quality.quality}...\n🐮 Waiting...`);
				const torrentURL = chosen_quality.url; 
				PLAYER.playMovie(torrentURL);
			})
		})
	})
})