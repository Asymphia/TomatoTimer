import { GlobalContext } from "../providers/GlobalProvider";
import {useContext, useState, useEffect} from "react";
import useCountdown from "../hooks/useCountdown";
import { playSound } from './playSound';

import Button from "./Button";
import Counter from "./Counter";
import StartButton from "./StartButton";

const CounterContainer = () => {
    const [state, dispatch] = useContext(GlobalContext);
    const {formattedTime, isEnded, togglePause} = useCountdown();
    const [isStarted, setIsStarted] = useState(false);
    const [pomodoroCounter, setPomodoroCounter] = useState(0);

    const handleClick = (name) => {
        setPomodoroCounter(0);
        dispatch({type: "SET_COUNTER", payload: name});
    }

    const handleStartClick = () => {
        setIsStarted(prevState => !prevState);
        togglePause();
    }

    useEffect(() => {
        if(isEnded){
            playSound(state.volume);
            if(pomodoroCounter === 4 && state.counter === 'pomodoro'){
                dispatch({type: "SET_COUNTER", payload: 'long break'});
            } else {
                switch(state.counter){
                    case 'pomodoro':
                        dispatch({type: "SET_COUNTER", payload: 'short break'});
                        break;
                    case 'short break':
                        setPomodoroCounter(prevState => prevState + 1);
                        dispatch({type: "SET_COUNTER", payload: 'pomodoro'});
                        break;
                    case 'long break':
                        setPomodoroCounter(0);
                        dispatch({type: "SET_COUNTER", payload: 'pomodoro'});
                        break;
                }
            }
        }
    }, [isEnded]);

    return (
        <div className='
         bg-white-translucent
         rounded-[30px]
         lg:w-[870px] md:w-[87%] w-[95%]
         h-fit
         absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
         p-vlg space-y-vlg
         flex flex-wrap justify-center
        '>
            <div className='w-full h-fit flex md:flex-nowrap flex-wrap justify-center lg:space-x-vlg md:space-x-lg md:space-y-0 space-y-sm space-x-0'>
                <Button key={1} name={'Pomodoro'} onClick={() => handleClick('pomodoro')} />
                <Button key={2} name={'Short Break'} onClick={() => handleClick('short break')} />
                <Button key={3} name={'Long Break'} onClick={() => handleClick('long break')} />
            </div>
            <Counter time={formattedTime} />
            <StartButton onClick={handleStartClick} name={isStarted ? 'pause' : 'start'} />
        </div>
    );
}

export default CounterContainer;