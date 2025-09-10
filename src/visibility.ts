/*  
    public - bisa diakses dimana pun (default)
    private - hanya bisa diakses oleh classnya sendiri
    protected - sama seperti private tapi bisa diakses oleh class turunan
*/

class Counter {
  protected increment: number = 0;
  //   private increment: number = 0;

  public tambahSatu() {
    this.increment++;
  }

  public showIncrement() {
    console.log("nilai increment saat ini:", this.increment);
  }
}

class DoubleCoutner extends Counter {
  public tambahDua() {
    this.increment += 2; //akan error kalau variabel increment di parent adalah private
  }
}

//testing

const satu = new Counter();
satu.tambahSatu();
satu.tambahSatu();
satu.showIncrement();

const dua = new DoubleCoutner();
dua.tambahDua();
dua.tambahDua();
dua.showIncrement();
