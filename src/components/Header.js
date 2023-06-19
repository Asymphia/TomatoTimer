import logo from '../img/logo.png';
import optionsLogo from '../img/optionsLogo.png';
import {GlobalContext} from "../providers/GlobalProvider";
import {useContext, useState, useLayoutEffect} from "react";
import { NavLink } from 'react-router-dom';

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
      <header className='w-full h-vlg font-bold md:text-lg text-sm-lg flex flex-wrap justify-around items-center'>
          <NavLink to="/" className='flex flex-nowrap items-center justify-center space-x-sm p-vsm w-fit transition hover:-translate-y-[3px] active:translate-y-0'>
              <img src={logo} alt='logo' className='md:h-md h-[24px]' />
              <h1>TomatoTimer</h1>
          </NavLink>
          <NavLink to="options" className="w-fit h-fit transition hover:-translate-y-[3px] active:translate-y-0">
              <img src={optionsLogo} alt='options' className='h-[24px]' />
          </NavLink>
          <hr className={`border-solid transition ${color} border-[1px] w-full m-auto`} />
      </header>
    );
}

export default Header;