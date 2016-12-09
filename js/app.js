
// ICONS
var playIcn = '<svg viewBox="0 0 20 20"><path d="M15 10.001c0 .299-.305.514-.305.514l-8.561 5.303C5.51 16.227 5 15.924 5 15.149V4.852c0-.777.51-1.078 1.135-.67l8.561 5.305c-.001 0 .304.215.304.514z"/></svg>';

var pauseIcn = '<svg viewBox="0 0 20 20"><path d="M15 3h-2c-.553 0-1 .048-1 .6v12.8c0 .552.447.6 1 .6h2c.553 0 1-.048 1-.6V3.6c0-.552-.447-.6-1-.6zM7 3H5c-.553 0-1 .048-1 .6v12.8c0 .552.447.6 1 .6h2c.553 0 1-.048 1-.6V3.6c0-.552-.447-.6-1-.6z"/></svg>';

var muteIcn = '<svg viewBox="0 0 20 20"><path d="M14.201 9.194c1.389 1.883 1.818 3.517 1.559 3.777-.26.258-1.893-.17-3.778-1.559l-5.526 5.527c4.186 1.838 9.627-2.018 10.605-2.996.925-.922.097-3.309-1.856-5.754l-1.004 1.005zM8.667 7.941c-1.099-1.658-1.431-3.023-1.194-3.26.233-.234 1.6.096 3.257 1.197l1.023-1.025C9.489 3.179 7.358 2.519 6.496 3.384c-.928.926-4.448 5.877-3.231 9.957l5.402-5.4zm9.854-6.463a.999.999 0 0 0-1.414 0L1.478 17.108a.999.999 0 1 0 1.414 1.414l15.629-15.63a.999.999 0 0 0 0-1.414z"/></svg>';

var unmuteIcn = '<svg viewBox="0 0 20 20"><path d="M5.312 4.566C4.19 5.685-.715 12.681 3.523 16.918c4.236 4.238 11.23-.668 12.354-1.789 1.121-1.119-.335-4.395-3.252-7.312-2.919-2.919-6.191-4.376-7.313-3.251zm9.264 9.59c-.332.328-2.895-.457-5.364-2.928-2.467-2.469-3.256-5.033-2.924-5.363.328-.332 2.894.457 5.36 2.926 2.471 2.467 3.258 5.033 2.928 5.365zm.858-8.174l1.904-1.906a.999.999 0 1 0-1.414-1.414L14.02 4.568a.999.999 0 1 0 1.414 1.414zM11.124 3.8a1 1 0 0 0 1.36-.388l1.087-1.926a1 1 0 0 0-1.748-.972L10.736 2.44a1 1 0 0 0 .388 1.36zm8.748 3.016a.999.999 0 0 0-1.36-.388l-1.94 1.061a1 1 0 1 0 .972 1.748l1.94-1.061a1 1 0 0 0 .388-1.36z"/></svg>';

var reloadIcn = '<svg viewBox="0 0 20 20"><path d="M.685 10h2.372v-.205c.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199a8.13 8.13 0 0 1-5.033-1.738l1.406-1.504a6.099 6.099 0 0 0 3.627 1.193c3.386 0 6.131-2.754 6.131-6.15 0-3.396-2.745-6.15-6.131-6.15-3.317 0-6.018 2.643-6.125 5.945V10h2.672l-3.494 3.894L.685 10z"/></svg>';

var subtitlesIcn = '<svg viewBox="0 0 48 48"><path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM16 28h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4v-4h4v4zm14 12H20v-4h10v4zm6-6H20v-4h16v4zm0-6H20v-4h16v4z"/></svg>';

var fullscreenIcn = '<svg viewBox="0 0 20 20"><path d="M6.987 10.987l-2.931 3.031L2 11.589V18h6.387l-2.43-2.081 3.03-2.932-2-2zM11.613 2l2.43 2.081-3.03 2.932 2 2 2.931-3.031L18 8.411V2h-6.387z"/></svg>';

var fullscreenExitIcn = '<svg viewBox="0 0 20 20"><path d="M4.1 14.1L1 17l2 2 2.9-3.1L8 18v-6H2l2.1 2.1zM19 3l-2-2-2.9 3.1L12 2v6h6l-2.1-2.1L19 3z"/></svg>'

var backwardIcn = '<svg viewBox="0 0 20 20"><path d="M17.959 4.571L10.756 9.52s-.279.201-.279.481.279.479.279.479l7.203 4.951c.572.38 1.041.099 1.041-.626V5.196c0-.727-.469-1.008-1.041-.625zm-9.076 0L1.68 9.52s-.279.201-.279.481.279.479.279.479l7.203 4.951c.572.381 1.041.1 1.041-.625v-9.61c0-.727-.469-1.008-1.041-.625z"/></svg>';

var forwardIcn = '<svg viewBox="0 0 20 20"><path d="M9.244 9.52L2.041 4.571C1.469 4.188 1 4.469 1 5.196v9.609c0 .725.469 1.006 1.041.625l7.203-4.951s.279-.199.279-.478c0-.28-.279-.481-.279-.481zm9.356.481c0 .279-.279.478-.279.478l-7.203 4.951c-.572.381-1.041.1-1.041-.625V5.196c0-.727.469-1.008 1.041-.625L18.32 9.52s.28.201.28.481z"/></svg>';

