import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './CheckersBoard.sass'

import toggleSelect from '../actions/games/selected_element'
import subscribeToGames from '../actions/games/subscribe'
// import fetchBoard from '../actions/games/fetchBoard'

class CheckersBoard extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
    //isSelected: Proptypes.bool.isRequired
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



  toggleSelect(// XXX: ) {
    this.props.onChange(this.props)
  }
  myFunc() {
    console.log("hi")
  }

  render() {
    const { id } = this.props.params
    const ourGame = this.props.games.filter(function(element) {
      return element._id === id
    })[0]

    console.log(ourGame)
    const { selected } = this.props
    return (
      <div className="checkers">
        <h1>{ ourGame.title }</h1>
          { ourGame.checkers.map((element) => {

          // let checkerId= "checker_" + element.x + "_" + element.y
    return <div className="checkerfield">

             <button onClick={ this.myFunc }> {element.value}
             </button>
             </div>
        }) }

      </div>

    )
  }
}

const mapStateToProps = ( { games } ) => ( { games } )

export default connect (mapStateToProps, { subscribeToGames, onChange: toggleSelect }) (CheckersBoard)
