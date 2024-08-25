import React from 'react'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
}
const CanvasWrapper: FC<Props> = ({ children }) => {
  const [height, setHeight] = useState('100dvh')
  const [width, setWidth] = useState('100vw')
  const canvasRef = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    const measureCanvasSize = () => {
      const canvasElement = canvasRef.current
      if (canvasElement) {
        const canvasHeight = canvasElement.clientHeight
        const canvasWidth = canvasElement.clientWidth

        setWidth(`${canvasWidth % 2 === 0 ? canvasWidth - 1 : canvasWidth}px`)
        setHeight(
          `${canvasHeight % 2 !== 0 ? canvasHeight - 1 : canvasHeight}px`
        )
      }
    }
    measureCanvasSize()
    window.addEventListener('resize', measureCanvasSize)
    return () => {
      window.removeEventListener('resize', measureCanvasSize)
    }
  }, [])

  return (
    <div style={{ height, width }} ref={canvasRef}>
      {children}
    </div>
  )
}
export { CanvasWrapper }
