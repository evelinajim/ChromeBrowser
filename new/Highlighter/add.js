document.addEventListener('addButton', function() {
    function processEmpty(num){
    let stringInput = document.getElementById('searchString'+num);
	  let addbutton = document.getElementById('btnAdd'+num);
    let appearnew = document.getElementById('search'+(num+1));
      
      
      if(stringInput.value ==''){
        addbutton.disabled = true;
        if(appearnew.style.display="block" && stringInput.value ==''){
          appearnew.style.display="none";
        }
      }
      if(stringInput.value.length>0){ addbutton.disabled = false; }
    }
      

 function continue1() {
    appear = document.getElementById("search2")
    appear.style.display="block";
  
  
}
  function continue2() {
    appear2 = document.getElementById("search3")
    appear2.style.display="block";
  
  
}
});