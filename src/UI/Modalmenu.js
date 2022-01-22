import React from 'react';
import closeBtn from '../images/icon-close.svg'
import { useGlobalContext } from '../Context';

const Modalmenu = () => {
    const {isMenuOpened, setIsMenuOpened} = useGlobalContext();

    return (
        <div className={`modal-overlay ${!isMenuOpened && "hide"}`}>
            <div className={`bg-white modal font-bold ${!isMenuOpened && "hide-modal"}`} >
                <img src={closeBtn} 
                alt="closeBtn" 
                className='ml-2 p-4 cursor-pointer'
                onClick={()=> setIsMenuOpened(false)}
                />
                <ul>
                    <li className='mx-2 p-2 cursor-pointer'>Collections</li>
                    <li className='mx-2 p-2 cursor-pointer'>Men</li>
                    <li className='mx-2 p-2 cursor-pointer'>Women</li>
                    <li className='mx-2 p-2 cursor-pointer'>About</li>
                    <li className='mx-2 p-2 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Modalmenu;
