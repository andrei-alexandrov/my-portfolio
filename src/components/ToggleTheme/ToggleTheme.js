import React, { useContext } from 'react'
import { themeContext } from '../../Context'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import './ToggleTheme.scss'

export default function ToggleTheme() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  }

  return (
    <div>
      <div>
        <div className='toggle' onClick={handleClick}>
          <Moon />
          <Sun />
          <div
            className='toggle-button'
            style={darkMode ? { left: '2px' } : { right: '2px' }}>
          </div>
        </div>
      </div>
    </div>
  )
}
