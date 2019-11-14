/*You are in the ancient Roman army and are Caesar's trusted companion and military advisor. He confides in you about numerous plots he has thwarted to take his life and tasks you to devise a way to keep secrets secret from his enemies.

You begin by creating a shift cipher, where the values of the letters get shifted by a specified (input) degree.

(exit story arc: A modern case of a shift cipher is the ROT13 cipher. The values of the letters are shifted by 13 places;'A' to 'N', and 'B' ↔ to'O'.

Create a function which takes a ROT13 encoded string as input and outputs a decoded string.

All letters are uppercase. Don't transform any non-alphabetic characters like spaces or punctuation, but do pass them on to the output.
*/
function hailCaesar(encryptedString) {
//   don't fail Caesar!!! 
 var s="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return encryptedString.replace(/[A-Z]/g,x=>s[s.lastIndexOf(x)-13]);
}
//stupidcode

function hailCaesar(encryptedString) {
//   don't fail Caesar!!! 
  const letterArr = encryptedString.match(/[^\s]+/g);
  // console.log(letterArr)
  
    let result = "";
    letterArr.map((letter, index) => {
      
      for(let i = 0 ; i< letter.length; i++){
        // console.log(letter.codePointAt(i))
        const list =  [".","/",",","?","0","1","2","3","4","5","6","7","8","9","@","[","`","{"];
        
        let letterChanged ="";
        let check = list.map(value => letter[i] !== value);

         
       
        if(letter.codePointAt(i)+13 <= 90){

            if(!check.includes(false)){
                letterChanged = String.fromCodePoint(letter.codePointAt(i)+13);
            }else{
                letterChanged = letter[i];
            }
          result+= letterChanged; 
        }else{
          
            if(!check.includes(false)){
               letterChanged = String.fromCodePoint(letter.codePointAt(i)+13 - 90 + 65 - 1);
            }else{
               letterChanged = letter[i];
            }
             
          result+= letterChanged;
        } 
       
      }
      if(index!=letterArr.length-1) result +=" ";
  
  })
    return result;
  
}
