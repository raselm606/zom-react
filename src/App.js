import React, {Fragment} from 'react';
import RouterApp from "./Router/RouterApp";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
