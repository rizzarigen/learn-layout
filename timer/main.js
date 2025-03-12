// import modules
import { timer_start, timer_stop } from "./scripts/timer.js";

// inputs
const hours_element = document.querySelector("#hours");
const mins_element = document.querySelector("#mins");
const sec_element = document.querySelector("#sec");

// btns
const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const pause_btn = document.querySelector("#pause");

// outputs
const hours_output = document.querySelector("#timer-output-hours");
const mins_output = document.querySelector("#timer-output-mins");
const sec_output = document.querySelector("#timer-output-sec");


pause_btn.disabled = true;
stop_btn.disabled= true;

start_btn.addEventListener("click", () => {
    start_btn.disabled = true;
    pause_btn.disabled = false;
    stop_btn.disabled = false;
    timer_start(hours_element.value, mins_element.value, sec_element.value);
});

stop_btn.addEventListener("click", () => {
    pause_btn.disabled = true;
    start_btn.disabled = false;
    stop_btn.disabled = true; 
    timer_stop();
    hours_output.innerHTML = 0
    mins_output.innerHTML = 0
    sec_output.innerHTML = 0
    hours_element.value = 0
    mins_element.value = 0
    sec_element.value = 0
}
);

pause_btn.addEventListener("click", () => {
    start_btn.disabled = false;
    pause_btn.disabled = true;
    timer_stop()
    hours_element.value = hours_output.innerHTML
    mins_element.value = mins_output.innerHTML
    sec_element.value = sec_output.innerHTML
}
);
