import { Fragment, Component } from 'react/cjs/react.production.min';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// Props is simply thing that come out from state, and never change
// State is an object that describe your app, and able to change
// Children, a children from props to render the prop of the children component 

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    e.preventDefault();
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if(!robots.length) {
      return <h1>Loading</h1>
    }
    return (
      <Fragment>
        <h1>Robot Friend</h1>
        <SearchBox searchChange = { this.onSearchChange }/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots = { filteredRobots }/>  
          </ErrorBoundry>
        </Scroll>
      </Fragment>
    )
  }
}

export default App;
