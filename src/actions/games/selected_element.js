export const TOGGLE_SELECT = 'TOGGLE_SELECT_TILE'

export default (checkerId) => {
  return {
    type: TOGGLE_SELECT,
    payload: checkerId
  }
}
