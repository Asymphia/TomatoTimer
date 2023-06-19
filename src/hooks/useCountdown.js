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
                setMinutes(state.duration.pomodoro);
                setSeconds(0);
                document.title = 'Time to focus! - TomatoTimer';
                break;
            case 'short break':
                setIsEnded(false);
                setMinutes(state.duration.shortBreak);
                setSeconds(0);
                document.title = 'Time for a short break! - TomatoTimer';
                break;
            case 'long break':
                setIsEnded(false);
                setMinutes(state.duration.longBreak);
                setSeconds(0);
                document.title = 'Time for a long break! - TomatoTimer';
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