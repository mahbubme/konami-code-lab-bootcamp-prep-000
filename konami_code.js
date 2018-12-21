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

let index = parseInt(0);

function init() {
  document.body.addEventListener("keydown", function(event){
    const key = event.key;
    console.log(codes[i]);
    
    if( key === codes[index] ){
      index++;
      
      if( index === codes.length ){
        alert("Hurray!");
      }
    }
    else{
      index=0;
    }
  })
}
init();