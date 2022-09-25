let Grader_högre_än_90 = 0
let Temperatur_lågt_x_eller_mindre__fläkt__0 = 0
let Grader_mindre_än_90 = 0
let Temperatur_högt_x_eller_högre__fläkt__1 = 0
let Ljus_att_tända_x_eller_mindre = 0
let Ljus_att_släcka_x_eller_högre = 0
input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() > Grader_högre_än_90 || input.compassHeading() < Temperatur_lågt_x_eller_mindre__fläkt__0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.showString("" + (input.lightLevel()))
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showString("" + (input.temperature()))
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() > Grader_högre_än_90 || input.compassHeading() < Temperatur_lågt_x_eller_mindre__fläkt__0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . . .
            . . # # .
            `)
        basic.showString("" + (input.compassHeading()))
    }
})
basic.forever(function () {
    Grader_högre_än_90 = 95
    Grader_mindre_än_90 = 85
    Temperatur_högt_x_eller_högre__fläkt__1 = 28
    Temperatur_lågt_x_eller_mindre__fläkt__0 = 27
    Ljus_att_tända_x_eller_mindre = 128
    Ljus_att_släcka_x_eller_högre = 129
})
basic.forever(function () {
    if (input.compassHeading() > Grader_högre_än_90 || input.compassHeading() < Temperatur_lågt_x_eller_mindre__fläkt__0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        if (input.temperature() >= Temperatur_högt_x_eller_högre__fläkt__1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        } else if (input.temperature() <= Temperatur_lågt_x_eller_mindre__fläkt__0) {
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        if (input.lightLevel() <= Ljus_att_tända_x_eller_mindre) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else if (input.lightLevel() >= Ljus_att_släcka_x_eller_högre) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
