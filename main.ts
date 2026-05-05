input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 1)
})
