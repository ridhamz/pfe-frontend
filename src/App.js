import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


//auth-context
import { AuthContext } from './shared/context/auth-context'
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/uiElements/LoadingSpinner";
import MakeCours from "./Cours/makeCours";
import ShowCours from "./Cours/showCours";
import { useCours } from "./shared/hooks/cours-hook";
import { CoursContext } from "./shared/context/cours-context";




const Auth = React.lazy(() => import("./user/pages/auth"));
const Dashboard = React.lazy(() => import("./dashboard/pages/dashboard"));


const App = () => {
  const { token, userId, login, logout } = useAuth();
  const {
    onAddDiapo,
    prevDiapo,
    nextDiapo,
    numD,
    diapos,
    diapoElements,
    addElement,
    specDiapo,
    showCours,
    show,
    currentDiapo
} = useCours();
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
    <CoursContext.Provider
      value={{
       onAddDiapo,
       prevDiapo,
       nextDiapo,
       numD,
       diapos,
       diapoElements,addElement,
       specDiapo,
       show,
       showCours,
       currentDiapo
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
    </CoursContext.Provider>
  );
}

export default App;
