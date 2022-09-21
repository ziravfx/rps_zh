radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        opponentnum = receivedNumber
    }
    console.log(receivedNumber)
})
function showL () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . .
        # # # . #
        `)
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        music.playMelody("F F E E - - - - ", 370)
    }
    opponentscore += 1
}
input.onButtonPressed(Button.A, function () {
    if (radioselect) {
        radiochannel += 1
        basic.showNumber(radiochannel, 50);
    } else {
        console.log("PRESSED rock")
selectedobject = 1
        radio.sendNumber(1)
    }
})
function checkForWinner () {
    if (selectedobject == opponentnum) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (selectedobject == 1 && opponentnum == 2) {
        showW()
    } else if (selectedobject == 1 && opponentnum == 3) {
        showL()
    } else if (selectedobject == 2 && opponentnum == 1) {
        showL()
    } else if (selectedobject == 2 && opponentnum == 3) {
        showW()
    } else if (selectedobject == 3 && opponentnum == 1) {
        showW()
    } else {
        showL()
    }
}
input.onButtonPressed(Button.AB, function () {
    // console.log("PRESSED AB")
    if (radioselect) {
        radio.setGroup(radiochannel)
        radioselect = false
        basic.showString("Selected: " + radiochannel, 50)
    } else {
        console.log("PRESSED paper")
selectedobject = 3
        radio.sendNumber(3)
    }
})
input.onButtonPressed(Button.B, function () {
    if (radioselect) {
        radiochannel += -1
        basic.showNumber(radiochannel, 50);
    } else {
        console.log("PRESSED scissors")
selectedobject = 2
        radio.sendNumber(2)
    }
})
function showW () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . # . #
        . # . # .
        `)
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G G C5 C5 - - - - ", 370)
    }
    homescore += 1
}
let radioselect = false
let radiochannel = 0
let waitcount = 0
let opponentscore = 0
let homescore = 0
let opponentnum = 0
let selectedobject = 0
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
radiochannel = 1
radioselect = true
radio.on()
let connection = true
radio.sendString("a")
while (radioselect) {
    basic.pause(10)
}
console.log("yes")
console.log(radioselect)
while (!(radioselect)) {
    while (connection) {
        basic.showNumber(3)
        basic.pause(500)
        basic.showNumber(2)
        basic.pause(500)
        basic.showNumber(1)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
        while (selectedobject == 0 || opponentnum == 0) {
            basic.pause(10)
        }
        // a bit inefficient if chain, perhaps it could be optimized with math logic
        checkForWinner()
        console.log(homescore)
console.log("-")
console.log(opponentscore)
console.log("___")
console.log(selectedobject)
console.log(opponentnum)
basic.showString(homescore + "-" + opponentscore, 90)
selectedobject = 0
        opponentnum = 0
    }
}
