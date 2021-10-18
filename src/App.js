import './App.css';
import StreamDataForm from './components/StreamDataForm/StreamDataForm';
import DataList from './components/DataList/DataList';
import React, { useState, useEffect } from 'react';
import { getData } from '../src/apiCalls';
import { Button } from 'reactstrap';

const App = () => {
  const [data, setData] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [isShowData, setIsShowData] = useState(false);
  const optionResults = ['elephant', 'duck', 'lion'];

  const getDataAction = () => {
    const prepareData = [];
    optionResults.forEach((elem) => {
      getData(elem).then((res) => prepareData.push(res));
    });
    setData(prepareData);
    setHasData(true);
  };

  const showData = () => {
    setIsShowData(true);
  };

  return (
    <div className='app_wrapper'>
      <h1>Yakir's Challenge</h1>
      <DataList data={isShowData ? data : []} animalTypes={optionResults} />
      <StreamDataForm handleSubmit={getDataAction} />
      {hasData && (
        <Button color='success' onClick={showData}>
          Show Data
        </Button>
      )}
    </div>
  );
};

export default App;
