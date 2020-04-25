function compose(f, g){
  return (arg) => {
    const gReturn = g(arg)
    return f(gReturn)
  }
}