import logo from '../img/logo.png';
import {GlobalContext} from "../providers/GlobalProvider";
import {useContext, useState, useLayoutEffect} from "react";

const Header = () => {
    const [state, dispatch] = useContext(GlobalContext);
    const [color, setColor] = useState('border-darkred');

    useLayoutEffect(() => {
        switch (state.counter){
            case 'short break':
                setColor('border-darkgreen');
                break;
            case 'long break':
                setColor('border-darkgrey');
                break;
            default:
                setColor('border-darkred');
        }
    }, [state.counter]);

    return (
      <header className='w-full h-vlg font-bold text-lg'>
          <div className='flex flex-nowrap items-center justify-center space-x-sm p-vsm'>
              <img src={logo} alt='logo' className='h-md' />
              <h1>TomatoTrack</h1>
          </div>
          <hr className={`border-solid transition ${color} border-[1px] w-[80%] m-auto`} />
      </header>
    );
}

export default Header;