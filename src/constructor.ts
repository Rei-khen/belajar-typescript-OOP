//constructor : method atau fungsi yang dipanggil ketika objek dibuat dari class

class Pembeli {
  constructor() {
    console.log("objek pembeli sudah dibuat");
  }
}

class Hewan {
  constructor(nama: string) {
    console.log("ini hewan", nama);
  }
}

new Pembeli();
const pembeli1: Pembeli = new Pembeli();

new Hewan("kucing");
const kuda: Hewan = new Hewan("kuda");
// const jerapah: Hewan = new Hewan(); kalau tidak diisi akan error
