const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let id;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBtn.disabled = true;

startBtn.addEventListener("click", onStart);

function onStart() {
     startBtn.disabled = true;
    stopBtn.disabled = false;
    
   return id = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)   
};

stopBtn.addEventListener("click", onStop);

function onStop() {
     clearInterval(id);
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
};



