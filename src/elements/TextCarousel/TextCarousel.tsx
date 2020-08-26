/* External dependencies */
import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import * as Styled from './TextCarousel.styled'

interface TextCarouselProps {
  className?: string
  duration?: number
  content: string
}

const MOVE_DURATION: number = 100

function TextCarousel({ className, duration = 7000, content }: TextCarouselProps) {
  const [isOver, setIsOver] = useState<boolean>(false)
  const WrapperRef = useRef<HTMLDivElement>(null)
  const ContentRef = useRef<HTMLDivElement>(null)
  const WrapperWidth = useRef<number>(0)
  const ContentWidth = useRef<number>(0)
  const LeftPosition = useRef<number>(0)
  const MoveToLeftEachInterval = useRef<number>(0)

  useEffect(() => {
    if (duration < 1000) {
      throw new Error(`Value of the duration set to ${duration}. duration must be equal or bigger than 1000. Please check again`)
    }

    WrapperWidth.current = WrapperRef?.current?.clientWidth as number
    ContentWidth.current = ContentRef?.current?.clientWidth as number

    if (duration >= 1000 && WrapperWidth.current < ContentWidth.current) {
      LeftPosition.current = WrapperWidth.current
      MoveToLeftEachInterval.current = (WrapperWidth.current + ContentWidth.current) / (duration / MOVE_DURATION)
      setIsOver(true)
    }
  }, [duration])

  useEffect(() => {
    if (isOver && !_.isNil(ContentRef.current)) {
      const moveToLeft = setInterval(() => {
        LeftPosition.current -= MoveToLeftEachInterval.current
        // @ts-ignore
        ContentRef.current.style.transform = `translateX(${LeftPosition.current}px)`
      }, MOVE_DURATION)
      const clearLeftPosition = setInterval(() => {
        LeftPosition.current = WrapperWidth.current
      }, duration)

      return () => {
        clearInterval(moveToLeft)
        clearInterval(clearLeftPosition)
      }
    }
  }, [isOver, duration])

  return (
    <Styled.Wrapper ref={WrapperRef} className={className} isOver={isOver}>
      <Styled.Carousel ref={ContentRef}>{content}</Styled.Carousel>
    </Styled.Wrapper>
  )
}

export default React.memo(TextCarousel)
