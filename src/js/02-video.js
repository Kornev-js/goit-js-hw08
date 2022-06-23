var throttle = require('lodash.throttle');

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
    
  
 
 
  localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds));
  
  
};
player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY));
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
resumePlayback()
