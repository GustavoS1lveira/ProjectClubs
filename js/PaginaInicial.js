function enviar() {
    const time = document.getElementById("time").value;
    
    if(time === ""){
        alert("Selecione um time primeiro!");
        return;
    }
    window.open(time, "_blank"); // Abrir uma outra pagina
}