const holes=document.querySelectorAll('.hole')
const  playBtn= document.querySelector('#play')
const  stopBtn= document.querySelector('#stop')
const cursor= document.querySelector('#hammer')
const score= document.querySelector('#score')
const time= document.querySelector('#time')
const messageDisplay= document.querySelector('#message')
const pointer= document.querySelector('*')


window.addEventListener("mousemove", function(e){
 cursor.style.top= e.pageY + "px"
 cursor.style.left= e.pageX + "px"

 window.addEventListener('click', function(){
     pointer.style.cursor="none"
    cursor.style.display= "inline-block"
    cursor.style.animation= "hit .12s ease"
    this.setTimeout(function(){
        cursor.style.removeProperty("animation")
        
        
    }, 500)
 })


})


playBtn.addEventListener("click", function(){

    playBtn.style.display= "none"
    stopBtn.style.display ="inline-block"
    messageDisplay.style.display="none"

    let hole
    let points= 0
    let timeLeft= 10
    const targetScore=10
    


    const timer = setInterval(function(){
        timeLeft--
        time.innerHTML=timeLeft
        if(timeLeft===0){


       messageDisplay.style.display= "inline-block"
       messageDisplay.innerHTML= "Game Over! score:" + points
        clearInterval(startGame)
        clearInterval(timer)
        playBtn.style.display= "inline-block"
        stopBtn.style.display ="none"
    
        }
        if(points>=targetScore){
            messageDisplay.innerHTML = " You win! score:" + points

        }
        
    }, 1000)

    const startGame= setInterval( function(){

        let randomhole= Math.floor(Math.random()*holes.length)

        hole= holes[randomhole]
        console.log(hole)
        let image= document.createElement('img')
        image.setAttribute('src', 'images/fox.png')
        image.setAttribute('id', 'mole')
        hole.appendChild(image)
        setTimeout(function(){
            hole.removeChild(image)
        }, 500)
    },600)

    window.addEventListener("click", function(e){
        if(e.target===hole) {
            score.innerHTML= ++points
            

        }
    })

    stopBtn.addEventListener("click", function(){
        clearInterval(startGame)
        clearInterval(timer)
        
        playBtn.style.display= "inline-block"
        stopBtn.style.display ="none"
        points=0
        score.innerHTML= ""
        time.innerHTML= ""
    
    })
    
})

