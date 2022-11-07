import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Canvas from "./Canvas";
import { Atoms } from "./examples/Atoms";
import { Selectors } from "./examples/Selectors";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/examples/atoms">
                    <Atoms/>
                </Route>
                <Route path="/examples/selectors">
                    <Selectors/>
                </Route>
                <Route>
                    <Canvas />
                </Route>
            </Switch>
        </Router>
    )
}