import { GlobalContext } from "../providers/GlobalProvider";
import {useContext, useState, useEffect} from "react";
import useCountdown from "../hooks/useCountdown";

import Button from "./Button";
import Counter from "./Counter";
import StartButton from "./StartButton";

const CounterContainer = () => {
    const [state, dispatch] = useContext(GlobalContext);
    const {formattedTime, isEnded, togglePause} = useCountdown();
    const [isStarted, setIsStarted] = useState(false);
    const [pomodoroCounter, setPomodoroCounter] = useState(0);

    const handleClick = () => {
        setIsStarted(prevState => !prevState);
        togglePause();
    }

    useEffect(() => {
        if(isEnded){
            if(pomodoroCounter === 4 && state.counter === 'pomodoro'){
                dispatch({type: 'long break'});
            } else {
                switch(state.counter){
                    case 'pomodoro':
                        dispatch({type: 'short break'});
                        break;
                    case 'short break':
                        setPomodoroCounter(prevState => prevState + 1);
                        dispatch({type: 'pomodoro'});
                        break;
                    case 'long break':
                        setPomodoroCounter(0);
                        dispatch({type: 'pomodoro'});
                        break;
                }
            }
        }
    }, [isEnded]);

    return (
      <div className='
      bg-white-translucent
      rounded-[30px]
      w-[870px] h-fit
      absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
      p-vlg space-y-vlg
      flex flex-wrap justify-center
      '>
          <div className='w-full h-fit flex flex-nowrap justify-center space-x-vlg'>
            <Button key={1} name={'Pomodoro'} onClick={() => dispatch({type: 'pomodoro'})} />
            <Button key={2} name={'Short Break'} onClick={() => dispatch({type: 'short break'})} />
            <Button key={3} name={'Long Break'} onClick={() => dispatch({type: 'long break'})} />
          </div>
          <Counter time={formattedTime} />
          <StartButton onClick={handleClick} name={isStarted ? 'pause' : 'start'} />
      </div>
    );
}

export default CounterContainer;