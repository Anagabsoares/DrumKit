const buttons = document.querySelectorAll('button')
let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/crash.mp3");

for (const button of buttons){
    if (button.classList == "w drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-1.mp3")
        audio.play()})
    }
    if (button.classList == "a drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-2.mp3")
        audio.play()})
    }
    if (button.classList == "s drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-3.mp3")
        audio.play()})
    }
    if (button.classList == "d drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-1.mp3")
        audio.play()})
    }
    if (button.classList == "j drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/snare.mp3")
        audio.play()})
    }
    if (button.classList == "k drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/snare.mp3")
        audio.play()})
    }
    if (button.classList == "l drum"){
        button.addEventListener('click', function(){
        let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/kick-bass.mp3")
        audio.play()})
    }  
}