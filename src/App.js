import React from 'react';
import './App.css';
import './bootstrap.css';

function App() {
  return (

<div className="container-fluid App">
  <div className="row">
    <div className="col-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button type="button" className="btn btn-outline-primary btn-block">Главная</button>
        <button type="button" className="btn btn-outline-secondary btn-block">Новости</button>
        <button type="button" className="btn btn-outline-success btn-block">Вход/Выход</button>

      </nav>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="App-content">
        Содержание
      </div>  
    </div>  
  </div>
</div>
 
  );
}

export default App;
