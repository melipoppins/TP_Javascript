function verif() {
    var firstname = document.getElementById('firstName');
    var lastname = document.getElementById('lastname');
    var mail = document.getElementById('email');
    var phone = document.getElementById('phone');
    if(firstname.value == ""){
        alert("oups firstname");
        firstname.style.backgroundColor= 'red';
        return false;
    }

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!mailformat.test(mail)){
        alert("oups mail");
        mail.style.backgroundColor= 'red';
        return false;
    }

    var phoneformat = "/*(01|02|03|04|05|06|07|08|09)[0-9]{10}";
    if(phoneformat.regex(phone)){
        alert("oups phone");
        phone.style.backgroundColor= 'red';
        return false;
    }
}