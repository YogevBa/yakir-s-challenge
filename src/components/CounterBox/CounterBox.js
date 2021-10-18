import React, { useEffect, useState } from 'react';
import './counterBox.css';

const CounterBox = ({ data, title }) => {
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    buildBoxType(title);
  }, [data]);

  const buildCounter = (tagsData) => {
    const counter = [];
    const checkMlTags =
      tagsData && tagsData.map((array) => array.map((itm) => itm));

    checkMlTags &&
      checkMlTags.forEach((elem) => {
        elem.forEach((element) => {
          const isTagExisted = counter.some((itm) => itm.tag == element);
          if (!isTagExisted) {
            counter.push({ tag: element, count: 1 });
          } else {
            counter.map((itm) => itm.count++);
          }
        });
      });
    setCurrentData(counter);
  };

  const buildBoxType = (type) => {
    switch (type) {
      case 'elephant':
        buildCounter(
          data[0] ? data[0].map((itm) => itm.tags.map((tag) => tag)) : []
        );
        break;
      case 'duck':
        buildCounter(
          data[1] ? data[1].map((itm) => itm.tags.map((tag) => tag)) : []
        );

        break;
      case 'lion':
        buildCounter(
          data[2] ? data[2].map((itm) => itm.tags.map((tag) => tag)) : []
        );

      default:
        return;
    }
  };

  return (
    <div className='CounterBox_wrapper'>
      <h3>{title}</h3>
      <ul>
        {currentData.map((itm) => (
          <li>
            {itm.tag}: {itm.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterBox;
