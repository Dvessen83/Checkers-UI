import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'


import subscribeToGames from '../actions/games/subscribe'
// import fetchBoard from '../actions/games/fetchBoard'

class CheckersBoard extends PureComponent {
  static propTypes = {
    // board: PropTypes.array.isRequired,
    // fetchBoard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.subscribeToGames()

    // this.props.fetchBoard()
    // console.log('Helooooo!')
    // console.log(this.props.games[0].checkers)
    //
    // console.log(this.props.params.id)
  }




  render() {
    const { id } = this.props.params
    const ourGame = this.props.games.filter(function(element) {
      return element._id === id
    })[0]

    console.log(ourGame)

    return (
      <div className = "checkers">
        <h1>{ ourGame.title }</h1>

        { ourGame.checkers.map(function(element) {

          return element.value
        }) }

      </div>
    )
  }


}

const mapStateToProps = ( { games } ) => ( { games } )

export default connect (mapStateToProps, { subscribeToGames }) (CheckersBoard)
