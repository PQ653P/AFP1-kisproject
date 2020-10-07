window.onload = function() {
    var player_score = 0;
    var cpu_score = 0;

    var btn_rock = document.getElementById('btn-rock');
    var btn_paper = document.getElementById('btn-paper');
    var btn_scissors = document.getElementById('btn-scissors');

    var score_diplay_player = document.getElementById('score-player');
    var score_display_cpu = document.getElementById('score-cpu');

    score_diplay_player.innerHTML = 0;
    score_display_cpu.innerHTML = 0;
	
	btn_rock.addEventListener('click', play_rock);
	btn_paper.addEventListener('click', play_paper);
	btn_scissors.addEventListener('click', play_scissors);

	function play_rock() {
		play("Kő");
	}

	function play_paper() {
		play("Papír");
	}

	function play_scissors() {
		play("Olló");
	}
}