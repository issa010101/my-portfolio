// script.js

document.addEventListener("DOMContentLoaded", () => {
    const pads = document.querySelectorAll('.pad-button');
    
    pads.forEach(pad => {
        pad.addEventListener('click', () => {
            const sound = pad.getAttribute('data-sound');
            const audio = new Audio(sound);
            audio.play();
        });
    });
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
    const pads = document.querySelectorAll('.pad-button');
    const volumeControl = document.getElementById('volume');

    // Function to play sound
    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.volume = volumeControl.value; // Set volume based on slider
        audio.play();
    };

    // Event listeners for drum pads
    pads.forEach(pad => {
        pad.addEventListener('click', () => {
            const sound = pad.getAttribute('data-sound');
            playSound(sound);
        });
    });

    // Update volume on slider change
    volumeControl.addEventListener('input', () => {
        // Volume is already applied in playSound function
    });
});
