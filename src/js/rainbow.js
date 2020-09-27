import colors from "./colors"

const refs = {
    start: document.querySelector("[data-action=start]"),
    stop: document.querySelector("[data-action=stop]"),
    body: document.querySelector("body")
}

const rainbow = {
    
    intervalId: null,
    isStarted: false,

    start(){
        if (!this.isStarted){
            refs.start.setAttribute("disabled", "")
        }
        this.intervalId = setInterval(()=>{
            refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
        }, 1000)
        this.isStarted = true;
    },

    stop(){
        if (this.isStarted){
            refs.start.removeAttribute("disabled")
        }
        clearInterval(this.intervalId)
        refs.start.removeEventListener("click", rainbow.start)
        this.isStarted = false;
    }
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener("click", rainbow.start.bind(rainbow))
refs.stop.addEventListener("click", rainbow.stop.bind(rainbow))