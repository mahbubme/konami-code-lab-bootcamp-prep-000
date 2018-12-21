let index=0;

function init() {
  window.addEventListener("keydown", function(event){
    const key= event.key;
    
    console.log(event.key);
    
    if( key===codes[index] ){
      index++;
      if(index===codes.length){
        alert("Congratulations!")
      }
    }
    else{
      index=0;
    }
  })
}

init();