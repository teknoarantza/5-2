input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.showNumber(90)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showNumber(180)
})
pins.servoWritePin(AnalogPin.P0, 0)
basic.showNumber(0)
