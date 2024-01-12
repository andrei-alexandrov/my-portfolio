import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../../store/themeSlice'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import './ToggleTheme.scss'

export default function ToggleTheme() {
    const { mode } = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleDarkMode());
        console.log(mode);
    }

    return (
        <div>
            <div>
                <div
                    className={`toggle ${mode ? "dark-mode" : "light-mode"}`}
                    onClick={handleClick}>
                    <Moon />
                    <Sun />
                    <div
                        className='toggle-button'
                        style={mode ? { left: '2px' } : { right: '2px' }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}
