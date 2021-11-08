input.onPinPressed(TouchPin.P0, function () {
    if (StoreDice3 > 0) {
        StoreDice3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice3 = dice1
    }
})
input.onButtonPressed(Button.A, function () {
    if (StoreDice1 > 0) {
        StoreDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice3 = dice1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (StoreDice5 > 0) {
        StoreDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice3 = dice5
    }
})
input.onButtonPressed(Button.B, function () {
    if (StoreDice2 > 0) {
        StoreDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice3 = dice2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (StoreDice4 > 0) {
        StoreDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice3 = dice4
    }
})
input.onGesture(Gesture.Shake, function () {
    ShakeCount = ShakeCount + 1
    dice1 = dice1_R2
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    dice4 = randint(1, 6)
    dice5 = randint(1, 6)
})
let dice3 = 0
let ShakeCount = 0
let dice4 = 0
let dice2 = 0
let StoreDice2 = 0
let dice5 = 0
let StoreDice5 = 0
let StoreDice4 = 0
let StoreDice1 = 0
let dice1 = 0
let StoreDice3 = 0
let dice1_R2 = 0
dice1_R2 = randint(1, 6)
basic.forever(function () {
    if (ShakeCount > 2 || StoreDice1 != 0 && StoreDice2 != 0 && (StoreDice3 != 0 && (StoreDice4 == 0 && StoreDice5 != 0))) {
        ShakeCount = 0
        basic.showString("Shake")
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            if (StoreDice1 > 0) {
                basic.showString("S#1")
                basic.showNumber(StoreDice1)
            } else {
                basic.showString("S#1")
                basic.showIcon(IconNames.No)
            }
            if (StoreDice2 > 0) {
                basic.showString("S#2")
                basic.showNumber(StoreDice2)
            } else {
                basic.showString("S#2")
                basic.showIcon(IconNames.No)
            }
            if (StoreDice3 > 0) {
                basic.showString("S#3")
                basic.showNumber(StoreDice3)
            } else {
                basic.showString("S#3")
                basic.showIcon(IconNames.No)
            }
            if (StoreDice4 > 0) {
                basic.showString("S#4")
                basic.showNumber(StoreDice4)
            } else {
                basic.showString("S#4")
                basic.showIcon(IconNames.No)
            }
            if (StoreDice5 > 0) {
                basic.showString("S#5")
                basic.showNumber(StoreDice5)
            } else {
                basic.showString("S#5")
                basic.showIcon(IconNames.No)
            }
        } else {
            if (dice1 == 0) {
                basic.showString("Shake")
            } else {
                if (StoreDice1 > 0) {
                    basic.showString("D#1")
                    basic.showNumber(StoreDice1)
                } else {
                    basic.showString("D#1")
                    basic.showNumber(dice1)
                }
            }
            if (dice2 == 0) {
                basic.showString("Shake")
            } else {
                if (StoreDice2 > 0) {
                    basic.showString("D#2")
                    basic.showNumber(StoreDice2)
                } else {
                    basic.showString("D#2")
                    basic.showNumber(dice2)
                }
            }
            if (dice3 == 0) {
                basic.showString("Shake")
            } else {
                if (StoreDice3 > 0) {
                    basic.showString("D#3")
                    basic.showNumber(StoreDice3)
                } else {
                    basic.showString("D#3")
                    basic.showNumber(dice3)
                }
            }
            if (dice4 == 0) {
                basic.showString("Shake")
            } else {
                if (StoreDice4 > 0) {
                    basic.showString("D#4")
                    basic.showNumber(StoreDice4)
                } else {
                    basic.showString("D#4")
                    basic.showNumber(dice4)
                }
            }
            if (dice5 == 0) {
                basic.showString("Shake")
            } else {
                if (StoreDice5 > 0) {
                    basic.showString("D#5")
                    basic.showNumber(StoreDice5)
                } else {
                    basic.showString("D#5")
                    basic.showNumber(dice5)
                }
            }
        }
    }
})
