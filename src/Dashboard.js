import moment from 'moment'


function Dashboard({data, selection}) {

    let datiDashboard = {}

    if(selection==="cases") {
        datiDashboard = {title: "Global cases", value: data.cases}
    }else if(selection==="todayCases") {
        datiDashboard = {title: "Global today cases", value: data.cases}
    }else if(selection==="deaths") {
        datiDashboard = {title: "Global deaths", value: data.deaths}
    }else if(selection==="todayDeaths") {
        datiDashboard = {title: "Global today deaths", value: data.todayDeaths}
    }else if(selection==="recovered") {
        datiDashboard = {title: "Global recovered", value: data.recovered}
    }else if(selection==="todayRecovered") {
        datiDashboard = {title: "Global today recovered", value: data.todayRecovered}
    }



    return (
        <div className="dash">
            <div>
                <h3>{datiDashboard.title}</h3>
                <h2>{datiDashboard.value}</h2>
            </div>
            <div>
                <h3>Dati aggiornati al:</h3>
                <h2>{moment(data.updated).format("DD/MM/YYYY hh:mm:ss")}</h2>
            </div>
        </div>
    )
}


export default Dashboard