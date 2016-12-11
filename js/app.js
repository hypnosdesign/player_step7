var mainWrapper     = document.querySelector('.main-wrapper');
var videoWrapper    =  document.querySelector('.video-wrapper');
var mediaWrapper    =  document.querySelector('.media-wrapper');
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

// Check if the Browser can play video.
(function(){
  if (video.canPlayType){
    video.controls = false;
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
      clearInterval(interval);
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-pause", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-play", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa-refresh");
    } else {
      video.play();
      interval = setInterval(updatePlayer, 30);
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-play", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-pause", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa-refresh");
    }
  }, false);

// SEEK BAR

function updatePlayer(){
  var percentage = (video.currentTime / video.duration) * 100;
  seekTime.style.width = percentage + "%";
  if(video.ended) {
    clearInterval(interval);
  }
}

timeControllers.addEventListener("click", function(e){
  var mouseX = e.pageX - videoWrapper.offsetParent.offsetLeft;
  var width = window.getComputedStyle(controllers).width;
  width = parseInt(width);
  video.currentTime = (mouseX / width) * video.duration;
  updatePlayer();
}, false)

// MUTE / UNMUTE / VOLUME

muteunmuteBtn.addEventListener("click",
function() {
  if(!video.muted){
    video.muted = true;
    //"unMute";
    muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-off", "fw");
    muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-up", "fw");
  } else if (video.muted === true && video.volume === 0){
    //"Mute";
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

volumeBar.addEventListener("click",
  function(e){
  var mouseX = e.pageX - this.offsetLeft - videoWrapper.offsetParent.offsetLeft;
  var width = window.getComputedStyle(this).width;
  width = parseInt(width);
  video.volume = (mouseX / width);
  seekVolumeBar.style.width = (video.volume*100) + "%";
    if (video.volume === 0) {
      //"unMute";
      muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-off", "fw");
      muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-up", "fw");
      video.muted = true;
    } else {     
      //"Mute";
      muteunmuteBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-volume-up", "fw");
      muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
      video.muted = false;
    }
  }, false );

// TIME FUNCTIONS

video.addEventListener("timeupdate",
  function(){
    timeduration.innerHTML = getTime();
    if (video.ended) {
      // "reload";
      playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-refresh", "fw");
      playpauseBtn.getElementsByTagName('i')[0].classList.remove("fa-play", "fa-pause");
    }
  }, false);


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
  updatePlayer();
});
forwardBtn.addEventListener('click', function(){
  video.currentTime += 10;
  updatePlayer();
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
    updatePlayer();
  }, false);
}


// color captions on the video current time


video.addEventListener("timeupdate", function(){
  var cues = video.textTracks[0].cues;
  var htmlTrack = document.getElementById("text-track");
  var spanTrack = htmlTrack.getElementsByTagName('span');
    for (var i = 0; i < cues.length; i++) {
      var cuesTime = cues[i].startTime;
      var cuesEnd = cues[i].endTime;
      var curTime = video.currentTime;
        if( curTime >= cuesTime && curTime <= cuesEnd  ) {
            spanTrack[i].style.color = 'orange';
            } else {
              spanTrack[i].style.color = 'inherit';
            }
    }
}, false)


/*code to run*/});

// Playback Rate

playbackrange2xBtn.addEventListener('click',
  function() { video.playbackRate = 2.0; }, false );

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
        seekBuffer.style.width = ((bufferedEnd / duration)*100) + "%";
      }
    }
  }, false );


var isFullscreen= false;
fullscreenBtn.addEventListener('click', function() {
    if(!isFullscreen){
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } 
        else if (video.mozRequestFullScreen) {
            mediaWrapper.mozRequestFullScreen(); // Firefox
            videoWrapper.style.height = 100 + "%";
            videoWrapper.style.width = 100 + "%";
            video.style.width = 100 + "%";
        } 
        else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
        isFullscreen=true;
        mediaWrapper.classList.add('infullscreen');
        videoWrapper.classList.add('infullscreen');
        playerWrapper.style.width = 100 + "%";
        console.log(this);
        this.getElementsByTagName('i')[0].classList.remove("fa", "fa-expand", "fw");
        this.getElementsByTagName('i')[0].classList.add("fa", "fa-compress", "fw");
    }
    else{

        if(document.cancelFullScreen) {
            document.cancelFullScreen();
        } 
        else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } 
        else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        isFullscreen=false;
        mediaWrapper.classList.remove('infullscreen');
        videoWrapper.classList.remove('infullscreen');

        fullscreenBtn.getElementsByTagName('i')[0].classList.add("fa-expand");
        fullscreenBtn.getElementsByTagName('i')[0].classList.remove("fa-compress");
    }
        }, false);
  

// @codekit-prepend "_icons.js"
// @codekit-prepend  "_player-ui.js"
// @codekit-prepend  "_functions.js"


