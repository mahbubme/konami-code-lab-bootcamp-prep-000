const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0;
function init() {
  window.addEventListener("keydown", function(event){
    const key=parseInt(event.which);
    
    console.log(event.which);
    
    if( key ===code[index] ){
      index++;
      
      if( index === code.length ){
        window.alert("Hurray!")
      }
    }
    else{
      index=0;
    }
  })
}
init();