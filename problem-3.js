// O(n)
function runLengthEncode(characters){
  let count = 1
  let encodedStr = ""
  for (let i=0; i< characters.length; i++){
    if (i === characters.length-1) encodedStr += (characters[i] + count)
    else if (characters[i] == characters[i+1]) count += 1
    else {
      encodedStr += (characters[i] + count)
      count = 1
    }
  }
  return encodedStr
}

// O(n)
function runLengthDecode(encodedChars){
  let decodedStr = ""
  
  for (let i=0; i<encodedChars.length;){
    let character = encodedChars[i++]

    let count = ""
    while(i < encodedChars.length){
      if(Number(encodedChars[i]) || Number(encodedChars[i]) === 0){
        count+= encodedChars[i++]
      } else {
        break
      }
    }
    decodedStr += character.repeat(Number(count))
  }
  return decodedStr
}

console.log(runLengthEncode("aaaaaaaaaabbbaxxxxyyyzyx")==="a10b3a1x4y3z1y1x1")
console.log(runLengthDecode("a10b3a1x4y3z1y1x1") === "aaaaaaaaaabbbaxxxxyyyzyx")

console.log(runLengthEncode("blaablablaaa")==="b1l1a2b1l1a1b1l1a3")
console.log(runLengthDecode("b1l1a2b1l1a1b1l1a3") === "blaablablaaa")

console.log(runLengthEncode("b")==="b1")
console.log(runLengthDecode("b1") === "b")
