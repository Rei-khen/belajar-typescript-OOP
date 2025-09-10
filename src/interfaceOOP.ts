//interface di oop bisa dikatakan sebagai kontrak yang menentukan bentuk class

interface Animal {
  nama: string; //kelas yang dibuat harus mengandung variabel dengan nama animal
  suara(): void; //kelas yang dibuat harus mengandung fungsi dengan nama suara
}

class Kucing implements Animal {
  nama: string; //wajib ada

  constructor(nama: string) {
    this.nama = nama;
  }

  suara(): void {
    //wajib ada
    console.log("meong meong meong");
  }
}

const pigaro = new Kucing("pigaro");
pigaro.suara();

//untuk implement bisa lebih dari 1 interface

interface MakhlukHidup {
  makanan: string[];
}

class Kuda implements Animal, MakhlukHidup {
  jenis: string = "kuda";
  nama: string; //wajib dari Animal
  makanan: string[]; //wajib dari makhluk hidup

  constructor(nama: string, makanan: string[]) {
    this.nama = nama;
    this.makanan = makanan;
  }

  //wajib dari Animal
  suara() {
    console.log("yihahahahaha");
  }
}

const ferando = new Kuda("fernando", ["rumput", "buah-buahan"]);
console.log(ferando);
ferando.suara();
