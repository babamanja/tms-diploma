import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux"
import GameRouter from "./Router/Router";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <GameRouter/>
            </div>
        </Provider>
    );
}

export default App;
