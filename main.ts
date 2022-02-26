input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    led.plot(0, 0)
    basic.pause(1000)
    led.plot(1, 0)
    basic.pause(1000)
    led.plot(2, 0)
    basic.pause(1000)
    led.plot(3, 0)
    basic.pause(1000)
    led.plot(4, 0)
    basic.pause(1000)
})
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        basic.pause(50)
        led.plot(0, index)
        led.plot(index, 0)
        basic.pause(100)
        led.unplot(0, index)
        led.unplot(index, 0)
    }
    for (let index = 0; index <= 4; index++) {
        basic.pause(50)
        led.plot(4, index)
        led.plot(index, 4)
        basic.pause(50)
        led.unplot(4, index)
        led.unplot(index, 4)
    }
})
