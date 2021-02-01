import { useState } from 'react';

import Header from './components/Header.js';
import FrontMain from './components/FrontMain.js';
import PortfolioMain from './components/PortfolioMain.js';
import Footer from './components/Footer.js';

function App() {
    const [mainContent, setMainContent] = useState('frontpage');

    function renderMainContent() {
        switch (mainContent) {
            case 'frontpage':
                return <FrontMain></FrontMain>;
            case 'portfolio':
                return <PortfolioMain></PortfolioMain>
            default:
                return <div>Page Not Found</div>;
        }
    }

    return (
        <div className="App">
            <Header></Header>
            {renderMainContent()}
            <Footer></Footer>
        </div>
    );
}

export default App;
