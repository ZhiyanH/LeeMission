import Phaser from 'phaser'

import preload from './scenes/preload'
import s1 from './scenes/s1'
import s2 from './scenes/s2'
import s3 from './scenes/s3'
import s4 from './scenes/s4'
import s5 from './scenes/s5'
import s6 from './scenes/s6'
import s7 from './scenes/s7'
import s8 from './scenes/s8'
import s9 from './scenes/s9'
import s10 from './scenes/s10'
import mission1 from './scenes/mission1'
import mission2 from './scenes/mission2'
import mission3 from './scenes/mission3'
import world from './scenes/world'
import room1 from './scenes/room1'
import room2 from './scenes/room2'
import room3 from './scenes/room3'
import gameOver from './scenes/gameOver'
import gameOver2 from './scenes/gameOver2'
import gameOver3 from './scenes/gameOver3'
import winScene from './scenes/winScene'


const config = {
    type: Phaser.AUTO,
    // test
    // pixel size * tile map size * zoom 
    // width: 32 * 20,
    // height: 32 * 15,
    
    width: 840,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#73c5d0',
    pixelArt: true,
	scene: [preload, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, mission1, mission2, mission3, world, room1, room2, room3, gameOver, gameOver2, gameOver3, winScene]
};

export default new Phaser.Game(config)
