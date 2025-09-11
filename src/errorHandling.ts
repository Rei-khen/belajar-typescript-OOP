class validationError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

function pembagian(pembilang: number, penyebut: number): number {
  if (penyebut <= 0) {
    throw new validationError("penyebut harus lebih besar dari 0");
  } else {
    return pembilang / penyebut;
  }
}

try {
  console.log(pembagian(12, 0));
} catch (e) {
  if (e instanceof validationError) {
    console.log(e.message);
  }
}
