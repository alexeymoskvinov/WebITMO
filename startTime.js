var startTime = Date.now();
window.onload = function() {
    let speed = startTime - performance.now()
    var tag = document.createElement("h3");
    var text = document.createTextNode(`Скорость загрузки - ${speed} мс`);
    tag.appendChild(text);
    var element = document.getElementById("speedFooter");
    element.appendChild(tag);
}