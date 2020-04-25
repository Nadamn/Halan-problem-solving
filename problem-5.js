// time O(n) .. 2n
function unique(arr){
  const map = new Map()
  for (const element of arr){
    if(map.get(element)) map.set(element, map.get(element)+1)
    else map.set(element, 1)
  }

  const uniqueArr = []
  for(const [key, val] of map){
    if(val === 1) uniqueArr.push(key)
  }

  return uniqueArr
}


console.log(unique(['apples', 'oranges', 'flowers', 'apples']))