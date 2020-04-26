// runtime: worst case O(n)
// space complexity: O(n)
function index_of_first_duplicate(arr){
  const set = new Set()
  for(let i=0; i< arr.length; i++){
    if(set.has(arr[i])) return i
    else set.add(arr[i])
  }
}

console.log(index_of_first_duplicate( [ 5, 17, 3, 18, -1, -1 ] ))