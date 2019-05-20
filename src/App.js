import React from 'react';
import Calendar from './Calendar'
import './App.css';
import {Route  } from "react-router-dom"
import Datapage from "./Components/Datapage"
import getData from "./Components/Api"
import Detail from './Components/Detail';

class App extends React.Component {
  state = {
    date: new Date(),
    textDate: '',
    data: {},
    isVis: false,
    language: 'RU'
  }

  allLanguage = ['RU', 'US']
  
  handleSetDate = (set) => {
    this.setState({date: set})
  }

  setLanguage = (l) => {
    this.allLanguage.reverse()
    this.setState({language: this.allLanguage[0]},
      () => this.handleSetNumberDate({number: this.state.textDate.slice(-2)})
      )
  }

  handleSetNumberDate = ({number}) => {
    if (number === '') number = new Date().getDate()
    const d = this.state.date || new Date()
    let formatDate = d.getFullYear() + '-'
    formatDate += (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)
    formatDate += '-'
    formatDate += number < 10 ? '0' + number : number
    
    getData(formatDate, this.state.language)
      .then(res => res.json())
      .then(data => this.setState({ data, isVis: true, textDate: formatDate}))
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=>
          <Language setLanguage={this.setLanguage} allLanguage={this.allLanguage}/>} 
        />
        <Route exact path="/" render={()=>
          <Calendar 
            lang={this.state.language}
            date={this.state.date} 
            handleSetDate={this.handleSetDate}
            handleSetNumberDate={this.handleSetNumberDate}
          />} 
        />
        <Route exact path="/films" 
          render={() => 
            <Datapage 
              textDate={this.state.textDate} 
              lang={this.state.language} 
              date={this.state.date} 
              isVis={this.state.isVis} 
              data={this.state.data}
            />} 
        />
         <Route exact path="/detail/:id" 
          render={(param) => 
            <Detail 
              param={param}
              data={this.state.data}
            />} 
        />
      </div>
    );
  }
}
const Language = ({setLanguage, allLanguage}) => {
  return (
    <div className="changeLanguage">
      <div 
        className="language">{allLanguage[0]}
      </div>
      <div 
        onClick={() => setLanguage(allLanguage[1])} 
        className="language language2">{allLanguage[1]}
      </div>
    </div>
  )
}
export default App;
