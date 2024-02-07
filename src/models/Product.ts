type Product = {
  nome: string;
  price: number;
};

const data: Product[] = [
  { nome: 'carne', price: 23 },
  { nome: 'frango', price: 15 },
  { nome: 'teste', price: 335 },
  { nome: 'file', price: 150 },
  { nome: 'file', price: 150 },
  { nome: 'file', price: 150 },
];

export const Product = {
  getAll: () => {
    return data;
  },

  getPriceAfter: (price: number) => {
    return data.filter((item) => {
      if (item.price >= price) {
        return true;
      } else {
        return false;
      }
    });
  },
};
