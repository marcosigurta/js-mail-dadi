var diceImg = [
    '<img src="img/1.png" alt="" />',
    '<img src="img/2.png" alt="" />',
    '<img src="img/3.png" alt="" />',
    '<img src="img/4.png" alt="" />',
    '<img src="img/5.png" alt="" />',
    '<img src="img/6.png" alt="" />',
    '<img src="img/7.png" alt="" />'
]

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

    for (var x = 0; x <= 6; x++) {
        if (dadoCpu == x)
        document.getElementById('dice2Img').innerHTML = diceImg [x - 1];
    }

    for (var i = 0; i <= 6; i++) {
        if (dadoUtente == i)
        document.getElementById('dice1Img').innerHTML = diceImg [i - 1];
    }
})