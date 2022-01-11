import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { requestRobots, setSearchField } from '../redux/actions';

import './App.css';

// Props is simply thing that come out from state, and never change
// State is an object that describe your app, and able to change
// Children, a children from props to render the prop of the children component 

const App = ({searchField, onSearchChange, robots, isPending, onRequestRobots}) => {


  useEffect(() => {
    onRequestRobots()
  }, [])



  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  
  if(isPending) {
    return <h1>Loading</h1>
  }
    return (
      <Fragment>
        <h1>Robot Friend</h1>
        <SearchBox searchChange = { onSearchChange }/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots = { filteredRobots }/>  
          </ErrorBoundry>
        </Scroll>
      </Fragment>
    )
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    err: state.requestRobots.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
