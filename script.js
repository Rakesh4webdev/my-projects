var ul=document.getElementById('slide');
var display=0;

function showMenus(){
  if(display==0){
    ul.style.height='100vh';
    display=1;
  }
  else {
  ul.style.height='0%';
  display=0;
  
  }
}
