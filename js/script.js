const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

alert('Iniciar')

const jump = () =>{
    mario.classList.add('jump');

    setTimeout (() => {
        mario.classList.remove('jump');
    }, 600)
};



const loop = setInterval(() =>{
    const pipePostion = pipe.offsetLeft;
    const maroPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePostion <= 120 && pipePostion > 0 && maroPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePostion}px`;
    
        mario.style.animation = 'none'
        mario.style.buttom = `${maroPosition}px`

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';


        clearInterval(loop);
        
    }
    
}, 10);

document.addEventListener('keydown', jump);