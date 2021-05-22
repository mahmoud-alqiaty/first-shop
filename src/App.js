import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './containers/Navbar';
import ProductDetails from './containers/ProductDetails';
import ProductsList from './containers/ProductsList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ProductsList} /> 
          <Route path='/product/:productId' component={ProductDetails} /> 
          <Route>404 Not Found!</Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
