window.onload = function () { 
    
    contactStore.add(document.querySelector("#prenom").value,document.querySelector("#nom").value,document.querySelector("#mail").value,document.querySelector("#adresse").value,document.querySelector("#date").value);
   var contactList = contactStore.getList();
   for(var index in contactList){
    console.log(contactList[index].name);
    console.log(contactList[index].fistname);
    console.log(contactList[index].date);
    console.log(contactList[index].adress);
    console.log(contactList[index].mail);
    document.querySelector("table tbody").innerHTML += '<tr><td>'+contactList[index].firstname+'</td><td>'+contactList[index].name+'</td><td>'+contactList[index].mail+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].date+'</td></tr>';

  }

};
function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = 1+document.querySelector(`#${id}`).value.length;
  }