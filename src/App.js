import { BrowserRouter as Router, Route } from 'react-router-dom';

import InDevelopment from './Components/InDevelopment/InDevelopment'
import Header from './Components/Header/Header';
import FrontMain from './Components/FrontMain/FrontMain';
import PortfolioMain from './Components/PortfolioMain/PortfolioMain';
import Footer from './Components/Footer/Footer.js';

function App() {
    return (
        <div className="App">
            <InDevelopment />
            <Router>
                <Header></Header>
                <Route exact={true} path="/" component={FrontMain}></Route>
                <Route exact={true} path="/portfolio" component={PortfolioMain}></Route>
                <Footer></Footer>
            </Router>
        </div >
    );
}

export default App;
