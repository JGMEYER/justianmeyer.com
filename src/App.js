import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.js';
import FrontMain from './components/FrontMain.js';
import PortfolioMain from './components/PortfolioMain.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div className="App">
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
