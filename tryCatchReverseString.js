/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 * s = "1234"
 * s = Number("1234")
 */
function reverseString(s) {
    let splitString, reverseString, joinString;
    try{
        splitString = s.split(""); 
        reverseString = splitString.reverse();
        joinString = splitString.join("");
        console.log(joinString);
    }catch(err){
        console.log(err.message);
        console.log(s); 
    } 
}