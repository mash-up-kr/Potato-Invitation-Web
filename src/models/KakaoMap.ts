/* External dependencies */
import Immutable from 'immutable'

export interface KakaoMapAttr {
  addressName: string
  roadAddress: string
  latitude: number
  longitude: number
}

const KakaoMapRecord = Immutable.Record<KakaoMapAttr>({
  addressName: '',
  roadAddress: '',
  latitude: 0,
  longitude: 0,
})

class KakaoMap extends KakaoMapRecord {
  constructor(args: any = {}) {
    super({
      addressName: args.invitationAddressName,
      roadAddress: args.invitationRoadAddressName,
      latitude: args.x,
      longitude: args.y,
    })
  }
}

export default KakaoMap
