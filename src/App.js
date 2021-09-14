import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  exact,
} from "react-router-dom";
import Users from "./Users/pages/Users";
import NewPlace from "./Places/Pages/NewPlace";
import MainNavigation from "./Shared/components/Navigation/MainNavigation";
import UserPlaces from "./Places/Pages/UserPlaces";
import ReducerProvider from "./Places/Reducer/ReducerProvider";
import Auth from "./Users/UserAuth/Auth";
import Reducer_Auth_Provider from "./Users/UserAuth/AuthReducer/Reducer_Auth_Provider";
import Signup from "./Users/UserAuth/Signup";
import Reducer_register_Provider from "./Users/UserAuth/AuthReducer/Reducer_register_Provider";
const App = () => {
  return (
    <Router className="App">
      <MainNavigation />
      <main>
        <Switch>
          <ReducerProvider>
            <Reducer_Auth_Provider>
              <Reducer_register_Provider>
                <Route path="/" exact>
                  <Users />
                </Route>
                <Route path="/signup" exact>
                  <Signup />
                </Route>
                <Route path="/places/new" exact>
                  <NewPlace />
                </Route>
                <Route path="/:userid/places" exact>
                  <UserPlaces />
                </Route>

                <Route path="/auth" exact>
                  <Auth />
                </Route>
              </Reducer_register_Provider>
            </Reducer_Auth_Provider>
            <Redirect to path="/" />
          </ReducerProvider>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
