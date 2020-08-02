/* External dependencies */
import React, { useRef, useEffect } from 'react'

/* Internal dependencies */
import KakaoMapService from 'services/KakaoMapService'
import * as Styled from './KakaoMap.styled'

interface KakaoMapProps {
  placeName: string
  addressName: string
  roadAddress: string
  latitude: number
  longitude: number
}

function KakaoMap({ placeName, addressName, roadAddress, latitude, longitude }: KakaoMapProps) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const mapService = new KakaoMapService(mapContainer.current, latitude, longitude)
    mapService.loadMap()
  }, [latitude, longitude])

  return (
    <Styled.MapWrapper>
      <Styled.AddressWrapper>
        <Styled.PlaceName>{placeName}</Styled.PlaceName>
        <Styled.AddressName>{addressName}</Styled.AddressName>
        <Styled.RoadAddress>
          <Styled.AddressTag>도로명</Styled.AddressTag>
          {roadAddress || '서울특별시 송파구 잠실1동-5 마천로 328 오금현대아파트 43동'}
        </Styled.RoadAddress>
      </Styled.AddressWrapper>
      <Styled.MapContainer ref={mapContainer} />
    </Styled.MapWrapper>
  )
}

export default React.memo(KakaoMap)
