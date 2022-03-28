const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32 || event.keyCode === 38){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    
    isJumping = true;

    // Vamos usar o setInterval que irá repetir algo a cada intervalo definido
    let upInterval = setInterval(() => {
        if(position >= 150){
            // Para de subir e finaliza o intervalo
            clearInterval(upInterval);

            // Inicializa novo intervalo de descida
            let downInterval = setInterval(() =>{
                if(position >0){
                    position -=20;
                    dino.style.bottom = position+'px';
                } else{
                    // Para de descer
                    isJumping = false;
                    clearInterval(downInterval);
                }
            }, 20)   
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position+'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    if(randomTime < 2000){
        randomTime += 500;
    }


    cactus.classList.add('cactus');
    cactus.style.left = 1000+'px';
    background.appendChild(cactus);
    

    let leftInterval = setInterval(() =>{
        if(cactusPosition <-60){
            // Fazendo o elemento desaparecer
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition>0 && cactusPosition<60 && position<60){


            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 classe="game-over">Fim de jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);


}


document.addEventListener('keyup', handleKeyUp);
createCactus();


console.log(dino);