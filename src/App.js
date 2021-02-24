import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


//auth-context
import { AuthContext } from './shared/context/auth-context'
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/uiElements/LoadingSpinner";
import MakeCours from "./Cours/makeCours";
import ShowCours from "./Cours/showCours";




const Auth = React.lazy(() => import("./user/pages/auth"));
const Dashboard = React.lazy(() => import("./dashboard/pages/dashboard"));


const App = () => {
  const { token, userId, login, logout } = useAuth();
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Redirect to='/' />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" component={MakeCours} exact />
        <Route path="/showcours" component={ShowCours} exact />
        <Route path="/auth" component={Auth} exact />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}>
      <Router>
      
        <main className='app'>
          <Suspense fallback={
            <div className='center'>
              <LoadingSpinner  asOverlay/>
            </div>
          }>
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
