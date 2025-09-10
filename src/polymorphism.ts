//polymorphism adalah kemampuan seubah objek dalam berubah menjadi bentuk lain
//erat kaitannya dengan inheritance

class Karyawan {
  status: string = "karyawan tetap";
  constructor(public nama: string) {}
}

class Programmer extends Karyawan {
  public tim: string = "programmer";
}

class Desainer extends Karyawan {
  public tim: string = "desainer";
}

//disini joko bisa berubah ubah bentuk
let joko = new Karyawan("joko");
console.log(joko);
console.log("\n");

joko = new Programmer("joko");
console.log(joko);
console.log("\n");

joko = new Desainer("joko");
console.log(joko);
console.log("\n");

//disini kita juga bisa membuat fungsi method
function sayNama(karyawan: Karyawan): void {
  console.log(
    "biar saya tebak nama kamu pasti :",
    karyawan.nama,
    "dan status kamu adalah",
    karyawan.status
  );
}

sayNama(new Programmer("joko"));
sayNama(new Desainer("joko"));

console.log("\n");

//contoh lain
class Hewan {
  bersuara(): void {
    console.log("Hewan bersuara");
  }
}

class Kucing extends Hewan {
  bersuara(): void {
    console.log("Meong!");
  }
}

class Anjing extends Hewan {
  bersuara(): void {
    console.log("Guk guk!");
  }
}

const hewanHewan: Hewan[] = [new Kucing(), new Anjing()];

for (const x of hewanHewan) {
  x.bersuara();
}

//contoh lain lagi
interface Bentuk {
  luas(): number;
}

class Persegi implements Bentuk {
  constructor(private sisi: number) {}
  luas(): number {
    return this.sisi * this.sisi;
  }
}

class Lingkaran implements Bentuk {
  constructor(private jariJari: number) {}
  luas(): number {
    return Math.PI * this.jariJari * this.jariJari;
  }
}

const shapes: Bentuk[] = [new Persegi(5), new Lingkaran(3)];

for (const s of shapes) {
  console.log(s.luas());
  // Output: 25, lalu 28.27...
}
