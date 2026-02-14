const colors = ["red", "black", "green", "yellow", "purple"];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];

    if (document.body.style.backgroundColor === 'black') {
        changeTextColor()
}
}

function changeTextColor() {
    const myDiv = document.getElementById('myDiv');
    if (myDiv.style.backgroundColor === 'black') { 
        myDiv.style.color = 'white'; 
    }else{
        myDiv.style.color = 'black';
    }
}