import {
  SUBSCRIBED_TO_GAMES_SERVICE,
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED,
} from '../actions/games/subscribe'
import { TOGGLE_SELECT } from '../actions/games/selected_element'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_GAMES_SERVICE :
      return ([].concat(payload)).reverse()

    case GAME_CREATED :
      const newGame = Object.assign({}, payload)
      return state.concat([newGame])

    case GAME_UPDATED :
      return state.map((game) => {
        if (game._id === payload._id) {
          return Object.assign({}, payload)
        }
        return game
      })

    case GAME_REMOVED :
      return state.filter((game) => (game._id !== payload._id))

    case TOGGLE_SELECT :
    return state.map((element) => {
      if (element.selected === payload) {
        return { ...element, selected: !element.selected }
      }
      console.log(payload)
      return game
    })

    default :
      return state
  }
}
