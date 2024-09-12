document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('birthdayVideo');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.textContent = 'Pause Video';
        } else {
            video.pause();
            playButton.textContent = 'Play Video';
        }
    });
});
