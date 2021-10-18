import React, { useState, useEffect } from 'react';
import CounterBox from '../CounterBox/CounterBox';
import './dataList.css';

const DataList = ({ data, animalTypes }) => {
  console.log('data: ', data);
  return (
    <div className='results_wrapper'>
      {animalTypes.map((type) => (
        <CounterBox data={data} title={type} />
      ))}
    </div>
  );
};

export default DataList;
