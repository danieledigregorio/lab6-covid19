import {WorldMap} from "react-svg-worldmap";
import './countries.json'

export const dataa =
    [
        { country: "it", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
    ]

function InteractiveMap({data, selection}) {

    let datiMappa = [];

    if(selection==="cases") {
        datiMappa = [];
        for(let i=0; i<data.length; ++i) {
            if(data[i].countryInfo.iso3!==null) {
                datiMappa[datiMappa.length] = {country: data[i].countryInfo.iso2, value: data[i].cases}
            }
        }
    }else if(selection==="todayCases") {
        datiMappa = [];
        for(let i=0; i<data.length; ++i) {
            if(data[i].countryInfo.iso3!==null) {
                datiMappa[datiMappa.length] = {country: data[i].countryInfo.iso2, value: data[i].todayCases}
            }
        }
    }else if(selection==="deaths") {
        datiMappa = [];
        for(let i=0; i<data.length; ++i) {
            if(data[i].countryInfo.iso3!==null) {
                datiMappa[datiMappa.length] = {country: data[i].countryInfo.iso2, value: data[i].deaths}
            }
        }
    }else if(selection==="todayDeaths") {
        datiMappa = [];
        for(let i=0; i<data.length; ++i) {
            if(data[i].countryInfo.iso3!==null) {
                datiMappa[datiMappa.length] = {country: data[i].countryInfo.iso2, value: data[i].todayDeaths}
            }
        }
    }else if(selection==="recovered") {
        datiMappa = [];
        for(let i=0; i<data.length; ++i) {
            if(data[i].countryInfo.iso3!==null) {
                datiMappa[datiMappa.length] = {country: data[i].countryInfo.iso2, value: data[i].todayDeaths}
            }
        }
    }else if(selection==="todayRecovered") {
        datiMappa = [];
        for(let i=0; i<data.length; ++i) {
            if(data[i].countryInfo.iso3!==null) {
                datiMappa[datiMappa.length] = {country: data[i].countryInfo.iso2, value: data[i].todayDeaths}
            }
        }
    }

    return (
        <div>
            <WorldMap color="red" backgroundColor="#282c34" borderColor="white" size="xl" data={datiMappa} />
        </div>
    )
}

export default InteractiveMap