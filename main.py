@namespace
class SpriteKind:
    NPC = SpriteKind.create()

def on_up_pressed():
    if not (ModeDialog):
        animation.run_image_animation(Pemain, assets.animation("""
            PemainUp
        """), 500, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    global ModeDialog, dbSoal, jwbSoal, NPC1, NPC2, posSoal
    ModeDialog = True
    if ModeDialog == True:
        dbSoal = ["Bagaimana cara kerja jantung dalam tubuh manusia?",
            "Bagaimana pandanganmu tentang teknologi canggih saat ini?",
            "Apa yang menyebabkan gempa bumi?",
            "Apakah kamu lebih suka musik klasik atau musik pop?",
            "Sebutkan tiga fakta tentang planet-planet dalam tata surya kita!",
            "Bagaimana pandanganmu tentang peran media dalam masyarakat?",
            "Bagaimana cara kerja otak dalam tubuh manusia?",
            "Apakah kamu lebih suka film Hollywood atau film Indonesia?",
            "Praditya berpikir teknologi canggih saat ini adalah bencana bagi masyarakat. Semua orang terlalu tergantung pada telepon pintar dan teknologi lainnya, sehingga kita kehilangan keterampilan sosial yang penting. Kita perlu kembali ke cara hidup yang lebih sederhana dan mengurangi ketergantungan pada teknologi.",
            "Dzakir berpikir kita harus mengurangi pemakaian plastik sebanyak mungkin. Plastik merusak lingkungan dan membahayakan hewan-hewan laut. Kita harus lebih bertanggung jawab dan memakai alternatif yang lebih ramah lingkungan."]
        jwbSoal = ["Fakta",
            "Opini",
            "Fakta",
            "Opini",
            "Fakta",
            "Opini",
            "Fakta",
            "Opini",
            "Fakta",
            "Opini"]
        story.set_sound_enabled(True)
        game.show_long_text(dbSoal[posSoal], DialogLayout.BOTTOM)
        pause(100)
        story.show_player_choices("Fakta", "Opini")
        if story.check_last_answer(jwbSoal[posSoal]):
            info.change_score_by(10)
        else:
            info.change_score_by(-5)
        if otherSprite == NPC1:
            NPC1.destroy(effects.rings, 500)
            NPC1 = sprites.create(assets.image("""
                Novita
            """), SpriteKind.NPC)
            tiles.place_on_random_tile(NPC1, sprites.dungeon.collectible_red_crystal)
        else:
            NPC2.destroy(effects.fountain, 500)
            NPC2 = sprites.create(assets.image("""
                Dzakir
            """), SpriteKind.NPC)
            tiles.place_on_random_tile(NPC2, sprites.dungeon.collectible_blue_crystal)
        pause(100)
        if posSoal == len(dbSoal) - 1:
            posSoal = 0
        else:
            posSoal += 1
        ModeDialog = False
    story.set_sound_enabled(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap)

def on_left_pressed():
    animation.run_image_animation(Pemain, assets.animation("""
        PemainLeft
    """), 500, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_countdown_end():
    game.game_over(False)
    game.set_game_over_message(False, "PERMAINAN SELESAI! Anda kalah.")
    game.set_game_over_playable(False, music.melody_playable(music.power_down), False)
info.on_countdown_end(on_countdown_end)

def on_right_pressed():
    animation.run_image_animation(Pemain, assets.animation("""
        PemainRight
    """), 500, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    if not (ModeDialog):
        animation.run_image_animation(Pemain, assets.animation("""
            PemainDown
        """), 500, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    game.set_game_over_playable(True, music.melody_playable(music.power_up), False)
    game.set_game_over_message(True, "SELAMAT ANDA BERHASIL!")
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

Goal: Sprite = None
jwbSoal: List[str] = []
dbSoal: List[str] = []
posSoal = 0
ModeDialog = False
NPC2: Sprite = None
NPC1: Sprite = None
Pemain: Sprite = None
music.play(music.create_song(hex("""
        0078000408020200001c00010a006400f401640000040000000000000000000000000005000004360008000c00011b10001400011d18001c00012020002400012428002c0001202c003000011d30003400012034003800012438003c00012905001c000f0a006400f4010a00000400000000000000000000000000000000021e0008000c00010e14001800011324002800010c3400380001113c004000010c
    """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
scene.set_background_image(assets.image("""
    bgImage
"""))
game.set_dialog_frame(assets.image("""
    frameDialog
"""))
game.splash("Game Pendidikan", "Analisis Informasi Teks")
game.splash("Fakta dan Opini", "(c) 2023-SMP Negeri 2 Kalitidu")
game.show_long_text("Oleh:\\nYohan Adi Setiawan\\nPraditya Andi Setiawan",
    DialogLayout.BOTTOM)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
Pemain = sprites.create(assets.image("""
    Pandi
"""), SpriteKind.player)
tiles.place_on_random_tile(Pemain, sprites.dungeon.stair_ladder)
scene.camera_follow_sprite(Pemain)
NPC1 = sprites.create(assets.image("""
    Novita
"""), SpriteKind.NPC)
tiles.place_on_random_tile(NPC1, sprites.dungeon.collectible_red_crystal)
NPC2 = sprites.create(assets.image("""
    Dzakir
"""), SpriteKind.NPC)
tiles.place_on_random_tile(NPC2, sprites.dungeon.collectible_blue_crystal)
ModeDialog = False
posSoal = 0
info.set_score(0)
info.start_countdown(120)

def on_forever():
    if ModeDialog == True:
        controller.move_sprite(Pemain, 0, 0)
    elif ModeDialog == False:
        controller.move_sprite(Pemain, 100, 100)
forever(on_forever)

def on_update_interval():
    global Goal
    if info.score() > 70:
        Goal = sprites.create(assets.image("""
            FinalNPC
        """), SpriteKind.food)
        tiles.place_on_random_tile(Goal, sprites.dungeon.stair_north)
game.on_update_interval(500, on_update_interval)
