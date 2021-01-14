import {Chart} from "react-google-charts";


function Statistics({data, selection}) {

    const a = Object.values(data.cases)
    let cases = [['x','Cases']]
    for(let i=1; i<31; ++i) {
        cases[i] = [i, a[i]]
    }

    const b = Object.values(data.deaths)
    let deaths = [['x','Deaths']]
    for(let i=1; i<31; ++i) {
        deaths[i] = [i, b[i]]
    }

    const c = Object.values(data.recovered)
    let recovered = [['x','Recovered']]
    for(let i=1; i<31; ++i) {
        recovered[i] = [i, c[i]]
    }


    return (
        <div className="dash">
            <div>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading chart...</div>}
                    data={cases}
                    options={{
                        chart: 'Global cases in last 30 days'
                    }}
                />
            </div>
            <div>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading chart...</div>}
                    data={deaths}
                    options={{
                        chart: 'Global deaths in last 30 days'
                    }}
                />
            </div>
            <div>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading chart...</div>}
                    data={recovered}
                />
            </div>
        </div>
    )
}

export default Statistics