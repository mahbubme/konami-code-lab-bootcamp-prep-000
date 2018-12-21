const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index=0;

function init() {
  window.addEventListener("keydown", function(event){
    const key= event.key;
    
    console.log(key);
    
    if( key === codes[index] ){
      index++;
      
      if( index === codes.length ){
        window.alert("Hurray!");
      }
    }
    else{
      index=0;
    }
  })
}
init();