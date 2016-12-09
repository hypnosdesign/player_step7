var mainWrapper = document.querySelector('.main-wrapper');
var videoWrapper =  document.querySelector('.video-wrapper');
var video = document.querySelector('video.video');
var playerWrapper = document.querySelector('.player-wrapper');
var seekTimeDuration = document.querySelector('.seektimeduration');
var timeduration = document.querySelector('.timeduration');
var controllersWrapper = document.querySelector('.controllers');
var backwardBtn = document.querySelector('button.backward');
var playpauseBtn = document.querySelector('button.playpause');
var forwardBtn = document.querySelector('button.forward');
//playpauseBtn.innerHTML = "Play";
playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-play", "fw");
var stopBtn = document.querySelector('button.stop');
var muteunmuteBtn = document.querySelector('button.muteunmute');
//muteunmuteBtn.innerHTML = "Mute";
muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
var volumeBar = document.querySelector('.volumebar');

// palybackrange
var playbackrange2xBtn = document.querySelector(".speed-menu span:nth-child(1)");
var playbackrange1xBtn = document.querySelector(".speed-menu span:nth-child(2)");
var playbackrange05xBtn = document.querySelector(".speed-menu span:nth-child(3)");

var closecaptionsBtn = document.querySelector('button.closecaptions');
closecaptionsBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-file-text", "fw");
var fullscreenBtn = document.querySelector('button.fullscreen');
var seektime = document.querySelector('div.seek');





// Check if the Browser can play video.
(function(){
  if (video.canPlayType){
    video.controls = false;
    console.log(video.textTracks[0].mode);
  } else {
    video.controls = true;
    mainWrapper.innerHTML = "<p>It seems your browser doesn't support HTML5 video tag. Please update it!</p>";
  }
}());

// PLAY / PAUSE
playpauseBtn.addEventListener("click",
  function() {
    if(!video.paused){
      video.pause();
      //playpauseBtn.innerHTML = "Play";
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-pause", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-play", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa-refresh");
    } else {
      video.play();
      //playpauseBtn.innerHTML = "Pause";
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-play", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-pause", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa-refresh");
    }
  }, false);

// MUTE / UNMUTE / VOLUME

muteunmuteBtn.addEventListener("click",
function() {
  if(!video.muted){
    video.muted = true;
    //muteunmuteBtn.innerHTML = "unMute";
    muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-off", "fw");
    muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-up", "fw");
  } else if (video.muted === true && video.volume === 0){
    volumeBar.value = video.volume = 0.5;
    //muteunmuteBtn.innerHTML = "Mute";
    muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-up", "fw");
    muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
    video.muted = false;
  } else{
    video.muted = false;
    //muteunmuteBtn.innerHTML = "Mute";
    muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-up", "fw");
    muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
  }
}, false);

// VOLUME

volumeBar.addEventListener("change",
  function(){
    video.volume = volumeBar.value;
    if (video.volume === 0) {

      //muteunmuteBtn.innerHTML = "unMute";
      muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-off", "fw");
    muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-up", "fw");
      video.muted = true;
    } else {
      video.muted = false;
      //muteunmuteBtn.innerHTML = "Mute";
      muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-up", "fw");
      muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
    }
  }, false );

// TIME FUNCTIONS

video.addEventListener("timeupdate",
  function(){
    var percentual = video.currentTime / video.duration * 100;
    seekTimeDuration.value = percentual;
    timeduration.innerHTML = getTime();
    if (video.ended) {
      //playpauseBtn.innerHTML = "reload";
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-refresh", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa-play", "fa-pause");
    }
  }, false);

seekTimeDuration.addEventListener("change",
    function(){
      var videoTime = seekTimeDuration.value * video.duration / 100;
      video.currentTime = videoTime;
    }
);

function getTime() {
  var seconds = Math.floor( video.currentTime );
  var minutes = Math.floor( seconds/60 );
  var durationsMin = Math.floor( video.duration/60 );
  var durationsSec = Math.floor( video.duration );

  var html = "";
  if(minutes < 10){ html += '0' + minutes; }
    else { html += minutes;  }
  html += ":";
  if ((seconds -= minutes*60) < 10) { html += '0' + seconds; }
    else { html += seconds; }

  html += ' / ';

  if (durationsMin < 10) { html += '0' + durationsMin; }
    else { html += durationsMin; }
  html += ":";
  if ((durationsSec -= durationsMin*60) < 10) { html += "0" + durationsSec; }
    else { html += durationsSec; }

  return html;
}

// STOP

stopBtn.addEventListener("click",
  function(){
    video.pause();
    video.currentTime = 0;
    //playpauseBtn.innerHTML = "Play";
     playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-pause", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-play", "fw");
  }, false );

// SKIP
backwardBtn.addEventListener('click', function(){
  if(video.currentTime <= 10) {
      video.currentTime = 0;
  } else {
    video.currentTime += -10;
  }
});
forwardBtn.addEventListener('click', function(){
  video.currentTime += 10;
});

