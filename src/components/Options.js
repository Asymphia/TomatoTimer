import { GlobalContext } from "../providers/GlobalProvider";
import { useContext, useState } from "react";

const Options = () => {
    const [state, dispatch] = useContext(GlobalContext);
    const [pomodoro, setPomodoro] = useState(state.duration.pomodoro);
    const [shortBreak, setShortBreak] = useState(state.duration.shortBreak);
    const [longBreak, setLongBreak] = useState(state.duration.longBreak);
    const [volume, setVolume] = useState(state.volume);

    document.title = 'TomatoTimer - options';

    const handleDurationChange = () => {
        if(pomodoro < 1){
            setPomodoro(1);
        } else if(shortBreak < 1){
            setShortBreak(1);
        } else if(longBreak < 1){
            setLongBreak(1);
        } else if(pomodoro > 99){
            setPomodoro(99);
        } else if(shortBreak > 99){
            setShortBreak(99);
        } else if(longBreak > 99){
            setLongBreak(99);
        }
        dispatch({
            type: "SET_DURATION",
            payload: {
                pomodoro: parseInt(pomodoro),
                shortBreak: parseInt(shortBreak),
                longBreak: parseInt(longBreak)
            }
        });
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        dispatch({
            type: "SET_VOLUME",
            payload: parseFloat(volume)
        });
    };

    return (
        <div className='py-vlg flex flex-wrap justify-around'>
            <label className='w-full text-center text-sm-md'>
                <p className='mb-vsm'>Pomodoro duration:</p>
                <input
                    type="number"
                    min="1"
                    max="99"
                    value={pomodoro}
                    onChange={(e) => setPomodoro(e.target.value)}
                    onBlur={handleDurationChange}
                    className="text-black py-vsm px-sm rounded-[30px] focus:outline-none mb-md sm:w-[350px] w-full"
                />
            </label>
            <label className='w-full text-center text-sm-md'>
                <p className='mb-vsm'>Short break duration:</p>
                <input
                    type="number"
                    min="1"
                    max="99"
                    value={shortBreak}
                    onChange={(e) => setShortBreak(e.target.value)}
                    onBlur={handleDurationChange}
                    className="text-black py-vsm px-sm rounded-[30px] focus:outline-none mb-md sm:w-[350px] w-full"
                />
            </label>
            <label className='w-full text-center text-sm-md'>
                <p className='mb-vsm'>Long break duration:</p>
                <input
                    type="number"
                    min="1"
                    max="99"
                    value={longBreak}
                    onChange={(e) => setLongBreak(e.target.value)}
                    onBlur={handleDurationChange}
                    className="text-black py-vsm px-sm rounded-[30px] focus:outline-none mb-md sm:w-[350px] w-full"
                />
            </label>
            <label className='w-full text-center text-sm-md'>
                <p className='mb-vsm'>Alarm volume:</p>
                <input
                    type="range"
                    value={volume}
                    min="0"
                    max="100"
                    step="1"
                    onChange={handleVolumeChange}
                    className="appearance-none h-vsm rounded-md outline-none focus:outline-none sm:w-[350px] w-full"
                />
            </label>
        </div>
    );
};

export default Options;