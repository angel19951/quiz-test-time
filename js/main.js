class Timer {
    constructor(displayElementId) {
      this.displayElement = document.getElementById(displayElementId);
      this.startTime = 0;
      this.elapsedTime = 0;
      this.timerInterval = null;
    }

    /**
     * Starts or resumes the timer.
     */
    start() {
      if (!this.timerInterval) {
        this.startTime = Date.now() - this.elapsedTime;
        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          this.updateDisplay();
        }, 1000);
      }
    }

    /**
     * Pauses the timer.
     */
    pause() {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    /**
     * Resets the timer to 0.
     */
    reset() {
      this.pause();
      this.elapsedTime = 0;
      this.updateDisplay();
    }

    /**
     * Updates the display with the current time.
     */
    updateDisplay() {
      const totalSeconds = Math.floor(this.elapsedTime / 1000);
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');
      this.displayElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
  }

  // Initialize the timer
  const timer = new Timer('timer-display');