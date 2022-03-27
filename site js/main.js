//Colors array
let colors = ["url(img/edi1.jpg)", "url(img/edi2.jpg)", "url(img/edi3.jpg)", "url(img/edi4.jpg)", "url(img/edi5.jpg)", "url(img/edi6.png)", "url(img/edi7.jpg)", "url(img/edi8.jpg)", "url(img/edi9.png)", "url(img/edi10.png)"];

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