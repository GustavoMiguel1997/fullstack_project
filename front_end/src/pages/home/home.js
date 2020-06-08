import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from '../../services/auth';
import { Sidebar, SidebarButton, Header} from './components/components';
import { buttonsInfo } from './assets/sidebarButtonsInfo.json';
import './home.css';

function Home(props){
  const [selectedButton, setSelectedButton] = useState('buttonHome');

  function handleClick(e){
    setSelectedButton(e.target.id || e.target.parentElement.id)
    if(e.target.parentElement.id === 'buttonLogout' || e.target.id === 'buttonLogout'){
      logout();
      props.history.push('/login');
    }
  }

  return(
    <div className='home-page'>
      <Sidebar>
        { 
          buttonsInfo.map(({ id, title, barColor }) => {
            const { default: path } = require(`./assets/icons/sidebar/${title.toLowerCase()}.svg`);
            return ( 
              <SidebarButton 
                id={id} 
                key={id} 
                icon={path} 
                isSelected={selectedButton === id}
                title={title}
                barColor={barColor}
                onClick={handleClick}
              />
            )
          }) 
        }
      </Sidebar>
      <div className="home-content">
        <Header/>
        <div className="home-card">
          
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home);