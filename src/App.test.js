import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { calculateTotalSale, calculateTotalCashSale, calculateCreditCardSale, calculateBuyerWithMostSale } from './Reports';

Enzyme.configure({ adapter: new Adapter() });

describe('Sale Management Tests', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  const salesData = [
    {
      "buyerName": "Bill Evans",
      "saleTotal": 371,
      "creditCard": true
    },
    {
      "buyerName": "Tom Jones",
      "saleTotal": 811,
      "creditCard": false
    },
    {
      "buyerName": "Alan Parsons",
      "saleTotal": 436,
      "creditCard": true
    },
    {
      "buyerName": "Bill Evans",
      "saleTotal": 6119,
      "creditCard": false
    },
    {
      "buyerName": "Alan Parsons",
      "saleTotal": 38,
      "creditCard": false
    },
    {
      "buyerName": "Alan Parsons",
      "saleTotal": 98,
      "creditCard": true
    },
    {
      "buyerName": "Bill Evans",
      "saleTotal": 828,
      "creditCard": true
    },
    {
      "buyerName": "Tom Jones",
      "saleTotal": 78,
      "creditCard": false
    },
    {
      "buyerName": "Tom Jones",
      "saleTotal": 714,
      "creditCard": true
    }
  ];

  beforeEach(() => {
    wrapper = render(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Total Sale Report', () => {
    expect(calculateTotalSale(salesData)).toBe(9493);
  });

  test('Total Cash Sale Report', () => {
    expect(calculateTotalCashSale(salesData)).toBe(7046);
  });

  test('Total Credit Card Sale Report', () => {
    expect(calculateCreditCardSale(salesData)).toBe(2447);
  });

  test('Buyer Name With Most Sale Report', async () => {
    expect(calculateBuyerWithMostSale(salesData)).toStrictEqual({"buyerName": "Bill Evans", "saleTotal": 7318});
  });
});
