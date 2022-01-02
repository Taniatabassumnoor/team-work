import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
    const data = [
        {
          name: 'Jan',
          purchased: 3000,
        },
        {
          name: 'Feb',
          purchased: 4000,
        },
        {
          name: 'Mar',
          purchased: 1000,
        },
        {
          name: 'Apr',
          purchased: 4000,
        },
        {
          name: 'May',
          purchased: 2000,
        },
        {
          name: 'June',
          purchased: 4000,
        },
        {
          name: 'July',
          purchased: 4000,
        },
        {
          name: 'Aug',
          purchased: 9000,
        },
        {
          name: 'Sep',
          purchased: 4000,
        },
        {
          name: 'Oct',
          purchased: 4000,
        },
        {
          name: 'Nov',
          purchased: 5000,
        },
        {
          name: 'Dec',
          purchased: 3000,
        },
    
        
      ];
    return (
        <div className='chart'>
            <h3 className='chartTitle'>User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey="purchased" stroke="#5550bd" />
        <Tooltip></Tooltip>
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Analytics;