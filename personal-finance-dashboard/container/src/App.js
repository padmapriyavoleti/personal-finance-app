import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';

// Dynamically loading the microfrontends
function loadMicroFrontend(url, elementId) {
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => {
    console.log(`${elementId} loaded`);
  };
  document.body.appendChild(script);
}

function App() {
  // State to keep track of whether the microfrontends have been loaded
  const [microFrontendsLoaded, setMicroFrontendsLoaded] = useState({
    incomeApp: false,
    expensesApp: false,
    investmentsApp: false
  });

  useEffect(() => {
    // Dynamically load Income App
    if (!microFrontendsLoaded.incomeApp) {
      loadMicroFrontend('http://localhost:3001/bundle.js', 'income-root');
      setMicroFrontendsLoaded((prevState) => ({ ...prevState, incomeApp: true }));
    }

    // Dynamically load Expenses App
    if (!microFrontendsLoaded.expensesApp) {
      loadMicroFrontend('http://localhost:3002/bundle.js', 'expenses-root');
      setMicroFrontendsLoaded((prevState) => ({ ...prevState, expensesApp: true }));
    }

    // Dynamically load Investments App
    if (!microFrontendsLoaded.investmentsApp) {
      loadMicroFrontend('http://localhost:3003/bundle.js', 'investments-root');
      setMicroFrontendsLoaded((prevState) => ({ ...prevState, investmentsApp: true }));
    }
  }, [microFrontendsLoaded]);

  return (
    <Provider store={store}>
      <div className="App">
        {/* Main Dashboard Overview */}
        <Dashboard />

        {/* Placeholder divs where microfrontends will be mounted */}
        <div>
          <div id="income-root"></div>
        </div>
        <div>
          <div id="expenses-root"></div>
        </div>
        <div>
          <div id="investments-root"></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
