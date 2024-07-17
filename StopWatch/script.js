let min = 0;
        let sec = 0;
        let milisec = 0;
        let interval;
        let lapCount = 0;

        document.getElementById("startbtn").addEventListener("click", startTimer);
        document.getElementById("stopbtn").addEventListener("click", stopTimer);
        document.getElementById("pausebtn").addEventListener("click", pauseTimer);
        document.getElementById("resetbtn").addEventListener("click", resetTimer);

        function startTimer() {
            clearInterval(interval);
            interval = setInterval(runTimer, 10);
        }

        function runTimer() {
            milisec++;
            if (milisec === 100) {
                milisec = 0;
                sec++;
            }
            if (sec === 60) {
                sec = 0;
                min++;
            }
            updateDisplay();
        }

        function stopTimer() {
            clearInterval(interval);
            addLap();
        }

        function pauseTimer() {
            clearInterval(interval);
        }

        function resetTimer() {
            clearInterval(interval);
            min = 0;
            sec = 0;
            milisec = 0;
            lapCount = 0;
            updateDisplay();
            document.getElementById("lap list").innerHTML = '';
        }

        function updateDisplay() {
            document.getElementById("min").textContent = min < 10 ? `0${min}:` : `${min}:`;
            document.getElementById("sec").textContent = sec < 10 ? `0${sec}:` : `${sec}:`;
            document.getElementById("milisec").textContent = milisec < 10 ? `0${milisec}` : `${milisec}`;
        }

        function addLap() {
            lapCount++;
            const lapTime = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}:${milisec < 10 ? `0${milisec}` : milisec}`;
            const lapItem = document.createElement('li');
            lapItem.innerHTML = `Lap ${lapCount}: <span>${lapTime}</span>`;
            document.getElementById("lap list").appendChild(lapItem);
        }