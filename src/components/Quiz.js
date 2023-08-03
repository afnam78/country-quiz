import React, { useEffect, useState } from 'react'

export const Quiz = ({ data, nextQuiz }) => {

  const [randomPositions, setRandomPositions] = useState([]);
  const [trueCapital, setTrueCapital] = useState(data.capital[0]);

  useEffect(() => {
    let capitals = [];
    data.falseCapitals.forEach(capital => {
      capitals.push(capital.capital[0]);
    });
    capitals.push(data.capital[0]);
    setTrueCapital(data.capital[0]);

    setRandomPositions(shuffle(capitals));

  }, [data]);

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const checkSelected = (capital) => {
    let response = capital === trueCapital;
    nextQuiz(response);
  }


  return (
    <div className='grid gap-2'>
      {randomPositions.map((position, index) => (
        <div key={index}>
          <button className='bg-white border-2 border-[#6066D0B2] rounded-md text-[#6066D0B2] w-full py-5 hover:bg-yellow-400 hover:text-white transition-all hover:border-transparent font-semibold flex gap-10 justify-start items-center px-5' onClick={() => checkSelected(position)}>
            <span className='font-bold'>
              {index === 0 ? 'A' :
                index === 1 ? 'B' :
                  index === 2 ? 'C' :
                    index === 3 ? 'D' : ''}
            </span>
            <span className=''>{position}</span>
          </button>
        </div>
      ))}
    </div>
  )
}
