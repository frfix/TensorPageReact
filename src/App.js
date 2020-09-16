import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header.js'
import { CardsHolder } from './components/CardsHolder.js'
import './App.css';
import { DataSet } from './dataset.js';
import { Model } from './model.js';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    let dataset = new DataSet({
      object: 'person',
      model: Model
    });
    dataset.getAllStudents()
      .then(result => {
        this.setState({ data: result });
      })
  }
  render() {
    return (
      <React.Fragment>
        <Header title={'Tensor School'} description={'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'} />
        <CardsHolder persons={this.state.data} />
      </React.Fragment>
    );
  }

}

export default App;
