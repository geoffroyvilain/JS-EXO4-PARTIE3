function verif(){
//on déclarare la variable password et on stocke le résultat en cherchant la valeur de password
  var password = document.getElementById('password').value;
// idem pour confirmPassword
  var confirmPassword = document.getElementById('confirmPassword').value;
// si password est egal à confirmPassword alors appliquer sur value les bordures
  if (password == confirmPassword){
    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirmPassword').style.border = '3px solid green';
// sinon appliquer sur value pour les bordures
  }else{
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
  }
}
