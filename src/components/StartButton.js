import { useContext, useState, useLayoutEffect } from "react";
import {GlobalContext} from "../providers/GlobalProvider";

const StartButton = ({onClick, name}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [theme, setTheme] = useState({shadow: 'hover:shadow-red', color: 'text-red'});

    useLayoutEffect(() => {
        switch (state.counter){
            case 'short break':
                setTheme({shadow: 'hover:shadow-green', color: 'text-green'});
                break;
            case 'long break':
                setTheme({shadow: 'hover:shadow-grey', color: 'text-grey'});
                break;
            default:
                setTheme({shadow: 'hover:shadow-red', color: 'text-red'});
        }

    }, [state.counter]);

    return (
      <button className={`
      ${theme.color} text-lg uppercase
      px-lg py-vsm
      bg-white
      rounded-full
      w-fit h-fit
      transition
      ${theme.shadow} hover:-translate-y-[3px]
      active:translate-y-0 active:shadow-none`}
      onClick={onClick}
      >
          { name }
      </button>
    );
}

export default StartButton;