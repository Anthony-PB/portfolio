import React from 'react';
import "./s-components/Small.css"
import Spotlight from './s-components/Spotlight';
import CTA from "./s-components/CTA"
import Plans from './s-components/Plans';
import SidebarContent from './s-components/SidebarContent';

const Home = () => {
  return( 
    <div className="spread">
      <h2>Home</h2>
      <div className="eighty-twenty">
        <div className="eighty">
          <Spotlight />
          <CTA />
          <Plans />
        </div>
        <div className="twenty">
          <SidebarContent />
        </div>
      </div>
    </div>
  )
};

export default Home;