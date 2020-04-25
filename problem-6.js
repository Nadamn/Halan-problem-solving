function transpose(rows) {
  if (!Array.isArray(rows) || rows.length <= 0) return

  const transposedRows = []
  for (let i = 0; i < rows[0].length; i++) {
    transposedRows[i] = []
    for (const row of rows) {
      transposedRows[i].push(row[i])
    }
  }
  return transposedRows
}

console.log(transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])) 