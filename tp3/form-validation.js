

window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    
    // Y mettre le code Javascript pour valider tous les champs du formulaire
    //function validation(){
    var n = document.getElementById("nom").value;
    ln = document.getElementById("nom").value.length;
    var p = document.getElementById("prenom").value;
    lp = document.getElementById("prenom").value.length;
    var d = document.getElementById("date").value;
    ld = document.getElementById("date").value.length;
    var a = document.getElementById("type").value;
    la = document.getElementById("type").value.length;
    var m = document.getElementById("mail").value;
    lm = document.getElementById("mail").value.length;
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    document.getElementById("error").innerHTML = "";


    if (ln == 0 && lp == 0 && ld == 0 && lm == 0 && la == 0) {

        var myModal = new bootstrap.Modal(document.getElementById('myModal1'));
        myModal.show();


    }


    //validation prenom
    if (lp !== 0 && lp < 5) {

        if (ln == 0 || ld == 0 || lm == 0 || la == 0) {

            var myModal = new bootstrap.Modal(document.getElementById('myModal1'));
            myModal.show();


        }
        else {
            var myModal = new bootstrap.Modal(document.getElementById('myModal3'));
            myModal.show();

        }

    }

    //validation nom
    if (ln !== 0 && ln < 5) {
        if (lp == 0 || ld == 0 || lm == 0 || la == 0) {

            var myModal = new bootstrap.Modal(document.getElementById('myModal1'));
            myModal.show();


        }
        else {
            var myModal = new bootstrap.Modal(document.getElementById('myModal2'));
            myModal.show();

        }

    }

    //validation mail



    if (lm !== 0 && lm < 5) {
        if (lp == 0 || ld == 0 || ln == 0 || la == 0) {
            

            var myModal = new bootstrap.Modal(document.getElementById('myModal1'));
            myModal.show();
            

        }
        else if (lp !== 0 && ld !== 0 && ln !== 0 && la !== 0) {
            if (m.match(mailformat)) {

            }
            else {

                var myModal = new bootstrap.Modal(document.getElementById('myModal5'));
                myModal.show();

            }

        }

    }

    //validation type
    if (la !== 0 && la < 5) {
        if (ln == 0 || ld == 0 || lm == 0 || lp == 0) {

            var myModal = new bootstrap.Modal(document.getElementById('myModal1'));
            myModal.show();


        }
        else {
            var myModal = new bootstrap.Modal(document.getElementById('myModal4'));
            myModal.show();

        }

    }
    //validation de la date
    if (ld !== 0 && ld < 5) {
        if (ln == 0 || la == 0 || lm == 0 || lp == 0) {

            var myModal = new bootstrap.Modal(document.getElementById('myModal1'));
            myModal.show();


        }
        else {
            var myModal = new bootstrap.Modal(document.getElementById('myModal6'));
            myModal.show();

        }

    }


    if (lp > 5 && ln > 5 && ld > 5 && la > 5 && lm > 5) {
        if (m.match(mailformat)) {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        }
        else {

            var myModal = new bootstrap.Modal(document.getElementById('myModal5'));
            myModal.show();
        }


    }





    /*
         function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
    
    */



};