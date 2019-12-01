const str = "range represented by a node is completely inside the given range";
let re = /\S+/g;

async function countStr(str){
  
    let count = 0;
    const arr = str.match(re);
    const result =  await Promise.all(
      arr.map(async function(char){
        if(await char.match(/[aeoui]/g)!=null&&char.match(/[aeoui]/g).length>=2){
            await count++; 
          }
         
      })
      
    )
    // console.log(count)
    // FIXED: return count
    return result
}

countStr(str)
