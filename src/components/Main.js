import Header from "./Header";
import {GlobalContext} from "../providers/GlobalProvider";
import {useContext, useState, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";
import Info from "./Info";

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
        <div className="overflow-x-hidden">
        <div className={`w-screen h-screen transition ${bgColor} text-white relative overflow-hidden`} >
            <Header />
            <Outlet />
        </div>
            <Info />
        </div>
    );
}

export default Main;