info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite.setVelocity(50, 50)
    mySprite.ax = 0
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite.setVelocity(50, 50)
    mySprite.ax = 1000
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite.setVelocity(50, 50)
    mySprite.ax = 0
    info.changeLifeBy(-1)
})
let projectile3: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
mySprite = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
mySprite,
assets.animation`Mama Moving`,
100,
true
)
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Extra Life`, -90, 0)
    projectile2.setKind(SpriteKind.Projectile)
    projectile2.y = randint(15, 115)
    animation.runImageAnimation(
    projectile2,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
forever(function () {
    projectile3 = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile3.setKind(SpriteKind.Food)
    projectile3.y = randint(15, 115)
    pause(1000)
})
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    animation.runImageAnimation(
    projectile2,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
    projectile2.setKind(SpriteKind.Enemy)
})
