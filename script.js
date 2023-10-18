function somme(){
    var Q1 = Number(document.getElementById("Q1").value);
    var Q2 = Number(document.getElementById("Q2").value);
    var Q3 = Number(document.getElementById("Q3").value);
    var Q4 = Number(document.getElementById("Q4").value);
    var quantite = Q1+Q2+Q3+Q4;
    if(quantite==0){
        alert("Veuillez choisir au moin une pizza");
    }
    else{
        total = 80*Q1+75*Q2+100*Q3+120*Q4;
        document.getElementById("tot").textContent= total +"DH";
    }
}

function control_paiement(){
    if( document.getElementById("cheque").checked){
        document.getElementById("num_carte").disabled = true
    }else{
        document.getElementById("num_carte").disabled = false
    }

}
function valider(){
    // si la valeur du champ prenom est non vide
    if(document.formSaisie.client_name.value != "" || document.formSaisie.adresse.value != ""  ) {
      // les données sont ok, on peut envoyer le formulaire    
      return true;
    }
    else {
      // sinon on affiche un message
      alert("Saisissez le nom");
      // et on indique de ne pas envoyer le formulaire
      return false;
    }
  }

