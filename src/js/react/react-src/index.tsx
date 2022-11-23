import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(

  <BrowserRouter>

       <App />  {/*теперь App имеет доступ до логики находящейся в ModalState до return */}

  </BrowserRouter>

);

