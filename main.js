var sec = 00
var min = 00
var hour = 00
var interval
var isRunning = false

function twoDigits(digito) {
    if (digito < 10) {
        return ('0' + digito)
    } else {
        return (digito)
    }
}

function start() {
    if (isRunning === false) {
        counter();
        interval = setInterval(counter, 1000)

    }
    isRunning = true

    changeTimerLogoStart()
}

function pause() {
    clearInterval(interval)
    isRunning = false
}

function reset() {
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0
    document.getElementById('timer').innerText = '00:00:00'

    changeTimerLogoReset()

    isRunning = false
}

function counter() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hour++
        }
    }
    document.getElementById('timer').innerText = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec)
}


function changeTimerLogoStart() {
    document.getElementById('icon').classList.replace('fa-hourglass-start', 'fa-hourglass-half')
}

function changeTimerLogoReset() {
    document.getElementById('icon').classList.replace('fa-hourglass-half', 'fa-hourglass-start')
}