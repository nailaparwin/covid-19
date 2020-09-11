import React, { useContext } from 'react'
import{ Pie } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';


export default function Chart () {
    const { transactions } = useContext(GlobalContext);
    console.log("chart" + transactions[0].total_cases)
    let data = {
        labels:['total cases', 'active cases', 'recovered cases', 'fatalities'],
        datasets:[{
            label: 'cases',
            data:[
                transactions[0].total_cases,
                transactions[0].active_cases,
                transactions[0].recovered_cases,
                transactions[0].fatalities
            ],
            backgroundColor:[
                'red',
                'green',
                'blue',
                'yellow',
            ]
        }]
    }
    return (
        <>
        <br/>
        <div>
           <Pie
            data={data}
            options={{                
            }}/>
        </div>
        <br/><br/>
     </>
    )
}
