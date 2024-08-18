input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 37) {
        basic.showString("Fiebre")
        record.playAudio(record.BlockingState.Blocking)
    } else {
        basic.showString("Normal")
    }
})
input.onButtonPressed(Button.A, function () {
	
})
basic.showNumber(input.temperature())
basic.forever(function () {
	
})
