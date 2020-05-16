import React,{Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Resume from './Components/Whywe';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import TechnicalStack from './Components/TechnicalStack'
import Form from './Components/Form'

class App extends Component {
  render(){
    return (
   <div>
    <Layout>
        <Header  className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">SSB SELECT</Link>} scroll>
        <Navigation>
        <Link to="/mock">Mock Test</Link>
                <Link to="/whywe">Why we</Link>
                <Link to="/whyssb">Why SSB</Link>
                <Link to="/entries">Entries</Link>
               
            </Navigation>
        </Header>
        <Drawer> <a href ="/"className="draw"> SSB SELECT</a>
        <Navigation>
        <Link to="/mock">Mock Test</Link>
                <Link to="/whywe">Why we</Link>
                <Link to="/whyssb">Why SSB</Link>
                <Link to="/entries">Entries</Link>
           
            </Navigation>
        </Drawer>
        <Content>
      {/* <Form/>
       */}
       <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;