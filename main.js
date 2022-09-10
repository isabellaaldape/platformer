import './src/style.css'
import { Player } from "./src/js/player.js";
import { Platform } from './src/js/platform';

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const player = new Player(context);
const platform = new Platform(context);

const keys = {
    right: {
        pressed: false,
    },
     left: {
        pressed: false,
     },
     up:{
        pressed: false,
     },
     down: {
        pressed: false,
     },

}

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width,canvas.height)
  
    player.update();
    platform.draw();
    
    if (keys.right.pressed) {
        player.velocity.x = 7;
    } else if(keys.left.pressed){
        player.velocity.x = -7;
    } else {
        player.velocity.x = 0;
    }
}


animate();

addEventListener('keydown', ({keyCode}) => {
    // console.log(keyCode);

    switch (keyCode) {
        case 39:
            keys.right.pressed = true;
            break;
        case 37:
            keys.left.pressed = true;
           break;
        case 38: 
            keys.up.pressed = true;
            player.velocity.y -= 20; 
            break;
        case 40:
            keys.down.pressed = true;
            break;
    }
})

addEventListener('keyup', ({keyCode}) => {
    // console.log(keyCode);

    switch (keyCode) {
        case 39:
            keys.right.pressed = false;
            break;
        case 37:
            keys.left.pressed = false;
           break;
        case 38: 
            keys.up.pressed = false;
            break;
        case 40:
            keys.down.pressed = false;
            break;
    }
})