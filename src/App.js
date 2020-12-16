import './App.css';
import HeaderComponent from './component/header/HeaderComponent';
import LoginComponent from './component/login/LoginComponent';
import { EventContextProvider } from './component/contextAPI/EventContext';

function App() {
  return (
    <div className="App">
      <EventContextProvider>
        <HeaderComponent />
        <LoginComponent />
      </EventContextProvider>

    </div>
  );
}

export default App;
