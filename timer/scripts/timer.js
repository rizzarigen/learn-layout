
var audioElement = new Audio();
audioElement.src = './sounds/timeout.mp3';
audioElement.volume = 0.5;
audioElement.preload = 'auto';


let stopped = false;

//outputs
const hours_output = document.querySelector("#timer-output-hours");
const mins_output = document.querySelector("#timer-output-mins");
const sec_output = document.querySelector("#timer-output-sec");

function timer_start(h, m, s) {

    stopped = false;
    hours_output.innerHTML = h;
    mins_output.innerHTML = m;
    sec_output.innerHTML = s;

    const Timer = setInterval(() => {

        if (stopped == true) {
            clearInterval(Timer);
        } else {
            if (s == 0) {
                if (m == 0) {
                    if (h == 0) {
                        stopped = true;
                        audioElement.play()
                        alert('time is up')
                    } else {
                        h--;
                        m = 59;
                        s = 59;
                        hours_output.innerHTML = h;
                        mins_output.innerHTML = m;
                        sec_output.innerHTML = s;
                    }
                } else {
                    m--;
                    s = 59;
                    mins_output.innerHTML = m;
                    sec_output.innerHTML = s;
                }
            } else {
                s--;
                sec_output.innerHTML = s;
            }

        }



    }, 1000);
}

function timer_stop() {
    stopped = true;
}

export { timer_start, timer_stop };
