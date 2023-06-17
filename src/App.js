import Main from "./components/Main";
import {GlobalProvider} from "./providers/GlobalProvider";

function App() {
  return (
    <div className="App">
        <GlobalProvider>
            <Main />
        </GlobalProvider>
    </div>
  );
}

export default App;
