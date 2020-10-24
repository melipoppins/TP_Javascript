var resultat = document.querySelector('#total');

var liste_input = document.querySelectorAll("input[type='text']");

liste_input.forEach(function (test) {
    test.addEventListener('keyup', sum_elements);
});

function sum_elements() {
    var calcul = 0;
    for(var i = 1; i <= liste_input.length; i++) {
        var element = document.getElementById('nombre'+i);
        if(element.value !='' && !isNaN(element.value)) {
            calcul += parseInt(element.value);
        }

    }
    resultat.value = calcul;
    console.log(calcul);
}