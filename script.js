function atnaujintiLaika() {
    var laikas = new Date();
    var valandos = laikas.getHours();
    var minutes = laikas.getMinutes();
    var sekundes = laikas.getSeconds();

    valandos = valandos < 10 ? "0" + valandos : valandos;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    sekundes = sekundes < 10 ? "0" + sekundes : sekundes;

    var laikoTekstas = valandos + ":" + minutes + ":" + sekundes;

    document.getElementById("laikrodis").innerText = laikoTekstas;
}


atnaujintiLaika();

setInterval(atnaujintiLaika, 1000);