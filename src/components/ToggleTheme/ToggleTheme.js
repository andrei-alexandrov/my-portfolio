import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../store/themeSlice';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Modal from '../Modal/Modal';

import './ToggleTheme.scss';

export default function ToggleTheme() {
    const { mode } = useSelector(state => state.darkMode);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        if (mode) {
            setIsModalOpen(true);
        } else {
            dispatch(toggleDarkMode());
        }
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        dispatch(toggleDarkMode());
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className={`toggle ${mode ? "dark-mode" : "light-mode"}`} onClick={handleClick}>
                <Moon />
                <Sun />
                <div className='toggle-button' style={mode ? { left: '2px' } : { right: '2px' }} />
            </div>

            <Modal isOpen={isModalOpen} onClose={handleClose} onConfirm={handleConfirm}>
                <p>Switching to light mode is not recommended, are you sure?</p>
            </Modal>
        </div>
    );
}
