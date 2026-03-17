import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const students = [
  {
    id: 1,
    name: "Rahim Uddin",
    math: 85,
    physics: 78,
    chemistry: 82,
    biology: 75
  },
  {
    id: 2,
    name: "Karim Hasan",
    math: 90,
    physics: 88,
    chemistry: 84,
    biology: 80
  },
  {
    id: 3,
    name: "Ayesha Akter",
    math: 92,
    physics: 89,
    chemistry: 91,
    biology: 95
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    math: 78,
    physics: 74,
    chemistry: 80,
    biology: 85
  },
  {
    id: 5,
    name: "Tanvir Ahmed",
    math: 88,
    physics: 82,
    chemistry: 79,
    biology: 77
  },
  {
    id: 6,
    name: "Sabbir Hossain",
    math: 70,
    physics: 68,
    chemistry: 72,
    biology: 65
  },
  {
    id: 7,
    name: "Mim Rahman",
    math: 95,
    physics: 93,
    chemistry: 90,
    biology: 94
  },
  {
    id: 8,
    name: "Rifat Islam",
    math: 82,
    physics: 76,
    chemistry: 85,
    biology: 79
  },
  {
    id: 9,
    name: "Jannat Ara",
    math: 87,
    physics: 84,
    chemistry: 88,
    biology: 90
  },
  {
    id: 10,
    name: "Hasan Mahmud",
    math: 76,
    physics: 70,
    chemistry: 74,
    biology: 72
  }
];
const MyBarChart = () => {
  return (
    <div className='p-10'>
      <h2 className='text-center text-2xl'>Student Scores</h2>
     <BarChart style={{ width: '100%', height: 500, aspectRatio: 4, maxWidth: 1280, margin: '30px auto 10px' }} responsive data={students}>
      <Bar dataKey="math" fill="#8884d8" label='math'></Bar>
      <Bar dataKey="biology" fill="#f88244" ></Bar>
      <Bar dataKey="chemistry" fill="#71e25a" ></Bar>
      <Bar dataKey="physics" fill="#43eff9" ></Bar>
      <XAxis dataKey='name'></XAxis>
      <YAxis label={{ position: 'insideTopLeft', value: 'Scores', angle: -90, dy: 60 }} ></YAxis>
      <Tooltip></Tooltip>
     <Legend
  layout="vertical"  
  align="left"      
  verticalAlign="top" 
  wrapperStyle={{
    backgroundColor: '#f5f5f5',
    border: '1px solid #d5d5d5',
    borderRadius: 3,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}
/>
     </BarChart>
    </div>
  );
};

export default MyBarChart;