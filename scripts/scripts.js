function valider(){

  var nom =document.getElementById("nom");
  var pren =document.getElementById("prenom");
  var dem =document.getElementById("demande");
  var email =document.getElementById("email");
  var tell =document.getElementById("tel");
  var vide = true;

  if (nom.value === "" || nom.value < 0 || nom.value > 0){
      nom.style.borderColor = "red";
      vide = false;
  }
  else{
  	nom.style.borderColor ="";
  }

  if (prenom.value==="" || prenom.value < 0 || prenom.value > 0){
      pren.style.borderColor = "red";
      vide = false;
  }
  else{
  	pren.style.borderColor ="";
  }

  if (demande.value===""){
      dem.style.borderColor = "red";
      vide = false;
  }
  else{
  	dem.style.borderColor ="";
  }

  if (email.value.indexOf("@")==-1){
      email.style.borderColor = "red";
      alert("Il vous manque un @ pour l'email");
      vide=false;
  }
  else{
      email.style.borderColor ="";
      }

  if (tel.value.indexOf("+")==0){
      tell.style.borderColor ="";
  }
  else{
      tell.style.borderColor = "red";
      alert("Il vous manque un + pour le numéro de telphone");
      vide=false;
      }

  if (!vide){
  alert("Un ou plusieurs champs sont vide !");
  }

}
