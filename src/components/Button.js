import {GlobalContext} from "../providers/GlobalProvider";
import { useContext, useState, useLayoutEffect } from "react";

const Button = ({name, onClick}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [color, setColor] = useState('bg-none border-white');

    useLayoutEffect(() => {
        if(name.toLowerCase() === state.counter){
            switch (state.counter){
                case 'short break':
                    setColor('bg-green border-darkgreen hover:bg-darkgreen');
                    break;
                case 'long break':
                    setColor('bg-grey border-darkgrey hover:bg-darkgrey');
                    break;
                default:
                    setColor('bg-red border-darkred hover:bg-darkred');
            }
        } else {
            setColor('bg-none border-white')
        }
    }, [state.counter])


    return (
        <button className={`
        md:text-md text-sm-md
        border-solid border-[2px] rounded-full
        px-sm py-vsm ${color}
        transition
        hover:-translate-y-[3px]
        active:translate-y-0
        `}
        onClick={onClick}
        >
            { name }
        </button>
    );
}

export default Button;