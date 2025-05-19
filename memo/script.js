
function save(){
  document.getElementById('result').innerText = JSON.stringify(dum1, null, 2);
  document.getElementById('btn1').hidden = false;
  document.getElementById('btn2').hidden = true;
}

function reset(){
  document.getElementById('result').innerText = JSON.stringify(dum1, null, 2);
  document.getElementById('btn1').hidden = false;
  document.getElementById('btn2').hidden = true;
}


document.getElementById('result').innerText = JSON.stringify(dum1, null, 2);