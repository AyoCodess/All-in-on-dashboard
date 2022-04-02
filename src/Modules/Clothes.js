import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

const COLORS = {
  jumper: '#FF7733',
  hoodie: '#4DFF33',
  jacket: '#334EFF',
  sweater: '#f13C37',
  blazer: '#FC33FF',
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
        console.err(err);
      }

      setIsLoading(false);
    };
    apiCall();
  }, []);

  return (
    <>
      <div className='flex flex-wrap gap-1 p-1 mx-auto items-center mb-1'>
        <p>in 1000 days you wore a...</p>

        {data.map((item, i) => (
          <>
            <div
              key={item.title}
              style={{
                color: COLORS[item.title],
              }}>{`${item.title}`}</div>
            <div>{`${item.value} `}</div> times |
          </>
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
      {isLoading && <div>Loading your data...</div>}
    </>
  );
}

export default Clothes;
