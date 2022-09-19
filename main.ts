/**
 * 1 = rock
 * 
 * 2 = scissors
 * 
 * 3 = paper
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (handsign == receivedNumber) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (handsign == 1 && receivedNumber == 2) {
        showW()
    } else if (handsign == 1 && receivedNumber == 3) {
        showL()
    } else if (handsign == 2 && receivedNumber == 1) {
        showL()
    } else if (handsign == 2 && receivedNumber == 3) {
        showW()
    } else if (handsign == 3 && receivedNumber == 1) {
        showW()
    } else {
        showL()
    }
    basic.pause(5000)
    basic.clearScreen()
})
function showL() {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . .
        # # # . #
        `)
}
input.onButtonPressed(Button.A, function () {
    handsign = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(handsign)
})
input.onButtonPressed(Button.AB, function () {
    handsign = 3
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(handsign)
})
input.onButtonPressed(Button.B, function () {
    handsign = 2
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(handsign)
})
function showW() {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        `)
}
let handsign = 0
radio.setGroup(154)
basic.forever(function () {

})
