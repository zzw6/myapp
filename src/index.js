import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
class Root extends React.PureComponent{


    render(){
        return(
        <BrowserRouter basename='/myapp'>
            <App /> 
         </BrowserRouter>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
