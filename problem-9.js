function sum(node){
  return node.value + node.children.map(node => sum(node)).reduce((sum, val) => sum += val, 0)
}


// example
const node4 = {
  value: 1,
  children: [] 
}
const node5 = {
  value: 4,
  children: []
}
const node2 = {
  value: 2,
  children: [node4, node5]
}
const node3 = {
  value: 3,
  children: []
}
const node1 = {
  value: 5,
  children: [node2, node3]
}

console.log(sum(node1))
