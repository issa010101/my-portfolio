// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sessionLengthElem = document.getElementById('session-length');
  const breakLengthElem = document.getElementById('break-length');
  const timeLeftElem = document.getElementById('time-left');
  const timerLabelElem = document.getElementById('timer-label');
  
  let sessionLength = 25;
  let breakLength = 5;
  let timeLeft = sessionLength * 60;
  let isRunning = false;
  let isSession = true;
  let timer = null;

  function updateDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeLeftElem.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      timerLabelElem.textContent = isSession ? 'Session' : 'Break';
  }

  function startTimer() {
      if (isRunning) return;
      isRunning = true;
      timer = setInterval(() => {
          timeLeft--;
          if (timeLeft < 0) {
              if (isSession) {
                  isSession = false;
                  timeLeft = breakLength * 60;
              } else {
                  isSession = true;
                  timeLeft = sessionLength * 60;
              }
          }
          updateDisplay();
      }, 1000);
  }

  function stopTimer() {
      isRunning = false;
      clearInterval(timer);
  }

  function resetTimer() {
      stopTimer();
      sessionLength = 25;
      breakLength = 5;
      timeLeft = sessionLength * 60;
      isSession = true;
      updateDisplay();
  }

  document.getElementById('session-decrement').addEventListener('click', () => {
      if (sessionLength > 1) {
          sessionLength--;
          if (!isRunning && isSession) {
              timeLeft = sessionLength * 60;
              updateDisplay();
          }
          sessionLengthElem.textContent = sessionLength;
      }
  });

  document.getElementById('session-increment').addEventListener('click', () => {
      sessionLength++;
      if (!isRunning && isSession) {
          timeLeft = sessionLength * 60;
          updateDisplay();
      }
      sessionLengthElem.textContent = sessionLength;
  });

  document.getElementById('break-decrement').addEventListener('click', () => {
      if (breakLength > 1) {
          breakLength--;
          if (!isRunning && !isSession) {
              timeLeft = breakLength * 60;
              updateDisplay();
          }
          breakLengthElem.textContent = breakLength;
      }
  });

  document.getElementById('break-increment').addEventListener('click', () => {
      breakLength++;
      if (!isRunning && !isSession) {
          timeLeft = breakLength * 60;
          updateDisplay();
      }
      breakLengthElem.textContent = breakLength;
  });

  document.getElementById('start-stop').addEventListener('click', () => {
      if (isRunning) {
          stopTimer();
          document.getElementById('start-stop').textContent = 'Start';
      } else {
          startTimer();
          document.getElementById('start-stop').textContent = 'Pause';
      }
  });

  document.getElementById('reset').addEventListener('click', () => {
      resetTimer();
      document.getElementById('start-stop').textContent = 'Start';
  });

  updateDisplay();
});
