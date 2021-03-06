import Phaser from 'phaser'

export default class s9 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 's9' });
    }
  
    preload() {
      this.load.image('s9', 'assets/s9.png')
      
  }
  
  create () {
      this.s9 = this.add.image(0, 0, 's9').setOrigin(0, 0).setScale(0.24);
     
      console.log("This is S9");
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      var enterDown = this.input.keyboard.addKey('enter');
  
      spaceDown.on('down', function(){
      this.scene.stop("s9");
      this.scene.start("s10");
      }, this );
  
      enterDown.on('down', function(){
      console.log("skip tutorial");
      this.scene.start("mission1");
      }, this );    
  
  }
  
  }