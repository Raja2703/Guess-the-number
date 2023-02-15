let random
let scoreValue=20

function randomCalc(){
    random=Math.floor((Math.random()*20)+1)
    console.log(random)
}

randomCalc()

document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('input').value)
    if( guess=== random){
        document.querySelector('.message').textContent='Correct Number'
        document.querySelector('.random').textContent=random
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('input').style.backgroundColor='green'
        document.querySelector('input').style.color='white'
        if(Number(document.querySelector('.high-score').textContent)<scoreValue){
            document.querySelector('.high-score').textContent=scoreValue
        }
    }else if(guess > random){
        if(scoreValue>1){
            scoreValue--
            document.querySelector('.message').textContent='Too High'
            document.querySelector('.score').textContent=scoreValue
        }else{
            document.querySelector('.message').textContent='You Lost The Game'
            document.querySelector('.score').textContent=0
        }
        
    }
    else if(guess < random){
        if(scoreValue>1){
            scoreValue--
            document.querySelector('.message').textContent='Too Low'
            document.querySelector('.score').textContent=scoreValue
        }else{
            document.querySelector('.message').textContent='You Lost The Game'
            document.querySelector('.score').textContent=0
        }
    }
})

document.querySelector('.again').addEventListener('click',()=>{
    scoreValue=20
    document.querySelector('.message').textContent='Start Guessing...'
    document.querySelector('.score').textContent=scoreValue
    document.querySelector('body').style.backgroundColor='rgba(53, 53, 53, 0.972)'
    document.querySelector('input').style.backgroundColor='rgba(53, 53, 53, 0.972)'
    document.querySelector('input').style.color='black'
    document.querySelector('input').value=''
    document.querySelector('.random').textContent='?'
    randomCalc()
})