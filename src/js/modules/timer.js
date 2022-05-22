const timer = (id, deadline) => {
  const addZero = (num) => {
    if (num <= 9) {
      return "0" + num
    }
    return num
  }
  const getTimeRemaining = (endTime) => {
    const time = Date.parse(endTime) - Date.parse(new Date())
    const seconds = Math.floor(time / 1000 % 60)
    const minutes = Math.floor(time / 1000 / 60 % 60)
    const hours = Math.floor(time / 1000 / 60 / 24 % 24)
    const days = Math.floor(time / 1000 / 60 / 24 / 30)
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    }
  }
  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector)
    const days = timer.querySelector('#days')
    const hours = timer.querySelector('#hours')
    const minutes = timer.querySelector('#minutes')
    const seconds = timer.querySelector('#seconds')
    const timeInterval = setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
      const t = getTimeRemaining(endTime)

      days.textContent = addZero(t.days)
      hours.textContent = addZero(t.hours)
      minutes.textContent = addZero(t.minutes)
      seconds.textContent = addZero(t.seconds)
      if (t.total <= 0) {
        clearInterval(timeInterval)
        days.textContent = "00"
        hours.textContent = "00"
        minutes.textContent = "00"
        seconds.textContent = "00"
      }
    }
  }
  setClock(id, deadline)
}
export default timer