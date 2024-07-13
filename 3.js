// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
let input = ["xc", "dz", "bbb", "dz"];
let query = ["bbb", "ac", "dz"];
let result = [0, 0, 0];
for (let i = 0; i < query.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (query[i] === input[j]) {
      result[i]++;
    }
  }
}

console.log(result);
