import Main from "./components/Main";
import Options from "./components/Options";
import CounterContainer from "./components/CounterContainer"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path="/" element={<Main />}>
            <Route index element={<CounterContainer />} />
            <Route path="options" element={<Options />} />
        </Route>
    )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
