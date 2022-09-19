let radiochannel = 0
let radioselect = true
radio.on()
let selectedobject = 0
let opponentnum = 0
let homescore = 0
let opponentscore = 0
let connection = false
function showL() {
    opponentscore++
}
function showW() {
    homescore++
}
input.onButtonPressed(Button.A, function () {
    if (radioselect) {
        radiochannel++;
        basic.showNumber(radiochannel, 50);
    }
    else {
        selectedobject = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (radioselect) {
        radiochannel--;
        basic.showNumber(radiochannel, 50);
    }
    else {
        selectedobject = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    if (radioselect) {
        radio.setGroup(radiochannel)
        radioselect = false
        basic.showString("Selected: " + radiochannel, 50)
    }
    else {
        selectedobject = 3
    }
})
if (!(radioselect)) { while (!(connection)) { radio.sendString("waiting for connection") } }

if (!(radioselect)) {
    while (connection) {
        basic.showNumber(3)
        basic.pause(500)
        basic.showNumber(2)
        basic.pause(500)
        basic.showNumber(1)
        basic.pause(500)
        while (!(selectedobject) || !(opponentnum)) {
            basic.pause(100)
        }
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
        basic.showString(homescore + " - " + opponentscore)
        selectedobject = 0
        opponentnum = 0
    }
}

radio.onReceivedString(function (receivedString) {
    if (receivedString == "waiting for connection") {
        connection = true
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    opponentnum = receivedNumber
})