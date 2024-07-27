const breakIncrement = document.getElementById("break-increment")
const breakDecrement = document.getElementById("break-decrement")
const breakLength = document.getElementById("break-length")
const sessionIncrement = document.getElementById("session-increment")
const sessionDecrement = document.getElementById("session-decrement")
const sessionLength = document.getElementById("session-length")
const startbutton = document.getElementById("start_stop")
const stopbutton = document.getElementById("stop")
const resetbutton = document.getElementById("reset")
const timeleft = document.getElementById("time-left")



let timer
let timerStatus = "begin"
 startbutton.addEventListener("click", () => {
    if (timerStatus === "begin") {
    console.log("start timer")
    timerStatus = "counting"
    timer = setInterval(() => {  
      timeleft.innerHTML = decrement(timeleft.innerHTML)
    }, 1000)
  } if(timerStatus === "stopped") {
    timer = setInterval(() => {  
        timeleft.innerHTML = decrement(timeleft.innerHTML)
      }, 1000)
  }
})

stopbutton.addEventListener("click", () => {
    if (timerStatus === "counting") {
        console.log("stopped")
        timerStatus = "stopped"
        timeleft.innerHTML = parseInt("25") + ":" + parseInt("0") + parseInt("0")
        clearInterval(timer)
}})

resetbutton.addEventListener("click", () => {
    clearInterval(timer)
})

const decrement = (timestring) => {
let timeDisplay = timestring.split(":")
let firstDisplay = parseInt(timeDisplay[0])
let secondDisplay = parseInt(timeDisplay[1])

secondDisplay -= 1

if(secondDisplay === -1) {
    secondDisplay = 59
    firstDisplay -= 1
}

if(secondDisplay <= 9) {
    secondDisplay = "0" + secondDisplay
}

return firstDisplay + ":" + secondDisplay
}

breakIncrement.addEventListener("click", () => {
    breakLength.innerHTML = parseInt(breakLength.innerHTML) + 1
})
breakDecrement.addEventListener("click", () => {
    breakLength.innerHTML = parseInt(breakLength.innerHTML) - 1
})
sessionIncrement.addEventListener("click", () => {
    console.log(timeleft.innerHTML)
    sessionLength.innerHTML = parseInt(sessionLength.innerHTML) + 1
})