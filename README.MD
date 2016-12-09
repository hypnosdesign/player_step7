#Instructions

In this project, you'll build an HTML5 video player using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, you'll build an interactive video player that synchronizes the video and the transcript. The transcript should be placed below the video, and should highlight as the video progresses. When a user clicks any part of the transcript it should take them to the appropriate place in the video.

**NOTE:** To get an "Exceeds Expectations" grade for this project, you'll need to "exceed" on every requirement that has an "Exceeds Expectations" option.

**NOTE:** The Front End Web Development Techdegree is meant to train you in HTML, CSS and JavaScript, and let you practice and show your mastery of these fundamental building blocks of the web. Because of that, please avoid using frameworks like Bootstrap, Foundation, Skeleton, and so on for this project. Even though you may end up using frameworks like these professionally, you still need to know and be able to implement designs with your own knowledge of HTML, CSS and JavaScript. However, you can rely on JavaScript libraries like jQuery to implement the programming requirements for this project.

In addition, please avoid submitting any projects that rely on a server-side technology like PHP or Ruby on Rails.

##Before you start

To prepare for this project you'll need to make sure you complete and understand these steps.

###2 steps
**Have a GitHub account and know how to create a new repository and upload files to it.**
- As with the previous projects, you'll submit your finished working using GitHub.
- If you need a reminder on how to use GitHub and GitHub desktop to create a new repository check out this workshop 'Share Your Projects With GitHub Desktop' in the Project Resources.

**Download the project files. We've supplied the following files for you to use:**
- mockup files. 3 PNG files representing three different ways the player will look:
  - playing.png shows what the video player and transcript should look like when the video is playing.
  - paused.png shows what the player should look like when the video is paused
  - hover.png represents what the user sees when mousing over the video

- a transcript of the audio for the video with time stamps on it (captions.txt)
- 2 video files: one in MP4 format and the other in OGG format
- A closed-captioning file (captions.vtt) for the optional extra credit

##Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

###13 steps
- Embed the video using HTML.
- Check that the video works in at least 3 modern browsers.
  - You can use Chrome and Firefox, if you have a PC also check your site using Internet Explorer and if you have a Mac check it using Safari.
- Add the transcript below the video (as shown in the mockup file).
  - Use the captions.txt file for the text. Add appropriate <p> tags around the text.
- Style the page using the mockups as guides.
- Implement the play and pause buttons.
- Add volume button that lets you mute the sound or turn it on.
- Implement the fullscreen button.
- Implement the playback progress control.
  - A user should be able to click anywhere on the playback bar to jump to that part of the video.
  - As the video plays the playback bar should fill in.
  - As the video plays the current time should be displayed and updated e.g. 0:10 / 11:34.
- Use Javascript or CSS to hide and show the video player button on mouse hover states.
  - Only the progress bar should remain.
- As the media playback time changes, sentences in the transcript should highlight.
  - Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.
  - You can use the captions.vtt file to see the times at which the words are spoken in the video.
- When submitting your project be sure to make a note in the comments which browsers you have tested with.
- Make sure to check your code is valid by running it through an HTML and CSS validator.
  - Links to the validators can be found in the Project Resources. This will help you spot any errors that might be in your code.
  - There are a few exceptions that you don’t need to fix:
    - Don’t worry about any warnings, we just need you to check any errors that might be there.
    - If CSS validator flags use of calc, or vendor prefixes these errors should be ignored.
    - If HTML validator flags use of pipe (‘|’) in Google font links/URLs this error can also be ignored.
- You should also check for issues with your JavaScript code using JSHint, linked in the Project Resources.
  - JSHint may show you some warnings, so make sure to check through those for any potential problems.
  - You do not need to fix every warning listed but reviewing them can be useful.

##Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

###6 steps
- Embed the .vtt file as a closed captioning track and add a button to video controls to toggle captions on and off.
- A creative and thoughtful responsive design.
- Playback speed control or other helpful controls.
- Volume control so viewer can adjust the volume level, not just mute or on.
- Playback controls include buffering progress of the downloaded video.
- When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video.
