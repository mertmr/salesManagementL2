import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { calculateTotalSale, calculateTotalCashSale, calculateCreditCardSale, calculateBuyerWithMostSale } from './Reports';

const App = () => {
  const [sales, setSales] = useState([]);
  const [saleTotal, setSaleTotal] = useState(0);
  const [saleCashTotal, setSaleCashTotal] = useState(0);
  const [saleCreditCardTotal, setSaleCreditCardTotal] = useState(0);
  const [buyerNameWithMostSale, setBuyerNameWithMostSale] = useState(0);

  useEffect(() => {
    axios
      .get('./sales.json')
      .then(salesDatas => {
        setSales(salesDatas.data);
        console.log(salesDatas.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (sales.length > 0) {
      setSaleTotal(calculateTotalSale(sales));
      setSaleCashTotal(calculateTotalCashSale(sales));
      setSaleCreditCardTotal(calculateCreditCardSale(sales));
      setBuyerNameWithMostSale(calculateBuyerWithMostSale(sales));
    }
  }, [sales]);

  return (
    <div className="container">
      <h1>Sales Management App</h1>
      <div className="flex-row">
        <div>
          <div className="flex-large">
            <h2>Total Sale</h2>
            {saleTotal}
          </div>
          <div className="flex-large">
            <h2>Total Cash Sale</h2>
            {saleCashTotal}
          </div>
          <div className="flex-large">
            <h2>Total Credit Card Sale</h2>
            {saleCreditCardTotal}
          </div>
          <div className="flex-large">
            <h2>Buyer Name With Most Sale</h2>
            <div>
              {buyerNameWithMostSale.buyerName}
            </div>
            <div>
            {buyerNameWithMostSale.saleTotal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
