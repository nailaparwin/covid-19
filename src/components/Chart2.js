import React, { Component, useContext } from 'react'
import{ Pie, Bar } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';
import { yellow } from '@material-ui/core/colors';

export default function Chart2 () {
    const { transactions } = useContext(GlobalContext);    
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
                'lightgreen',
                'pink',
                'yellow',
            ]
        }]
    }
    return (
        <>
        <div>
           <Bar
            data={data}
            options={{                
            }}/>
        </div>
        <div>
        {/* <Bar data={data} /> */}
     </div>
     </>
    )
}
