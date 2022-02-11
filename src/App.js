import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import AllReviews from './components/AllReviews/AllReviews';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopCompanies from './components/TopCompanies/TopCompanies';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            {/* Shaon's Route  */}
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/allreviews'>
              <AllReviews></AllReviews>
            </Route>

            {/* Rifat's Route */}
            <Route path='/top'>
              <TopCompanies></TopCompanies>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
