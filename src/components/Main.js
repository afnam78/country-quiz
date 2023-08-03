import React, { useEffect, useState } from 'react'
import { generateFiveQuizes } from '../services/Quiz';
import { Quiz } from './Quiz';

export const Main = ({ allCorrect }) => {

    const [quizes, setQuizes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [quizPosition, setQuizPosition] = useState(0);
    const [responses, setResponses] = useState([]);
    const [finished, setFinished] = useState(false);



    useEffect(() => {
        generateFiveQuizes().then((data) => {
            setQuizes(data);
            setLoaded(true);
            console.log(data);
        });
    }, []);

    const saveQuizResponse = (data) => {
        setResponses([...responses, data]);
        if (quizPosition !== 4) {
            setQuizPosition(quizPosition + 1);
        } else {
            setFinished(true);
            allCorrect(getResults().failed === 0);
        }
    }

    const getResults = () => {
        let failed = 0;
        let correct = 0;

        for (let i = 0; i < responses.length; i++) {
            if (responses[i]) {
                correct++;
            } else {
                failed++;
            }
        }

        return {
            correct: correct,
            failed: failed
        };
    }

    return (
        <>
            {
                loaded ?
                    <div className='max-w-lg w-full border rounded-lg shadow-md p-10 bg-white'>
                        {!finished ?
                            (
                                <div>
                                    <h2 className='text-[#2F527B] text-lg font-bold mb-3'>Capital of {quizes[quizPosition].name.common} is</h2>
                                    <Quiz data={quizes[quizPosition]} nextQuiz={(data) => saveQuizResponse(data)} />
                                </div>
                            )
                            :
                            (
                                <div>
                                    <div>
                                        {

                                            getResults().failed > 0 ? <h2 className='text-[#2F527B] text-lg font-bold'>
                                                You failed {getResults().failed} out of 5
                                            </h2> : <h2 className='text-[#2F527B] text-lg font-bold'>
                                                Congradulations! You got {getResults().correct} out of 5
                                            </h2>
                                        }
                                    </div>
                                </div>
                            )}
                    </div>
                    : <>
                    </>
            }
        </>
    )

}
