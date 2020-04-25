/**
 * O(n) .. n/2
 * 
 * doesn't ignore space
 * ignores Capital letters - converts them to lower
 */
function palindrom(word){
  const wordLength = word.length
  for (let i=0; i < parseInt(wordLength/2); i++){
    if(word[i].toLowerCase() !== word[wordLength-1-i].toLowerCase()){
      return false
    }
  }
  return true
}