var closeCaptionsIcn = '<svg viewBox="67 -47.7 153 114.7"><style>.st0{fill:#fff}</style><path d="M67-47.7h153V67H67V-47.7z"/><path class="st0" d="M205.7 9.1c-.2-20-.9-28.8-5.7-35-.9-1.3-2.5-2.1-3.8-3-4.7-3.4-26.6-4.7-52.1-4.7s-48.4 1.2-53 4.7c-1.4 1-3 1.7-4 3-4.7 6.2-5.3 14.9-5.6 35 .3 20 .9 28.8 5.6 35 1 1.4 2.6 2.1 4 3 4.6 3.5 27.6 4.7 53 4.8 25.5-.2 47.4-1.3 52.1-4.8 1.3-.9 2.9-1.6 3.8-3 4.7-6.2 5.5-14.9 5.7-35z"/><path d="M144.1 52.1c-31.3-.2-49.2-1.9-53.1-4.9-.4-.2-.7-.5-1.1-.7-1.1-.6-2.2-1.3-2.9-2.4-4.7-6.3-5.3-15.5-5.6-35 .3-19.5.9-28.7 5.6-35 .7-1 1.9-1.7 3-2.4.3-.2.7-.4 1-.7 5.4-4.1 35.6-4.7 53.1-4.7 29.5 0 48 1.7 52.1 4.7.3.2.7.5 1.1.7 1 .7 2.1 1.3 2.7 2.3 4.6 6 5.5 14.4 5.7 35-.2 20.6-1.1 29-5.7 35-.6 1-1.7 1.7-2.7 2.3-.4.2-.8.5-1.1.7-4 3.2-21.1 4.8-52.1 5.1zm0-85.5c-17.5 0-47.6.6-53 4.6-.3.2-.7.4-1 .7-1.1.7-2.2 1.4-2.9 2.4-4.7 6.2-5.3 15.4-5.6 34.9.3 19.5.9 28.7 5.6 34.9.7 1 1.7 1.7 2.8 2.3.4.2.8.5 1.1.7 3.9 3 21.7 4.6 53 4.8 31-.2 48-1.8 52-4.8.4-.3.8-.5 1.1-.7 1-.6 2-1.3 2.6-2.3 4.6-6 5.5-14.4 5.7-34.9-.2-20.6-1.1-28.9-5.7-34.9-.6-1-1.7-1.7-2.7-2.3-.4-.2-.7-.5-1.1-.7-4-3.1-22.4-4.7-51.9-4.7z"/><path d="M140.7 4c-1.3-15.7-9.6-24.9-24.6-24.9-13.6 0-24.3 12.3-24.3 32 0 19.8 9.8 32.2 25.9 32.2 12.9 0 21.9-9.5 23.3-25.3h-15.4c-.6 5.8-3.1 10.3-8.2 10.3-8.1 0-9.6-8.1-9.6-16.6 0-11.8 3.4-17.8 9-17.8 5 0 8.2 3.6 8.7 10l15.2.1zm53.2 0c-1.3-15.7-9.6-24.9-24.6-24.9-13.6 0-24.3 12.3-24.3 32 0 19.8 9.8 32.2 25.9 32.2 12.9 0 21.9-9.5 23.3-25.3h-15.4c-.6 5.8-3.1 10.3-8.2 10.3-8.1 0-9.6-8.1-9.6-16.6 0-11.8 3.4-17.8 9-17.8 5 0 8.2 3.6 8.7 10l15.2.1z"/></svg>'


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
//playpauseBtn.innerHTML = "Play";
playpauseBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-play", "fw");
var stopBtn = document.querySelector('button.stop');
var muteunmuteBtn = document.querySelector('button.muteunmute')
//muteunmuteBtn.innerHTML = "Mute";
muteunmuteBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-volume-off", "fw");
var volumeBar = document.querySelector('.volumebar');

// palybackrange
var playbacjkrangeBtn = document.querySelector('.playbackrange');
var playbackrange2xBtn = document.querySelector(".speed-menu span:nth-child(1)");
var playbackrange1xBtn = document.querySelector(".speed-menu span:nth-child(2)");
var playbackrange05xBtn = document.querySelector(".speed-menu span:nth-child(3)")


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
  } else if (video.muted == true && video.volume == 0){
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
    if (video.volume == 0) {

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
};

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
})

function r(f){/in/.test(document.readyState)?setTimeout(r,9,f):f()}
r(function(){

// trackList Variables
var c_tracks = video.textTracks;
var c_track = c_tracks[0];
var cues = c_track.cues;
var activeCues = c_track.activeCues;
var htmlTrack = document.getElementById("text-track");
var spanTrack = htmlTrack.getElementsByTagName('span');


// LOAD CAPTIONS

closecaptionsBtn.addEventListener("click",
  function() {
    if(c_track.mode == "disabled" ){
      c_track.mode = "showing";
      closecaptionsBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-file-text-o", "fw");
      closecaptionsBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-file-text", "fw");
    } else{
      c_track.mode = "disabled";
      closecaptionsBtn.getElementsByTagName('i')[0].classList.remove("fa", "fa-file-text", "fw");
      closecaptionsBtn.getElementsByTagName('i')[0].classList.add("fa", "fa-file-text-o", "fw");
    }
    console.log(video.textTracks[0].mode)
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
  })

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


