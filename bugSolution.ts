function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result:number;
 try{
  result = add(10,20);
  console.log(result); // outputs 30
} catch (e) {
  console.error(e); // handles error gracefully
}

try{
  result = add("hello", 10); // throws an error at runtime
  console.log(result); // this will not execute
} catch (e) {
  console.error(e); // handles error gracefully
}