input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    dice1 = randint(1, 6)
    dice1 = dice1_R2
    basic.showNumber(dice1)
    basic.pause(500)
    dice2 = randint(1, 6)
    basic.showNumber(dice2)
    basic.pause(500)
    dice3 = randint(1, 6)
    basic.showNumber(dice3)
    basic.pause(500)
    dice4 = randint(1, 6)
    basic.showNumber(dice4)
    basic.pause(500)
    dice5 = randint(1, 6)
    basic.showNumber(dice5)
    basic.pause(500)
})
let dice5 = 0
let dice4 = 0
let dice3 = 0
let dice2 = 0
let dice1 = 0
let dice1_R2 = 0
dice1_R2 = randint(1, 6)
