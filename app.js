#!/usr/bin/env node
const ASK = require('./lib/ask');
const YTS_API = require('./lib/api');
const PLAYER = require('./lib/player');
const yargs = require('yargs');
const { bold } = require('kleur');

// arguments
const options = yargs
.option("log", {
    alias: "l",
    describe: "show webtorrent log output",
	demandOption: false
})
.option("p", {
	alias: "player",
	describe: "Media player to play video (mpv, vlc)",
	type: "string",
	demandOption: true
})
.usage("Usage: -p <player>")
.argv

const PLAYER_OPTION = options.player;
const SHOW_LOG = options.log;

// Close if no player has been specified
if (PLAYER_OPTION === '') {
	console.log(bold().red('please specify player'));
	process.exit(1);
}

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
				console.log(bold().yellow(`\nPlaying movie ${chosen_movie.title_long} at ${chosen_quality.quality}...\n🐮 Waiting...`));
				const torrentURL = chosen_quality.url; 
				PLAYER.playMovie(torrentURL, PLAYER_OPTION, SHOW_LOG);
			})
		})
	})
})
