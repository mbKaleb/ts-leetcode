"use strict";
function maxProfit(prices) {
    let maxProfit = 0;
    let p1 = 0;
    for (let p2 = 1; p2 < prices.length; p2++) {
        if (prices[p2] < prices[p1]) {
            p1 = p2;
            continue;
        }
        let cProfit = prices[p2] - prices[p1];
        if (cProfit > maxProfit) {
            maxProfit = cProfit;
        }
    }
    return maxProfit;
}
;
//# sourceMappingURL=best-time-to-buy-&-sell-stock.js.map