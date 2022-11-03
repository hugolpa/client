import React, { useState } from "react";
import "./App.css";
import {  Nav, NavItem, TabContent, TabPane, NavLink  } from 'reactstrap';
import Tab1 from "./components/tab1/tab1";
import Tab2 from "./components/tab2/tab2";
import Tab3 from "./components/tab3/tab3";
import Tab4 from "./components/tab4/tab4";
import Tab5 from "./components/tab5/tab5";



export default function App() {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div className="container   my-4">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == '1' ? 'active' : ''}
            onClick={() => setActiveTab('1')}
          >
            Hugo Leonardo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '5' ? 'active' : ''}
            onClick={() => setActiveTab('5')}
          >
            Pong on Space
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '2' ? 'active' : ''}
            onClick={() => setActiveTab('2')}
          >
            App 1 CRUD
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '4' ? 'active' : ''}
            onClick={() => setActiveTab('4')}
          >
            App 2 Screen shot Medical Recorder
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == '3' ? 'active' : ''}
            onClick={() => setActiveTab('3')}
          >
            App 3 Consuming Api
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        
          <Tab1/>
        </TabPane>
        <TabPane tabId="2">
        <Tab2/>
        </TabPane>
        <TabPane tabId="3">
         <Tab3/>
        </TabPane>
        <TabPane tabId="4">
          <Tab4/>
        </TabPane>
        <TabPane tabId="5">
          <Tab5/>
        </TabPane>
      </TabContent>
    </div>
  );
}
