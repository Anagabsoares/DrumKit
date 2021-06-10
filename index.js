
function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio('/Users/gabi/Desktop/DrumKit/sounds/tom-1.mp3')
            tom1.play()
            break
        case "a":
            var tom2 = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-2.mp3")  
            tom2.play()
            break  
        case "s":
            var tom3 = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-3.mp3")
            tom3.play()
            break    
        case "d":
            var tom4 = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-4.mp3")  
            tom4.play()
            break
        case "j":
            var snare = new Audio("/Users/gabi/Desktop/DrumKit/sounds/snare.mp3")  
            snare.play()
            break
        case "k":
            var  crash = new Audio("/Users/gabi/Desktop/DrumKit/sounds/crash.mp3")
            crash.play()
            break
        case "l":
            var kick = new Audio("/Users/gabi/Desktop/DrumKit/sounds/kick-bass.mp3")
            kick.play()
            break      
        default:
            alert("not a valid key use the keys A - S - D -J- K- L to make awesome sounds!")
    }
}

// Detecting keyboad keydown. ps. The keypress evcent is deprecated
document.addEventListener("keydown", function(event){
        makeSound(event.key)
        buttonAnimate(event.key)
})

//Detecting Buttons
const numberOfDrumButtons = document.querySelectorAll('.drum').length;
for(var i=0; i< numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimate(buttonInnerHTML)
          
    })
}

function buttonAnimate(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    console.log(activeButton)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    }, 100)
}




// ALTERNATIVES

// for (const button of buttons){

//     var buttonInnerHTML = this.buttonInnerHTML;
//     switch

//     if (button.classList == "w drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-1.mp3")
//         audio.play()})
//     }
//     if (button.classList == "a drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-2.mp3")
//         audio.play()})
//     }
//     if (button.classList == "s drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-3.mp3")
//         audio.play()})
//     }
//     if (button.classList == "d drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/tom-1.mp3")
//         audio.play()})
//     }
//     if (button.classList == "j drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/snare.mp3")
//         audio.play()})
//     }
//     if (button.classList == "k drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/snare.mp3")
//         audio.play()})
//     }
//     if (button.classList == "l drum"){
//         button.addEventListener('click', function(){
//         let audio = new Audio("/Users/gabi/Desktop/DrumKit/sounds/kick-bass.mp3")
//         audio.play()})
//     }  
// }