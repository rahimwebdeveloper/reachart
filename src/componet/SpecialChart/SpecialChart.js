import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
       axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
       .then(data =>{
           const loaded = data.data.data;
           const phoneData = loaded.map(phone => {
               const parts = phone.slug.split('-');
               const ph ={ 
                   name: parts[0],
                   value: parseInt(parts[1])
               }
               return ph ;
            })
           console.log(phoneData);
           setPhones(phoneData);
       })
    },[])
    return (
        <BarChart width={500} height={400} data={phones}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    );
};

export default SpecialChart;