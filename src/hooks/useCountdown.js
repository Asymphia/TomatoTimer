import {useState, useEffect, useContext} from "react";
import {GlobalContext} from "../providers/GlobalProvider";

function useCountdown() {
    const [state, dispatch] = useContext(GlobalContext);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [isEnded, setIsEnded] = useState(false);

    useEffect(() => {
        switch (state.counter){
            case 'pomodoro':
                setIsEnded(false);
                setMinutes(25);
                setSeconds(0);
                break;
            case 'short break':
                setIsEnded(false);
                setMinutes(5);
                setSeconds(0);
                break;
            case 'long break':
                setIsEnded(false);
                setMinutes(15);
                setSeconds(0);
                break;
        }
    }, [state.counter])

    useEffect(() => {
        let intervalId;

        if(!isPaused) {
            intervalId = setInterval(() => {
                if(seconds > 0) {
                    setSeconds(prevSeconds => prevSeconds - 1);
                } else {
                    if (minutes === 0){
                        setIsEnded(true);
                        clearInterval(intervalId);
                    } else {
                        setMinutes(prevMinutes => prevMinutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        }
    }, [minutes, seconds, isPaused]);

    const togglePause = () => {
        setIsPaused(prevIsPaused => !prevIsPaused);
    };

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return {
      formattedTime: `${formatTime(minutes)}:${formatTime(seconds)}`,
      isEnded,
      togglePause
    };
}

export default useCountdown;