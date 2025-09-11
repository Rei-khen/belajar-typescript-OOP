export const Persegi = {
  Luas(sisi: number): number {
    return sisi * sisi;
  },

  Keliling(sisi: number): number {
    return sisi * 4;
  },
};

export const PersegiPanjang = {
  Luas(panjang: number, lebar: number): number {
    return panjang * lebar;
  },

  Keliling(panjang: number, lebar: number): number {
    return 2 * (panjang + lebar);
  },
};
