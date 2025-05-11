# drei-html-fix

![Drei HTML Fix Logo](https://raw.githubusercontent.com/IsaacUA/drei-html-fix/main/media/logo.png)

`drei-html-fix` is an npm package designed to address the offset issues of the Drei `HTML` component in React Three Fiber projects, particularly on high DPI devices. This package ensures that HTML content is properly positioned and displayed within your 3D scenes.

## What's new?

Added responsive resize of the canvas

## Features

- Fixes offset issues for Drei's `HTML` component.
- Ensures accurate positioning on high DPI devices (DPI of 3).
- Easy integration with React Three Fiber projects.

## Installation

To install `drei-html-fix`, run:

```bash
npm install drei-html-fix
```

x

## Usage

To use drei-html-fix:

- import '<CanvasWrapper>' and use it instead of '<Canvas>' component
- iframe's hight and width should be an even number

```tsx
import { Box, Html, OrbitControls } from '@react-three/drei'
import { CanvasWrapper } from 'drei-html-fix' // import CanvasWrapper

function App() {
  return (
    <>
      {/* Use <CanvasWrapper> instead react-three-fiber <Canvas> */}
      <CanvasWrapper
        canvasProps={
          { // Use <Canvas> props inside canvasProps
            camera: { fov: 60, position: [0, 0, 5] },
            shadows: true,
             dpr: [1, 2],
          }
        }>
        <Html transform>
          <div>
            <p>Hello World</p>
          </div>
        </Html>
      </CanvasWrapper>
    </CanvasWrapper>
  )
}
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
