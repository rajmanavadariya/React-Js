import React from 'react';
import Themeprovider from './Themeprovider';
import Toggletheme from './Toggletheme';
import Themecomponent from './Themecomponent';


function App() {
  return (
  
        <Themeprovider>
           <Toggletheme/>
           <Themecomponent/>
        </Themeprovider>

  );
}

export default App;
