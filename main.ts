function game_over () {
    game.over(false)
}
function change_score () {
    info.changeScoreBy(1)
}
function rock () {
    list = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f f a a a a a f f f f . . . 
. . f a a a a a a a a a f f . . 
. . f a a a a a a a a a a f . . 
. . f a a a a a a a a a a f . . 
. . f a a a a a a a a a a f . . 
. . f f a a a a a a a a a f . . 
. . . f a a a a a a a a a f . . 
. . . f f a a a a a a a a f . . 
. . . . f a a a a a f f f f . . 
. . . . f f a f f f f . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f f b b b b b b f . . . 
. . . f f b b b b b b b f . . . 
. . . f b b b b b b b b f . . . 
. . . f b b b b b b b b f . . . 
. . . f f b b b b b b f f . . . 
. . . . f b b b b f f f . . . . 
. . . . f f b f f f . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . . . . f f f c c c c f f . . 
. . . . f f c c c c c c c f . . 
. . . f f c c c c c c c c f . . 
. . . f c c c c c c c c c f . . 
. . f f c c c c c c c c c f . . 
. . f c c c c c c c c c f f . . 
. . f c c c c c c c c c f . . . 
. . f c c c c c c c c f f . . . 
. . f c c c c c c c c f . . . . 
. . f f c c c c c f f . . . . . 
. . . f f f c c f f . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f . . . 
. . . . . f f f f b b b f f f . 
. . . . f f b b b b b b b b f . 
. . . f f b b b b b b b b b f f 
. . f b b b b b b b b b b b b f 
. f b b b b b b b b b b b b f f 
. f b b b b b b b b b b b b f . 
. f b b b b b b b b b b f f . . 
. f b b b b b b b b b b f . . . 
. f b b b b b b b b b f f . . . 
. . f f b b b b b f f . . . . . 
. . f f f f f f f f . . . . . . 
. . . . f f . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . . . f f f f a a a f f f . . 
. . . f f a a a a a a a a f f . 
. . f a a a a a a a a a a a f . 
. f a a a a a a a a a a a a f . 
. f a a a a a a a a a a a a f . 
. f f a a a a a a a a a a a f . 
. . f f a a a a a a a a a a f . 
. . . f a a a a a a a a a a f . 
. . . f f a a a a a a a a a f . 
. . . . f f a a a a a a a f f . 
. . . . . f f f a a a f f f . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . . . f f f f c c c f f f . . 
. . . f f c c c c c c c c f f . 
. . f c c c c c c c c c c c f . 
. f c c c c c c c c c c c c f . 
. f c c c c c c c c c c c c f . 
. f f c c c c c c c c c c c f . 
. . f f c c c c c c c c c c f . 
. . . f c c c c c c c c c c f . 
. . . f f c c c c c c c c c f . 
. . . . f f c c c c c c c f f . 
. . . . . f f f c c c f f f . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f . . . . 
. . . . f f f f d d d f f f . . 
. . . f f d d d d d d d d f f . 
. . f d d d d d d d d d d d f . 
. f d d d d d d d d d d d d f . 
. f d d d d d d d d d d d d f . 
. f f d d d d d d d d d d d f . 
. . f f d d d d d d d d d d f . 
. . . f d d d d d d d d d d f . 
. . . f f d d d d d d d d d f . 
. . . . f f d d d d d d d f f . 
. . . . . f f f d d d f f f . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f f d d d d d d f . . . 
. . . f f d d d d d d d f . . . 
. . . f d d d d d d d d f . . . 
. . . f d d d d d d d d f . . . 
. . . f f d d d d d d f f . . . 
. . . . f d d d d f f f . . . . 
. . . . f f d f f f . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
    asteroid = sprites.create(list[Math.randomRange(0, list.length - 1)], SpriteKind.Enemy)
    asteroid.setPosition(spaceship.x - 100, Math.randomRange(spaceship.y + 10, spaceship.y - 10))
    extra_velocity = 100
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    if (asteroid.vx <= 140) {
        asteroid.vx = 50 + 5 * info.score() - extra_velocity
    } else {
        asteroid.vx = 150
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    spaceship.setFlag(SpriteFlag.Ghost, true)
    info.startCountdown(2)
})
info.onCountdownEnd(function () {
    spaceship.setFlag(SpriteFlag.Ghost, false)
})
let extra_velocity = 0
let asteroid: Sprite = null
let list: Image[] = []
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 . . 
. . . . . . . 2 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . 2 2 2 2 2 2 2 . . 
. . . . . . . . . . 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship)
spaceship.x = 80
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
game.onUpdate(function () {
    if (info.life() <= 0) {
        game_over()
    }
})
game.onUpdateInterval(500, function () {
    extra_velocity += 1
})
game.onUpdateInterval(500, function () {
    rock()
})
game.onUpdateInterval(1000, function () {
    change_score()
})
