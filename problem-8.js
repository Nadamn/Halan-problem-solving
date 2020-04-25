// runtime: worst case O(n)
// space complexity: O(n)
function index_of_first_duplicate(arr){
  const map = new Map()
  for(let i=0; i< arr.length; i++){
    if(map.get(arr[i])) return i
    else map.set(arr[i], 1)
  }
}

console.log(index_of_first_duplicate( [ 5, 17, 3, 18, -1, -1 ] ))