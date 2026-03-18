import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksDataChart = marksData.map(studentData => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      math: studentData.marks.math,
      biology:  studentData.marks.biology,
      chemistry: studentData.marks.chemistry,
      physics: studentData.marks.physics,
    }
    const avg = (student.math + student.biology + student.chemistry + student.physics) / 4;
    student.avg = avg;
    return student
  })

   console.log(marksDataChart)

  return (
    <div className='flex flex-col gap-4 w-11/12 mx-auto p-10'>
      <h1 className='text-center'>Marks</h1>
      <BarChart style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive data={marksDataChart}>
        <Bar dataKey='math' fill='#1ecbe1'></Bar>
        <Bar dataKey='biology' fill='#E1341E'></Bar>
        <Bar dataKey='chemistry' fill='#63E817'></Bar>
        <Bar dataKey='physics' fill='#9C17E8'></Bar>
        <Bar dataKey='avg' fill='#ff1b00'></Bar>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default MarksChart;