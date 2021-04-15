namespace SpriteKind {
    export const Laser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 . . 5 5 . . . . . . 
        . . . . . 5 5 . 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 . 5 . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceShip, 50, 0)
    projectile.setKind(SpriteKind.Laser)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fountain, 500)
    sprite.destroy()
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    alien.destroy(effects.halo, 500)
    music.thump.play()
})
let alien: Sprite = null
let projectile: Sprite = null
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip, 100, 100)
spaceShip.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 2 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . 7 7 . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    alien.setPosition(160, randint(0, 120))
    alien.setVelocity(-50, 0)
})
