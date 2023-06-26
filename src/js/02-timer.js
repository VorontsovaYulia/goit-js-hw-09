import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
const inputEl = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
        const currentDate = new Date();
        
        if (currentDate > selectedDates[0]) {
            Notify.warning("Please choose a date in the future")
        
        } else {
            startBtn.disabled = false;
            startBtn.addEventListener("click", onStart);
            
            function onStart(evt) {
                let milliseconds = selectedDates[0] - currentDate;
                
                setInterval(() => {
                    let count = convertMs(milliseconds);

                    if (milliseconds > 0) {
                        addLeadingZero(count);
                        milliseconds -= 1000;
                        
                    } else {
                        startBtn.disabled = true;
                        return;
                    }
                   
                },1000)
            }
        } 
  },
};

flatpickr(inputEl, options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    

  return { days, hours, minutes, seconds };
}

function addLeadingZero(count) {
    
        daysEl.textContent = count.days.toString().padStart(2, "0");
        hoursEl.textContent = count.hours.toString().padStart(2, "0");
        minutesEl.textContent = count.minutes.toString().padStart(2, "0");
        secondsEl.textContent = count.seconds.toString().padStart(2, "0");
    
}








