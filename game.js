window.onload = function() {

	var score_player = 0;
	var score_cpu = 0;

    var btn_rock = document.getElementById('btn-rock');
    var btn_paper = document.getElementById('btn-paper');
    var btn_scissors = document.getElementById('btn-scissors');

    var score_diplay_player = document.getElementById('score-player');
	var score_display_cpu = document.getElementById('score-cpu');
	var game_result_display = document.getElementById('game-result');
	var game_details_display = document.getElementById("game-details");

    score_diplay_player.innerHTML = 0;
    score_display_cpu.innerHTML = 0;

	btn_rock.addEventListener('click', play_rock);
	btn_paper.addEventListener('click', play_paper);
	btn_scissors.addEventListener('click', play_scissors);

	function play_rock() {
		play("Kő");
	}

	function play_scissors() {
		play("Papír");
	}

	function play_paper() {
		play("Olló");
	}

	function play(choice) {
		cpu_choice = Math.floor(Math.random() * 3 + 1);
		cpu_choice_str = cpu_choice === 1 ? "Kő" : cpu_choice === 2 ? "Papír" : "Olló";
		if (choice === cpu_choice_str) {
			game_result_display.innerHTML = "Döntetlen";

		} else if (
			(choice === "Kő" && cpu_choice_str === "Olló") ||
			(choice === "Papír" && cpu_choice_str === "Kő") ||
			(choice === "Olló" && cpu_choice_str === "Papír")
		) {
			score_player++;
			game_result_display.innerHTML = "A játékos nyert!";
		} else {
			score_cpu++;
			game_result_display.innerHTML = "A gép nyert!";
		}

		score_diplay_player.innerHTML = score_player;
		score_display_cpu.innerHTML = score_cpu;
		game_details_display.innerHTML = '<span class="player-choice">' + choice + "</span> vs. " +
		 '<span class="cpu-choice">' + cpu_choice_str + '</span>';

	}
}