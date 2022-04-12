// for running a shell command
const { exec } = require("child_process");
require('dotenv').config({
	path: __dirname + "/../config/.env"
});

function playMovie(torrent) {
	//  Play video with player specified on the ".env" file, if can't then play with mpv by default
	exec(`webtorrent ${torrent} --${typeof process.env.PLAYER == "undefined" ? "mpv" : process.env.PLAYER}`, (error, stdout, stderr) => {
		
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}

		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}

		// log webtorrent output on media player close
		if (process.env.WEBTORRENT_LOG) {
			console.log(`stdout: ${stdout}`);
		}

		console.log('🐮');
	});

}

module.exports = { playMovie };