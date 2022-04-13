// for running a shell command
const { exec } = require("child_process");

function playMovie(torrent, player, showLog) {
	//  Play video with player specified on the ".env" file, if can't then play with mpv by default
	exec(`webtorrent ${torrent} --${player}`, (error, stdout, stderr) => {
		
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}

		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}

		// log webtorrent output on media player close (if -l)
		if (showLog) {
			console.log(`stdout: ${stdout}`);
		}

		console.log('🐮 Bye');
	});

}

module.exports = { playMovie };