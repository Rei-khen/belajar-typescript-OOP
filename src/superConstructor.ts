//ketika kita ingin menurunkan sebuah kelas dan sudah ada constructo didalamnya maka kita perlu untuk menggunakan super constructor

class Orang {
  nama: string;

  //class ini punya attribute dan constructor
  constructor(nama: string) {
    this.nama = nama;
  }
}

class Mahasiswa extends Orang {
  universitas: string; //class ini punya attribute sendiri
  fakultas: string;
  prodi: string;

  //kalau kita mau bikin constructor kita wajib masukkan kata kunci super
  constructor(
    nama: string,
    universitas: string,
    fakultas: string,
    prodi: string
  ) {
    super(nama);
    this.universitas = universitas;
    this.fakultas = fakultas;
    this.prodi = prodi;
  }
}

const ucok = new Mahasiswa(
  "ucok",
  "universitas indonesia",
  "teknik",
  "informatika"
);
console.log(ucok);
