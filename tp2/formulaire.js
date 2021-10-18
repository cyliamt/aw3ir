
function validation(){
    
    
    
    var n = document.getElementById("nom").value;
    ln=document.getElementById("nom").value.length;
    var p = document.getElementById("prenom").value;
    lp=document.getElementById("prenom").value.length;
    var d=document.getElementById("date").value;
    ld=document.getElementById("date").value.length;
    var a=document.getElementById("adresse").value;
    la=document.getElementById("adresse").value.length;
    var m=document.getElementById("mail").value;
    lm=document.getElementById("mail").value.length;
    
    document.getElementById("error").innerHTML = "";
    
    if(n== "") {
        
        document.getElementById("error").innerHTML="La saisie du nom est obligatoir..<br>";
        return false;
    }
    if(ln <5 & ln >1)
        {
        document.getElementById("error").innerHTML="La saisie  du nom doit contenir au moins 5 caracteres <br>";
        return false;
    
    }
    if(p == "") {
        
        document.getElementById("error").innerHTML="La saisie du prenom est obligatoir..<br>";
        return false;
        
    }
    if(lp <5  & lp >1)
    {
    document.getElementById("error").innerHTML="La saisie du prenom doit contenir au moins 5 caracteres <br>";
    return false;

}


    if(d == "") {
        
        document.getElementById("error").innerHTML="La saisie de la date est obligatoir..<br>";
        return false;
       
    }

    if(ld <5  & ld >1)
        {
        document.getElementById("error").innerHTML="La saisie de la date doit contenir au moins 5 caracteres <br>";
        return false;
    
    }
    if(a == "") {
       
        document.getElementById("error").innerHTML="La saisie de l'adresse est obligatoir..<br>";
        return false;
        
    }

    if(la <5  & la >1)
        {
        document.getElementById("error").innerHTML="La saisie  de l'adresse doit contenir au moins 5 caracteres <br>";
        return false;
    
    }
    if(m == "") {
       
        document.getElementById("error").innerHTML="La saisie du mail est obligatoir..<br>";
        return false;
        
    }
    if(lm <5  & lm >1)
        {
        document.getElementById("error").innerHTML="La saisie du mail doit contenir au moins 5 caracteres <br>";
        return false;
    
    }
    if(lp >5)
    {
    document.getElementById("resultat").innerHTML="bienvenue "+document.querySelector("  #prenom").value;
    
    return true;

}


}
