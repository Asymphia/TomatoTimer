import Header from "./Header";
import CounterContainer from "./CounterContainer";
import {GlobalContext} from "../providers/GlobalProvider";
import {useContext, useState, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    const [state, dispatch] = useContext(GlobalContext);
    const [bgColor, setBgColor] = useState('');

    useLayoutEffect(() => {
        switch (state.counter){
            case 'short break':
                setBgColor('bg-green');
                break;
            case 'long break':
                setBgColor('bg-grey');
                break;
            default:
                setBgColor('bg-red');
        }
    }, [state.counter])

    return (
        <div className={`w-screen h-screen transition ${bgColor} text-white relative overflow-hidden`} >
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;