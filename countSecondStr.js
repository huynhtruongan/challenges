const string = "range represented by a node is completely inside the given range";
let re = /\S+/g;


function countVowels(string){
  //your code here;
  let arr = [],count = 0;
    if(!!string){
      arr = string.match(/\S+/g);
      arr.map(char=>{
       if(char.match(/[aeoui]/g)!=null && char.match(/[aeoui]/ig).length >= 2) count ++;
      })
    }

  return count
}

Test.assertEquals(countVowels("my first kata"),1, "The string has 1 word containing a second vowels");
Test.assertEquals(countVowels("Once upon a time"),3, "Should account for upper case elements");
Test.assertEquals(countVowels(""),0, "Empty string");
