export const calculateTotalSale = saleData => {
  return saleData.map(sale => sale.saleTotal).reduce((prev, next) => prev + next);
}

export const calculateTotalCashSale = saleData => {
  return saleData
    .filter(sale => !sale.creditCard)
    .map(sale => sale.saleTotal)
    .reduce((prev, next) => prev + next);
};

export const calculateCreditCardSale = saleData => {
  return saleData
    .filter(sale => sale.creditCard)
    .map(sale => sale.saleTotal)
    .reduce((prev, next) => prev + next);
};

export const calculateBuyerWithMostSale = saleData => {
  let temp = new Map();
  for (let item of saleData) {
    let e = temp.get(item.buyerName);
    if (e) {
      e.saleTotal += item.saleTotal;
    } else {
      temp.set(item.buyerName, { buyerName: item.buyerName, saleTotal: item.saleTotal });
    }
  }
  const saleTotalsByBuyerName = Array.from(temp.values());
  return saleTotalsByBuyerName.reduce((max, game) => max.saleTotal > game.saleTotal ? max : game);
};