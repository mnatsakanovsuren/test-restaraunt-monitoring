import React, { useEffect, useState } from "react";
import { generateTables, randomizeTableData } from "./data";
import {TIME_INTERVAL} from './constants';
import './App.css';
import SearchableTable from './components/SearchableTable/SearchableTable';

const App = () => {
  const [tables, setTables] = useState(generateTables(5000));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTables((prevTables) => randomizeTableData(prevTables));
    }, TIME_INTERVAL);
    return () => clearInterval(interval);
  }, []);
  
  
  return (
    <div className='app'>
      <div className='container'>
        <h1>Restaurant Table Monitoring</h1>
        <SearchableTable tables={tables}/>
      </div>
    </div>
  );
};

export default App;
