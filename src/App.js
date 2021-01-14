import './App.css';
import InteractiveMap from './InteractiveMap.js'
import useAxios from "axios-hooks";
import {useState} from "react";
import Dashboard from "./Dashboard";
import Statistics from "./Statistics"

function App() {

    const [selection, setSelection] = useState("cases")

    const [dataMappa] = useAxios('https://disease.sh/v3/covid-19/countries?allowNull=false')
    const [dataDashboard] = useAxios('https://disease.sh/v3/covid-19/all?allowNull=false')
    const [dataStatistics] = useAxios('https://disease.sh/v3/covid-19/historical/all?lastdays=30')


    return (
        <div className="App">
            <select onChange={e => setSelection(e.target.value)}>
                <option value="cases">Cases</option>
                <option value="todayCases">Today Cases</option>
                <option value="deaths">Deaths</option>
                <option value="todayDeaths">Today Deaths</option>
                <option value="recovered">Recovered</option>
                <option value="todayRecovered">Today Recovered</option>
            </select>

            <div style={{paddingTop:'3em'}}>
                {dataMappa.loading && <div>Loading map...</div>}
                {dataMappa.error && <div>Error</div>}
                {dataMappa.data && <div><InteractiveMap data={dataMappa.data} selection={selection}/></div>}
            </div>

            <div style={{paddingTop:'3em'}}>
                {dataDashboard.loading && <div>Loading dashboard...</div>}
                {dataDashboard.error && <div>Error</div>}
                {dataDashboard.data && <div><Dashboard data={dataDashboard.data} selection={selection}/></div>}
            </div>

            <div style={{paddingTop:'3em'}}>
                {dataStatistics.loading && <div>Loading statistics...</div>}
                {dataStatistics.error && <div>Error</div>}
                {dataStatistics.data && <div><Statistics data={dataStatistics.data} selection={selection}/></div>}
            </div>

        </div>
    );
}

export default App;
