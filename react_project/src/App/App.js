import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from '../components/Create/Create';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Note from '../components/Note/Note';
import Error from '../components/Error/Error';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/create" component={Create}/>
          <Route exact path="/note/" component={Note}/>
          <Route exact path="/note/:noteURL" component={Note}/>
          <Route component={Error}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
