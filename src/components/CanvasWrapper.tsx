import { Canvas, CanvasProps, useThree } from '@react-three/fiber'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  canvasProps?: CanvasProps
}

const CanvasWrapper: FC<Props> = ({ children, canvasProps = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  // Watch container size
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({
        width: Math.round(width % 2 !== 0 ? width + 1 : width),
        height: Math.round(height % 2 !== 0 ? height + 1 : height),
      })
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100vw', height: '100dvh', overflow: 'hidden' }}
    >
      <Canvas
        {...canvasProps} // spread first
        style={{
          ...canvasProps?.style,
          width: size.width,
          height: size.height,
        }}
      >
        <InvalidateOnResize />
        <UpdateCameraOnResize />
        {children}
      </Canvas>
    </div>
  )
}

export { CanvasWrapper }

const InvalidateOnResize = () => {
  const { invalidate } = useThree()
  useEffect(() => {
    const handle = () => invalidate()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [invalidate])
  return null
}

const UpdateCameraOnResize = () => {
  const { camera, size } = useThree()
  useEffect(() => {
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height])
  return null
}
