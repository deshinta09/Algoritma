// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

let kalimat = "Saya sangat senang mengerjakan soal algoritma";
kalimat = kalimat.split(" ");
let result = "";
for (let i = 0; i < kalimat.length; i++) {
  if (result.length < kalimat[i].length) {
    result = kalimat[i];
  }
}

console.log(result);
