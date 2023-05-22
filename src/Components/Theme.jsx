import React, { useState } from 'react';
import '../Styles/Theme.css'

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeChange = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div className={`slider ${isDarkMode ? 'slider--dark' : 'slider--light'}`}>
        <button onClick={handleModeChange}>Toggle Mode</button>
        {/* rest of the slider implementation */}
      </div>
    );
}

export default Theme
