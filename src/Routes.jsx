import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";

export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route pathe="/">
                    <Home />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )

}