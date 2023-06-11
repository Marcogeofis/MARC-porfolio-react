import React from 'react';
import { Portfolio  } from '../porfolio/portfolio';
import { Route } from 'wouter';
import { Skills } from '../pages/About';
function App() {

  return (
    <div className="w-full">
      <Route path='/MARC-porfolio-react' component={Portfolio} />
      <Route path='/MARC-porfolio-react/mySkils' component={Skills} />
    </div>
  );
}

export default App;
