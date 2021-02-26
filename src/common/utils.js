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


const calculateTimeSeries = ({ years, mu, sigma, fee, initialSum, monthlySum }) => {

    const series = [];
    let allSeries = [];

    const obj={}
    for (let k=0; k<=12 * years; ++k) {
        series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
    }

    for (let k=0; k<series.length; k++) {
        obj['median']= series[k].median,
        obj['good']=series[k].upper95,
        obj['bad']=series[k].lower05,
        obj['month']= k
        allSeries=[...allSeries, {...obj}]
    }

    return allSeries;
};

export {calculateTimeSeries};
