namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pemain,
    assets.animation`PemainUp`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    ModeDialog = true
    if (ModeDialog == true) {
        dbSoal = [
        "Bagaimana cara kerja jantung dalam tubuh manusia?",
        "Bagaimana pandanganmu tentang teknologi canggih saat ini?",
        "Apa yang menyebabkan gempa bumi?",
        "Apakah kamu lebih suka musik klasik atau musik pop?",
        "Sebutkan tiga fakta tentang planet-planet dalam tata surya kita!",
        "Bagaimana pandanganmu tentang peran media dalam masyarakat?",
        "Bagaimana cara kerja otak dalam tubuh manusia?",
        "Apakah kamu lebih suka film Hollywood atau film Indonesia?",
        "Praditya berpikir teknologi canggih saat ini adalah bencana bagi masyarakat. Semua orang terlalu tergantung pada telepon pintar dan teknologi lainnya, sehingga kita kehilangan keterampilan sosial yang penting. Kita perlu kembali ke cara hidup yang lebih sederhana dan mengurangi ketergantungan pada teknologi.",
        "Dzakir berpikir kita harus mengurangi pemakaian plastik sebanyak mungkin. Plastik merusak lingkungan dan membahayakan hewan-hewan laut. Kita harus lebih bertanggung jawab dan memakai alternatif yang lebih ramah lingkungan."
        ]
        jwbSoal = [
        "Fakta",
        "Opini",
        "Fakta",
        "Opini",
        "Fakta",
        "Opini",
        "Fakta",
        "Opini",
        "Fakta",
        "Opini"
        ]
        story.setSoundEnabled(true)
        game.showLongText(dbSoal[posSoal], DialogLayout.Bottom)
        pause(100)
        story.showPlayerChoices("Fakta", "Opini")
        if (story.checkLastAnswer(jwbSoal[posSoal])) {
            info.changeScoreBy(10)
        } else {
            info.changeScoreBy(-5)
        }
        if (otherSprite == NPC1) {
            NPC1.destroy(effects.rings, 500)
            NPC1 = sprites.create(assets.image`Novita`, SpriteKind.NPC)
            tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleRedCrystal)
        } else {
            NPC2.destroy(effects.fountain, 500)
            NPC2 = sprites.create(assets.image`Dzakir`, SpriteKind.NPC)
            tiles.placeOnRandomTile(NPC2, sprites.dungeon.collectibleBlueCrystal)
        }
        pause(100)
        if (posSoal == 9) {
            posSoal = 0
        } else {
            posSoal += 1
        }
        ModeDialog = false
    }
    story.setSoundEnabled(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pemain,
    assets.animation`PemainLeft`,
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pemain,
    assets.animation`PemainRight`,
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pemain,
    assets.animation`PemainDown`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite2) {
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    game.setGameOverMessage(true, "SELAMAT ANDA BERHASIL!")
    game.gameOver(true)
})
let Goal: Sprite = null
let jwbSoal: string[] = []
let dbSoal: string[] = []
let posSoal = 0
let ModeDialog = false
let NPC2: Sprite = null
let NPC1: Sprite = null
let Pemain: Sprite = null
music.play(music.createSong(hex`
        0078000408020200001c00010a006400f401640000040000000000000000000000000005000004360008000c00011b10001400011d18001c00012020002400012428002c0001202c003000011d30003400012034003800012438003c00012905001c000f0a006400f4010a00000400000000000000000000000000000000021e0008000c00010e14001800011324002800010c3400380001113c004000010c
    `), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`bgImage`)
game.setDialogFrame(assets.image`frameDialog`)
game.splash("Game Pendidikan", "Analisis Informasi Teks")
game.splash("Fakta dan Opini", "(c) 2023-SMP Negeri 2 Kalitidu")
game.showLongText("Oleh:\\nYohan Adi Setiawan\\nPraditya Andi Setiawan", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level1`)
Pemain = sprites.create(assets.image`Pandi`, SpriteKind.Player)
tiles.placeOnRandomTile(Pemain, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(Pemain)
NPC1 = sprites.create(assets.image`Novita`, SpriteKind.NPC)
tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleRedCrystal)
NPC2 = sprites.create(assets.image`Dzakir`, SpriteKind.NPC)
tiles.placeOnRandomTile(NPC2, sprites.dungeon.collectibleBlueCrystal)
ModeDialog = false
posSoal = 0
info.setScore(0)
game.onUpdate(function () {
    if (info.score() > 70) {
        Goal = sprites.create(assets.image`FinalNPC`, SpriteKind.Food)
        tiles.placeOnRandomTile(Goal, sprites.dungeon.stairNorth)
    }
})
forever(function () {
    if (ModeDialog == true) {
        controller.moveSprite(Pemain, 0, 0)
    } else if (ModeDialog == false) {
        controller.moveSprite(Pemain, 100, 100)
    }
})
