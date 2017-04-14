import { CALL_API, PATCH, UPDATE } from '../../middleware/api'

export const MOVE_SUBMITTED = 'MOVE_SUBMITTED'

export default (positions) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: PATCH,
      type: MOVE_SUBMITTED,
      authenticate: false,
      payload: positions,
    }
  }
}
