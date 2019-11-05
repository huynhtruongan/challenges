function isFrime(num){
  if(num===2 || num===3) return true;
  if(num < 2 || Number.isInteger(Math.sqrt(num)) || num%2 === 0) return false;
  if(num > 3){
      for(let i = 3; i <= Math.floor(Math.sqrt(num)); i++){
        
      }
  } 

}

console.log(isFrime(3));
