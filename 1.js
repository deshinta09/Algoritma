// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
let str = "NEGIE1";
let result = "";
for (let i = str.length; i >= 0; i--) {
  if (i === str.length) {
    resutl = str[i] + result;
  } else {
    result += str[i];
  }
}

console.log(result);
