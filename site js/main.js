//Colors array
let colors = ["url(img/poza.jpg)", "url(img/poza2.jpg)", "url(img/poza3.jpg)", "url(img/poza4.jpg)", "url(img/poza5.jpg)"
//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})
