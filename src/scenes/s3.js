import Phaser from 'phaser'

export default class s3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 's3' });
    }
  
    preload() {
      this.load.image('s3', 'assets/s3.png')
  
      
  }
  
  create () {
  
      this.s3 = this.add.image(0, 0, 's3').setOrigin(0, 0).setScale(0.24);
     
      console.log("This is S3");
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      var enterDown = this.input.keyboard.addKey('enter');
      
      spaceDown.on('down', function(){
      this.scene.stop("s3");
      this.scene.start("s4");
      }, this );
      
      enterDown.on('down', function(){
      console.log("skip tutorial");
      this.scene.start("mission1");
      }, this );    
      
  
  }
  
  
    
  }