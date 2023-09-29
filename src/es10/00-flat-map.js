// flat
const array = [1,2,3,4, [4,5,6, [7,8,9]]];
console.log(array.flat());
// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v*2]));
