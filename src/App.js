import React from 'react';
import Translate from './Translate';
import Logo from './images/logo.png';


const App = () => {
  return (
    <div>
      <img alt='logo' src={Logo}/>
      <div className='github'>Made with <span aria-label='shining heart'role='img'>💖 </span>by <a href='https://github.com/vannida-lim/translator-app'>Vannida Lim</a></div>
      <Translate/>
    </div>
  );
}

export default App;
