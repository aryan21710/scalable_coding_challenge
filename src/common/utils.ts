function mapDate({ t, mu, sigma, fee, initialSum, monthlySum }) {
    let yearlyReturn = mu - fee;
    let monthlyReturn = yearlyReturn / 12;
    let month = t * 12;

    let median = initialSum * Math.exp(yearlyReturn * t) + monthlySum * Math.exp(monthlyReturn * (month - Math.floor(month))) * (Math.exp(monthlyReturn * Math.floor(month)) - 1.0) / (Math.exp(monthlyReturn) - 1.0);

    return {
        median: median,
        upper95: Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645),
        lower05: Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645)
    };
};

interface MyArgs {
years: number, mu: number, sigma: number, fee: number, initialSum: number, monthlySum: number
}

export const calculateTimeSeries: React.FC<MyArgs> = ({years, mu, sigma, fee, initialSum, monthlySum}):Array<object> => {
    const series = [];

    const obj = {};
    for (let k = 0; k <= 12 * years; ++k) {
        series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
    }

    return series.map((seriesElem, idx)=>{
        obj['median'] = seriesElem.median,
        obj['good'] = seriesElem.upper95,
        obj['bad'] = seriesElem.lower05,
        obj['month'] = idx;
        return { ...obj };
    });
};

export const calculateTimeSeries1 = ({ years, mu, sigma, fee, initialSum, monthlySum }) => {

    var series = [];
    for (let k = 0; k <= 12 * years; ++k) {
        series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
    }

    let allSeries = {
        median: [],
        upper95: [],
        lower05: []
    };

    for (let k = 0; k < series.length; k++) {
        allSeries.median.push({ y: series[k].median, x: series[k].x });
        allSeries.upper95.push({ y: series[k].upper95, x: series[k].x });
        allSeries.lower05.push({ y: series[k].lower05, x: series[k].x });
    }

    return allSeries;
};


