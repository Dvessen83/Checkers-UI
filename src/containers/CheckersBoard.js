import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './CheckersBoard.sass'

import toggleSelect from '../actions/games/selected_element'
import subscribeToGames from '../actions/games/subscribe'
// import fetchBoard from '../actions/games/fetchBoard'

class CheckersBoard extends PureComponent {
  constructor() {
    super()

    this.state = {
      positions: []
    }
  }


  componentDidMount() {
    this.props.subscribeToGames()
  }
  // onclick change toggle element.selected

  //determine player 1 and player 2

  //first selected vs second selected
  //change value

  classNames() {
    const { selected } = this.props

    let classes = 'not selected'

    if (selected) { classes += ' selected' }

    return classes
  }


  // positionsFull((positions) => {
  //   console.log("im Full!")
  //   // if (positions.length == 4) {
  //   //
  //   // }
  // })


  myFunc1(checker,y) {
    // let newPositions = []
    console.log(checker.x, checker.y)
    this.state.positions.push(checker.x, checker.y)
    console.log(this.state.positions)
    this.props.myFunc2(this.state.positions)
  }
  myFunc2(positions) {

    return console.log("I'm Full!")
  }




  render() {
    const { id } = this.props.params
    const ourGame = this.props.games.filter(function(element) {
      return element._id === id
    })[0]

    console.log(ourGame)

    let newerPositions = []
    newerPositions.push(this.myFunc1, this.myFunc2)
    console.log(newerPositions)

    return (
      <div className="checkers">
        <h1>{ ourGame.title }</h1>
        
          { ourGame.checkers.map((element) => {

          // let checkerId= "checker_" + element.x + "_" + element.y
    return <div className="checkerfield">

             <button onClick={this.myFunc1.bind(this, element)} >{element.value}
             </button>

          </div>
      }) }

      </div>

    )
  }
}

const mapStateToProps = ( { games } ) => ( { games } )

export default connect (mapStateToProps, { subscribeToGames }) (CheckersBoard)
