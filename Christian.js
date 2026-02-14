const colors = ["red", "orange", "green", "yellow", "purple"];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];

    if (document.body.style.backgroundColor === 'black') {
        changeTextColor()
}
}