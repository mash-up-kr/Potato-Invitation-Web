/* Internal dependencies */
import { rootState } from 'redux/reducers'

export const getInvitation = (state: rootState) => state.invitation.invitation
