const text = "Websites That Command Respect."
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("hero-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;