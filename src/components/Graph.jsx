import React, { PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '12:00',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '6:00',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '12:00',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '6:00',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
   
  ];
 const Graph=()=> {
  
 
      return (
      <div className='flex flex-col justify-center items-center '>
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
          
            
            <Bar dataKey="uv"  stackId="a" fill="#34B009" />
            <Bar dataKey="pv" stackId="a" fill="#FF0000"  />
          </BarChart>
          </div>
      );
    }
  export default Graph;
  

    
 