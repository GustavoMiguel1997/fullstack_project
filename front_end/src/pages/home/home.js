import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import SidebarButton from './components/sidebarButton/sidebarButton';
import { buttonsInfo } from './assets/sidebarButtonsInfo.json';
import './home.css';

function Home({  }){
  function handleClick(e){
    console.log(e)
  }

  return(
    <div>
      <Sidebar>
        { 
          buttonsInfo.map(({ id, title }) => {
            const { default: path } = require(`./assets/icons/sidebar/${title.toLowerCase()}.svg`);
            return ( 
              <SidebarButton 
                id={id} 
                key={id} 
                icon={path} 
                title={title}
                onClick={handleClick}
              />
            )
          }) 
        }
      </Sidebar>
    </div>
  )
}

export default Home;