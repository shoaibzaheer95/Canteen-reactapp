import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import ProductSingle from './Screens/ProductSingle';
import Collection from './Components/Collection'
import AllProduct from './Components/AllProduct'
const App = () => {
  return (
    <>
      
      <div className="bnd-mb-wrap">
      
          <Switch>
            {/* <Route path='/' exact render={() => <h1>Home Page</h1>} />
            <Route path='/product' render={() => <h1>Product Page</h1>} /> */}
            <Route path='/' exact  render={() =>
              <>
                <Header />
                <HomeScreen / >
                <Collection />
                <AllProduct/>
              </>
            } 
            
            />
            <Route path='/product/:id' component={ProductSingle} />
          </Switch>
        
        <Footer />
      </div>
    </>
  );
};

export default App;