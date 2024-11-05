/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let rotation = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// When "A" is pressed
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (true){
        loopCounter = 0
    while (loopCounter <= 5) {
        pause(500)
        sprite.move(1)
    }
        sprite.turn(Direction.Right, 90)
        rotation = rotation + 1
}
})