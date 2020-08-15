/* External dependencies */
import React, { useRef, useEffect } from 'react'

/* Internal dependencies */
import KakaoMapModel from 'models/KakaoMap'
import KakaoMapService from 'services/KakaoMapService'
import * as Styled from './KakaoMap.styled'

interface KakaoMapProps {
  kakaoMap: KakaoMapModel
  placeName: string
}

function KakaoMap({ kakaoMap, placeName }: KakaoMapProps) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const mapService = new KakaoMapService(mapContainer.current, kakaoMap.latitude, kakaoMap.longitude)
    mapService.loadMap()
  }, [kakaoMap])

  return (
    <Styled.MapWrapper>
      <Styled.AddressWrapper>
        <Styled.PlaceName>{placeName}</Styled.PlaceName>
        <Styled.AddressName>{kakaoMap.addressName}</Styled.AddressName>
        <Styled.RoadAddress>
          <Styled.AddressTag>도로명</Styled.AddressTag>
          {kakaoMap.roadAddress}
        </Styled.RoadAddress>
      </Styled.AddressWrapper>
      <Styled.MapContainer ref={mapContainer} />
    </Styled.MapWrapper>
  )
}

export default React.memo(KakaoMap)
