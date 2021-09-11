import {  BrowserRouter, Switch, Route } from "react-router-dom"
import {routes} from "./routes"
import { Suspense } from "react";

const Routes = () => {
    return(
        <BrowserRouter>
            <Suspense fallback={<div className="animated pulse infinite loading_page"></div>}>
            <Switch>
                {
                    routes.map((route, i) => (
                        <Route exact path={route.path} component={route.component}  key={i}/>
                    ))
                }
            </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;
