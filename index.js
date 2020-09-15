const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const formTimer = document.querySelector('form')
const buttonTimer = document.querySelector('button')
const hourInput = document.getElementById('hourInput')
const minuteInput = document.getElementById('minuteInput')
const secondInput = document.getElementById('secondInput')

let times = 0
let interval = null

formTimer.addEventListener('submit', e => {
  e.preventDefault()
  const currentStatus = buttonTimer.innerHTML
  let hour = Number(hourInput.value) * 3600
  let minute = Number(minuteInput.value) * 60
  let second = Number(secondInput.value)
  if (currentStatus === 'Start') {
    times = hour + minute + second
    buttonTimer.style.backgroundColor = '#ff0000'
    buttonTimer.innerHTML = 'Stop'
    console.log(times, 'here')
    interval = setInterval(countDown, 1000)
  } else {
    stopTimer()
  }
})

function displayTime() {
  let hours = Math.floor(times / 3600)
  let minutes = Math.floor((times / 60) % 60)
  let seconds = times % 60
  // console.log(hours, minutes, seconds)
  // console.log(hoursElement.innerHTML)
  hoursElement.innerHTML = addZeroForBelowTen(hours)
  minutesElement.innerHTML = addZeroForBelowTen(minutes)
  secondsElement.innerHTML = addZeroForBelowTen(seconds)
}

function countDown() {
  if (times <= 0) {
    stopTimer()
  } else {
    times--
    displayTime()
  }
}

function stopTimer() {
  buttonTimer.style.backgroundColor = '#2df522'
  buttonTimer.innerHTML = 'Start'
  clearInterval(interval)
  interval = null
  hoursElement.innerHTML = '00'
  minutesElement.innerHTML = '00'
  secondsElement.innerHTML = '00'
}

function addZeroForBelowTen(numbers) {
  return numbers < 10 ? `0${numbers}` : numbers
}

// countDown()
