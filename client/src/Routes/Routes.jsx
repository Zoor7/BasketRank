import { AnimatePresence } from "framer-motion";

import {
    Switch,
    Route,
    useLocation,
    Redirect,
} from "react-router-dom";
import Home from "../Views/Home/Home";
import Players from "../Views/Players/Players";
import Teams from "../Views/Teams/Teams";
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";
import Profile from "../Views/Perfil/Profile";
import Chats from "../Views/Chats/Chats";


const Routes = () => {

    let location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route path="/inicio" component={Home} />
                <Route path="/jugadores" component={Players} />
                <Route path="/equipos" component={Teams} />
                <Route path="/inicio-sesion" component={Login} />
                <Route path="/registro" component={Register} />
                <Route path="/perfil" component={Profile} />
                <Route path="/chats" component={Chats} />
                <Route>
                    <Redirect to='/inicio' />
                </Route>
            </Switch>
        </AnimatePresence>

    );

}

export default Routes