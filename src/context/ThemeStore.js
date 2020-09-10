import React, {useState} from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const themes = {
    themeOne: {
      gradientTop: '#CCD1BA',
      gradientBottom: '#BBCFD0',
    },
    themeTwo: {
      gradientTop: '#E1D4F0',
      gradientBottom: '#BEC9D4',
    },
    themeThree: {
      gradientTop: '#E79E84',
      gradientBottom: '#E5CB99',
    },
  };

  const meditationList = [
    {
      name: 'Meditation One',
      id: 1,
    },
    {
      name: 'Meditation Two',
      id: 2,
    },
    {
      name: 'Meditation Three',
      id: 3,
    },
    {
      name: 'Meditation Four',
      id: 4,
    },
  ];

  const [theme, setTheme] = useState(themes['themeOne']);

  const switchTheme = (theme) => {
    if (theme in themes) {
      setTheme(themes[theme]);
    } else {
      console.log('unknown theme');
    }
  };

  return (
    <ThemeContext.Provider value={{theme, meditationList, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
