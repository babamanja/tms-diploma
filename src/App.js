import './App.css';
import { MainWindow } from "./components/MainWindow";
import { Provider } from "react-redux";
import { store } from "./redux"


function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <MainWindow/>
    </div>
      </Provider>
  );
}

export default App;
