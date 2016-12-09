

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
      playpauseBtn.innerHTML = "Play";
    } else {
      video.play();
      playpauseBtn.innerHTML = "Pause";
    }
  }, false);

// MUTE / UNMUTE / VOLUME

muteunmuteBtn.addEventListener("click",
function() {
  if(!video.muted){
    video.muted = true;
    muteunmuteBtn.innerHTML = "unMute";
  } else if (video.muted == true && video.volume == 0){
    volumeBar.value = video.volume = 0.5;
    muteunmuteBtn.innerHTML = "Mute";
    video.muted = false;
  } else{
    video.muted = false;
    muteunmuteBtn.innerHTML = "Mute";
  }
}, false);

// VOLUME

volumeBar.addEventListener("change",
  function(){
    video.volume = volumeBar.value;
    if (video.volume == 0) {
      muteunmuteBtn.innerHTML = "unMute";
      video.muted = true;
    } else {
      video.muted = false;
      muteunmuteBtn.innerHTML = "Mute";
    }
  }, false );

// TIME FUNCTIONS

video.addEventListener("timeupdate",
  function(){
    var percentual = video.currentTime / video.duration * 100;
    seekTimeDuration.value = percentual;
    timeduration.innerHTML = getTime();
    if (video.ended) {
      playpauseBtn.innerHTML = "reload";
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
    playpauseBtn.innerHTML = "Play";
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

var videoTrack = video.textTracks[0];
var videoCue = videoTrack.cues;
var htmlTrack = document.getElementById("text-track");
var spanTrack = htmlTrack.getElementsByTagName('span');

// LOAD CAPTIONS

closecaptionsBtn.addEventListener("click",
  function() {
    if(video.textTracks[0].mode == "disabled" ){
      video.textTracks[0].mode = "showing";
    } else{
      video.textTracks[0].mode = "disabled";
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
  for (var i = 0; i < videoCue.length; i++) {
    report += '<span class="cue" data-time="'+ videoCue[i].startTime +'"> '+ videoCue[i].text +'</span>';
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
        seektime.style.width = ((bufferedEnd / duration)*100) + "%";
      }
    }
  }, false );



// FULLSCREEN ENTER/EXIT
fullscreenBtn.addEventListener("click",
function() {
  if (!document.fullscreenElement &&
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
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
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}, false );
