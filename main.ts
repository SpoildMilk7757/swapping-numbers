input.onButtonPressed(Button.A, function () {
    First_Number += 1
    basic.showString("a")
    basic.showNumber(First_Number)
})
input.onGesture(Gesture.TiltLeft, function () {
    First_Number += -1
    basic.showString("a")
    basic.showNumber(First_Number)
})
input.onButtonPressed(Button.B, function () {
    Second_Number += 1
    basic.showString("b")
    basic.showNumber(Second_Number)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("b")
    basic.showNumber(Second_Number)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showString("A")
    basic.showNumber(First_Number)
})
input.onGesture(Gesture.TiltRight, function () {
    Second_Number += -1
    basic.showString("b")
    basic.showNumber(Second_Number)
})
let Second_Number = 0
let First_Number = 0
First_Number = 0
Second_Number = 0
basic.showIcon(IconNames.Ghost)
