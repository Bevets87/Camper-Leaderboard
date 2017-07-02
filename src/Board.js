import React, { Component } from 'react'

import ColumnHeadings from './ColumnHeadings'

import './Board.css'

class Board extends Component {
  constructor (props) {
    super (props)
    this.state = {
      leaders: []
    }
    this.fetchData = this.fetchData.bind(this)
  }
  fetchData (e) {
    var query = e ? e.target.name : 'recent';
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/' + query )
    .then(response => {
      response.json().then(result => {
        this.setState({
          leaders: result
        })
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  componentDidMount () {
    this.fetchData()
  }
  render () {
    let count = 0
    return (
      <div className='container'>
        <ColumnHeadings fetchData={this.fetchData}/>
        {this.state.leaders.map( leader => {
          count++
          return (
            <div className='camper-row' key={leader.username}>
              <div className='camper-wrapper-first'>
                <h4 className='camper-position'>{count}</h4>
              </div>
              <div className='camper-wrapper'>
                <img className='camper-photo' src={leader.img} alt=''/>
              </div>
              <div className='camper-wrapper'>
                <h4 className='camper camper-username'>{leader.username}</h4>
              </div>
              <div className='camper-wrapper'>
                <h4 className='camper camper-recent-points'>{leader.recent}</h4>
              </div>
              <div className='camper-wrapper'>
                <h4 className='camper camper-all-time-points'>{leader.alltime}</h4>
              </div>
            </div>
            )
          })}
      </div>
    )
  }
}

export default Board
