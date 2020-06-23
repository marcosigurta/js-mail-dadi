
var btn = document.getElementById('btn').addEventListener("click", function () {
    var dadoUtente = Math.floor(Math.random() * 6) + 1;
    var dadoCpu = Math.floor(Math.random() * 6) + 1;
    console.log(dadoUtente);
    console.log(dadoCpu);

    if (dadoUtente > dadoCpu) {
        document.getElementById('result').innerHTML = "Hai vinto!"
    } else if (dadoUtente < dadoCpu) {
        document.getElementById('result').innerHTML = "Ha vinto il PC!"
    } else {
        document.getElementById('result').innerHTML = "Pari!"
    }
})