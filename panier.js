var liste_input = document.querySelectorAll("input[type='number']");

liste_input.forEach(function (test) {
    test.addEventListener('keyup', updateTotal);
    test.addEventListener('click', updateTotal);
});

function updateTotal() {

    // sélectionner la table
    let table = document.getElementsByTagName('tbody')[0];

    //sélectionner les lignes (liste de lignes)
    let lines = table.getElementsByTagName('tr');

    let tva = 20 / 100;
    console.log(lines);

    let totalHT = 0;

    for (let i = 0; i < lines.length; i++) {

        let rowTotal = 0;
        let cellRowTotal = lines[i].getElementsByClassName('total')[0];
        // prix sur une ligne
        let price = lines[i].getElementsByClassName('price')[0].value;
        console.log('price : ' + price);

        //qty sur une ligne
        let qty = lines[i].getElementsByClassName('qty')[0].value;
        console.log('qty : ' + qty);

        // produit qty * prix sur une ligne;
        rowTotal = qty * price;
        console.log('rowTotal : ' + rowTotal);

        // affecter valeur à cellRowTotal
        cellRowTotal.value = rowTotal;

        //total des rowTotal;
        totalHT += rowTotal;
        console.log('totalHT_tmp : ' + totalHT);
    }
    console.log('totalHT : ' + totalHT);
    // aller hercher element totalAll;
    let totalAll = document.getElementById('totalHT');
    // affecter valeur à net à payer
    totalAll.value = totalHT  + '€';
    let totalTVA = totalHT * tva;
    let totalTTC = totalHT + totalTVA;

    document.getElementById('totalTVA').value = totalTVA + '€';
    document.getElementById('totalTTC').value = totalTTC + '€';
}
updateTotal();