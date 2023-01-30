// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000050f06060f060f060f06060f06060f071011000e00000000000000000000000a1000000e0e0e0000000000000e00000804000000000e0e0e0e0e0e000e13000a040e0000000e0000000000000e0e0e081000000000000000000000000c00000a1013000e0000000c0c0c000000000009040e0e0e00000c0c000000000000120a1000000c00000c00000000000e0e0e080400000000000000000e0000000000081000000000000000120e00000000000a0400000e0e0e0e0e0e0e00000000000910000000000e0000000000000e00000a0400000000000000000000000e0000091012000e00000000000c13000e000d090201010b01010b010b010b010b010b03`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . . . 2 . . 2 
2 . . . . 2 2 2 2 2 2 . 2 . . 2 
2 2 . . . 2 . . . . . . 2 2 2 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . 2 . . . 2 2 2 . . . . . 2 
2 2 2 2 . . 2 2 . . . . . . . 2 
2 . . 2 . . 2 . . . . . 2 2 2 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . 2 . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.floorLight1,sprites.dungeon.stairLadder,sprites.dungeon.floorLightMoss,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairNorth,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
