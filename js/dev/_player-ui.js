var mainWrapper     = document.querySelector('.main-wrapper');
var videoWrapper    =  document.querySelector('.video-wrapper');
var video           = document.querySelector('video.video');
var playerWrapper   = document.querySelector('.player-wrapper');

// time controllers
var timeControllers = document.querySelector('.time-controllers');
  var seekTime      = timeControllers.querySelector('.seek-time');
  var seekBuffer    = timeControllers.querySelector('.seek-buffer');

// controllers
var controllers     = document.querySelector('.controllers');

  var playpauseBtn  = controllers.querySelector('button.playpause');
  playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-play", "fw");
  var backwardBtn   = controllers.querySelector('button.backward');
  var stopBtn       = controllers.querySelector('button.stop');
  var forwardBtn    = controllers.querySelector('button.forward');

  // palybackrange
  var playbackrange2xBtn    = document.querySelector(".speed-menu span:nth-child(1)");
  var playbackrange1xBtn    = document.querySelector(".speed-menu span:nth-child(2)");
  var playbackrange05xBtn   = document.querySelector(".speed-menu span:nth-child(3)");

  //sound
  var muteunmuteBtn     = controllers.querySelector('button.muteunmute');
  muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
  var volumeBar         = controllers.querySelector('.volumebar');
    var seekVolumeBar   = controllers.querySelector('.seek-volumebar');
  var timeduration      = controllers.querySelector('.timeduration');

  // captions
  var closecaptionsBtn = document.querySelector('button.closecaptions');
  closecaptionsBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-file-text", "fw");

  // fullscreen
  var fullscreenBtn = document.querySelector('button.fullscreen');

