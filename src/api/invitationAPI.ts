/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils'
import KakaoMap from 'models/KakaoMap'

export interface getInvitationResponseType {
  invitationTitle: string
  invitationContents: string
  invitationTime: string
  placeName: string
  map: KakaoMap | null
  images: string[]
}

export const getInvitation: ResponseType<getInvitationResponseType> = ({ templateId }) => axios.get(`/invitations/${templateId}`)
