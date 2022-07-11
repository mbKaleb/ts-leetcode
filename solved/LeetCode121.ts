function maxProfit(prices: number[]): number {
    let a:number = 0;
    let maxProfit:number = 0;

    debugger
    for (let b:number = 1; b < prices.length; b++) {
        if (prices[b] < prices[a]){
            a = b;
        } else if ((prices[b] - prices[a]) > maxProfit){
            maxProfit = (prices[b] - prices[a]);
        }
    }
    return maxProfit;
};