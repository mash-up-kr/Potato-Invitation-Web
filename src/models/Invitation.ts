/* External dependencies */
import Immutable from 'immutable'
import _ from 'lodash'

/* Internal dependencies */
import KakaoMap from 'models/KakaoMap'

export interface InvitationAttr {
  title: string
  contents: string
  time: Date
  placeName: string
  map: KakaoMap | null
  images: string[]
}

const InvitationRecord = Immutable.Record<InvitationAttr>({
  title: '',
  contents: '',
  time: new Date(),
  placeName: '',
  map: new KakaoMap(),
  images: [],
})

class Invitation extends InvitationRecord {
  constructor(args: any = {}) {
    super({
      ...args,
      title: args.invitationTitle,
      contents: args.invitationContents,
      time: new Date(args.invitationTime),
      map: _.isNil(args.map) ? args.map : new KakaoMap(args.map),
    })
  }
}

export default Invitation
