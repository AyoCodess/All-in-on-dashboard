import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

const COLORS = {
  jumper: '#003f5c',
  hoodie: '#58508d',
  jacket: '#bc5090',
  sweater: '#ff6361',
  blazer: '#ffa600',
  raincoat: '#FEDF02',
};

function Clothes() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get(
          'https://therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil'
        );

        const rawData = response.data.payload;

        const totalDataCount = rawData.reduce((totalCount, { clothe }) => {
          const item = totalCount[clothe];

          if (item) {
            totalCount[clothe] = { ...item, value: item.value + 1 };
          } else {
            totalCount[clothe] = {
              title: clothe,
              value: 1,
              color: COLORS[clothe],
            };
          }

          return totalCount;
        }, {});

        const totalDataCountArr = Object.values(totalDataCount);

        setData(totalDataCountArr);
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    };
    apiCall();
  }, []);

  return (
    <>
      <div className='flex flex-col gap-1 p-1 items-center mx-auto mb-1 text-xl'>
        <p>in 1000 days you wore a...</p>

        {data.map((item, i) => (
          <div key={item.title} className='flex gap-1'>
            <div
              style={{
                color: COLORS[item.title],
              }}>
              {`${item.title}`}&nbsp;
            </div>
            <div>{`${item.value}`}</div>&nbsp;times
          </div>
        ))}
      </div>
      {!isLoading && (
        <div className=' mx-auto flex justify-center w-[15rem]'>
          <PieChart
            data={data}
            animate='true'
            labelStyle={(index) => ({
              fontSize: '0.4rem',
              fontFamily: 'sans-serif',
            })}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          />
        </div>
      )}
      {isLoading && <div className='text-center'>Loading your data...</div>}
    </>
  );
}

export default Clothes;
