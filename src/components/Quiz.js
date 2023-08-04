import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"


export const Quiz = ({ data, nextQuiz }) => {

  const [randomPositions, setRandomPositions] = useState([]);
  const [trueCapital, setTrueCapital] = useState(data.capital[0]);

  useEffect(() => {

    let capitals = [];
    capitals.push(data.capital[0]);
    setTrueCapital(data.capital[0]);

    data.falseCapitals.forEach(capital => {
      capitals.push(capital.capital[0]);
    });
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-white border-2 border-[#6066D0B2] rounded-md text-[#6066D0B2] w-full py-5 md:hover:bg-yellow-400 md:hover:text-white transition-all md:hover:border-transparent font-semibold flex gap-10 justify-start items-center px-5'
            onClick={() => checkSelected(position)}
          >
            <span className='font-bold'>
              {index === 0 ? 'A' :
                index === 1 ? 'B' :
                  index === 2 ? 'C' :
                    index === 3 ? 'D' : ''}
            </span>
            <span className=''>{position}</span>
          </motion.button>

        </div>
      ))}
    </div>
  )
}
