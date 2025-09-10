//setter dan getter adalah method untuk mengubah properti dan mengambil properti

class Category {
  _name?: string;

  get name(): string {
    if (this._name) {
      return this._name;
    } else {
      return "empty";
    }
  }

  set name(nama: string) {
    if (nama != "") {
      this._name = nama;
    }
  }
}

const elektronik: Category = new Category();

elektronik.name = "elektronik";
console.log(elektronik.name);

//contoh lain

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get Area(): number {
    return this.width * this.height;
  }
}

const r: Rectangle = new Rectangle(12, 12);
console.log(r.Area);
// console.log(r.Area()); error karna kalau get harus dipanggil seperti properti bukan method
