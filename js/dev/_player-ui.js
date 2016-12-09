var mainWrapper = document.querySelector('.main-wrapper');
var videoWrapper =  document.querySelector('.video-wrapper');
var video = document.querySelector('video.video');

var playerWrapper = document.querySelector('article.player-wrapper');
var player = document.querySelector('.player');
var timeControllers = document.querySelector('.time-controllers');
var seekTimeDuration = document.querySelector('.seektimeduration');
var timeduration = document.querySelector('.timeduration');
var controllersWrapper = document.querySelector('.controllers');
var backwardBtn = document.querySelector('button.backward');
var playpauseBtn = document.querySelector('button.playpause');
var forwardBtn = document.querySelector('button.forward');
playpauseBtn.innerHTML = "Play";
var stopBtn = document.querySelector('button.stop');
var muteunmuteBtn = document.querySelector('button.muteunmute')
muteunmuteBtn.innerHTML = "Mute";
var volumeBar = document.querySelector('.volumebar');

// palybackrange
var playbacjkrangeBtn = document.querySelector('.playbackrange');
var playbackrange2xBtn = document.querySelector(".speed-menu span:nth-child(1)");
var playbackrange1xBtn = document.querySelector(".speed-menu span:nth-child(2)");
var playbackrange05xBtn = document.querySelector(".speed-menu span:nth-child(3)")


var closecaptionsBtn = document.querySelector('button.closecaptions');
var fullscreenBtn = document.querySelector('button.fullscreen');

var seektime = document.querySelector('div.seek');

