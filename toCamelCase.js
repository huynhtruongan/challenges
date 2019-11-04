function toCamelCase(str){
let letter= /[^_-]+/g;

let s = "";
let arr = [];
console.log(str.match(letter))
   arr = str.match(letter);
   if(!!str.match(/[_]/)){
      arr.map(function(item){
        s+=item.replace(/^./,item[0].toUpperCase());
      })  
   }else{
      arr.map(function(item,key){
         if(key==0) s+=item;  
        else s+=item.replace(/^./,item[0].toUpperCase());
      })
   }
  console.log(s);
}
toCamelCase("The_Stealth_Warrior") // should return 'TheStealthWarrior'
toCamelCase("the-stealth-warrior") // should return 'theStealthWarrior'
