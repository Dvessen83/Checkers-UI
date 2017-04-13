import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'


import subscribeToGames from '../actions/games/subscribe'
// import fetchBoard from '../actions/games/fetchBoard'

class CheckersBoard extends PureComponent {
  static propTypes = {
    board: PropTypes.array.isRequired,
    // fetchBoard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.subscribeToGames()

    // this.props.fetchBoard()
    console.log(this.props.checkers)

    console.log(this.props.params.id)
  }




  render() {
    return (
      <div className = "checkers">
        <h1>Board goes here!</h1>

      </div>
    )
  }


}

const mapStateToProps = ( {games} ) => ( { games } )

export default connect (mapStateToProps, { subscribeToGames }) (CheckersBoard)
