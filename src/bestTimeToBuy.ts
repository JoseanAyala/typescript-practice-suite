/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Test2
*/

import { log } from "console";

const testCases = [
  { input: [7, 1, 5, 3, 6, 4], result: 4 },
  { input: [7, 6, 4, 3, 1], result: 0 },
  { input: [2, 4, 1], result: 2 },
];

type transaction = {
  buy: number;
  sell: number;
};

export default function maxProfit(prices: number[]): number {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  // Sell is a pointer that verifies next values
  // because this is sequential we can do this in a linear fashion.
  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      let todaysProfit = prices[sell] - prices[buy];
      if (maxProfit < todaysProfit) maxProfit = todaysProfit;
    } else {
      buy = sell;
    }
    sell++;
  }

  return maxProfit;
}

maxProfit([3, 2, 6, 5, 1, 3, 0]);
