import Phaser from 'phaser'

export default class s8 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 's8' });
    }
  
    preload() {
      this.load.image('s8', 'assets/s8.png')
      
  }
  
  create () {
      this.s8 = this.add.image(0, 0, 's8').setOrigin(0, 0).setScale(0.24);
     
      console.log("This is S8");
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      var enterDown = this.input.keyboard.addKey('enter');
  
      spaceDown.on('down', function(){
      this.scene.stop("s8");
      this.scene.start("s9");
      }, this );
      
      enterDown.on('down', function(){
      console.log("skip tutorial");
      this.scene.start("mission1");
      }, this );    
      
  }
    
  }