function show() {
    var textBox = document.getElementById('textBox');
    var text = textBox.value;
    var video = document.getElementById('vid');
    
    

    video.src = "https://www.youtube.com/embed/" + text;

}