function r(f){/in/.test(document.readyState)?setTimeout(r,9,f):f();}
r(function(){

// trackList Variables
var c_tracks = video.textTracks;
var c_track = c_tracks[0];
var cues = c_track.cues;
var htmlTrack = document.getElementById("text-track");
var spanTrack = htmlTrack.getElementsByTagName('span');


// LOAD CAPTIONS

closecaptionsBtn.addEventListener("click",
  function() {
    if(c_track.mode === "disabled" ){
      c_track.mode = "showing";
      closecaptionsBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-file-text-o", "fw");
      closecaptionsBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-file-text", "fw");
    } else{
      c_track.mode = "disabled";
      closecaptionsBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-file-text", "fw");
      closecaptionsBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-file-text-o", "fw");
    }
  }, false );

//print a message in element
function print(message, el) {
  el.innerHTML = message;
}

//html for cues
function getCues() {

  report = '<p>';
  for (var i = 0; i < cues.length; i++) {
    report += '<span class="cue" data-time="'+ cues[i].startTime +'"> '+ cues[i].text +'</span>';
  } 
  report += '</p>';
  return report;
}

// print cues in the browser
print(getCues(), htmlTrack);

for (var i = 0; i < spanTrack.length; i++) {
  spanTrack[i].addEventListener('click', function(){
    var self = this;
    var startTime = self.getAttribute('data-time');
    video.currentTime = startTime;
  });

}

/*code to run*/});

// Playback Rate

playbackrange2xBtn.addEventListener('click',
  function() { 
    video.playbackRate = 2.0; }, false );

playbackrange1xBtn.addEventListener('click',
  function() { video.playbackRate = 1.0; }, false );

playbackrange05xBtn.addEventListener('click',
  function() { video.playbackRate = 0.5; }, false );


// BUFFER

/*
 https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/buffering_seeking_time_ranges#Creating_our_own_Buffering_Feedback

AND

http://stackoverflow.com/questions/25651719/why-does-audio-buffered-end0-get-an-error-message-when-i-try-to-get-buffered-t

*/

video.addEventListener('progress',
  function() {
    if (video.readyState === 4){
      var bufferedEnd = video.buffered.end(video.buffered.length - 1);
      var duration =  video.duration;
      if (duration > 0) {
        seektime.style.width = ((bufferedEnd / duration)*100) + "%";
      }
    }
  }, false );



// FULLSCREEN ENTER/EXIT
fullscreenBtn.addEventListener("click",
function() {
  if (!document.fullscreenElement &&
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
    this.getElementsByTagName('i')[0].classList.remove("fa", "fa-expand", "fw");
    this.getElementsByTagName('i')[0].classList.add("fa", "fa-compress", "fw");
    videoWrapper.style.width = "100%";
    video.style.width = "100%";
    if (videoWrapper.requestFullscreen) {
      videoWrapper.requestFullscreen();
    } else if (videoWrapper.msRequestFullscreen) {
      videoWrapper.msRequestFullscreen();
    } else if (videoWrapper.mozRequestFullScreen) {
      videoWrapper.mozRequestFullScreen();
    } else if (videoWrapper.webkitRequestFullscreen) {
      videoWrapper.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      this.getElementsByTagName('i')[0].classList.remove("fa", "fa-compress", "fw");
      this.getElementsByTagName('i')[0].classList.add("fa", "fa-expand", "fw");
    videoWrapper.style.width = "739px";
    video.style.width = "739px";
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      this.getElementsByTagName('i')[0].classList.remove("fa", "fa-compress", "fw");
      this.getElementsByTagName('i')[0].classList.add("fa", "fa-expand", "fw");
      videoWrapper.style.width = "739px";
      video.style.width = "739px";
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      this.getElementsByTagName('i')[0].classList.remove("fa", "fa-compress", "fw");
      this.getElementsByTagName('i')[0].classList.add("fa", "fa-expand", "fw");
      videoWrapper.style.width = "739px";
      video.style.width = "739px";
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      this.getElementsByTagName('i')[0].classList.remove("fa", "fa-compress", "fw");
      this.getElementsByTagName('i')[0].classList.add("fa", "fa-expand", "fw");
      videoWrapper.style.width = "739px";
      video.style.width = "739px";
    }
  }
}, false );


videoWrapper.addEventListener('mouseenter', function(){
  playerWrapper.style.display = "block";
  controllersWrapper.style.display = "block";
  playerWrapper.classList.remove("player-wrapper-only");
});

playerWrapper.addEventListener('mouseenter', function(){
  this.style.display = "block";
  controllersWrapper.style.display = "block";
  this.classList.remove("player-wrapper-only");
});

videoWrapper.addEventListener('mouseleave', function(){
  controllersWrapper.style.display = "none";
  playerWrapper.classList.add("player-wrapper-only");
});

// @codekit-prepend "_icons.js"
// @codekit-prepend  "_player-ui.js"
// @codekit-prepend  "_functions.js"


