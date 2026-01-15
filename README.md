# drei-html-fix

![Drei HTML Fix Logo](https://raw.githubusercontent.com/IsaacUA/drei-html-fix/main/media/logo.png)

`drei-html-fix` is an npm package designed to address the offset issues of the Drei `HTML` component in React Three Fiber projects, particularly on high DPI devices. This package ensures that HTML content is properly positioned and displayed within your 3D scenes.

## Features

- Fixes offset issues for Drei's `HTML` component.
- Ensures accurate positioning on high DPI devices (DPI of 3).
- Easy integration with React Three Fiber projects.

## Installation

To install `drei-html-fix`, run:

```bash
npm install @isaac_ua/drei-html-fix
```

## Usage

To use drei-html-fix:

- import '<CanvasWrapper>' and use it instead of '<Canvas>' component
- ⚠️ Important: <span style="color:red">The HTML component and all its children must have width and height as whole numbers </span>(no decimals). Using decimal values (e.g., 19.5px) can break the positioning of the HTML content.

```tsx
import { Box, Html, OrbitControls } from '@react-three/drei'
import { CanvasWrapper } from '@isaac_ua/drei-html-fix' // import CanvasWrapper

function App() {
  return (
    <>
      {/* Use <CanvasWrapper> instead react-three-fiber <Canvas> */}
      <CanvasWrapper
        canvasProps={{
          // Use <Canvas> props inside canvasProps
          camera: { fov: 60, position: [0, 0, 5] },
          shadows: true,
          dpr: [1, 2],
        }}
      >
        <Html transform>
          <div
            style={{
              background: 'white',
              padding: '19px 19px',
            }}
          >
            <p>Hello World</p>
          </div>
        </Html>
      </CanvasWrapper>
    </>
  )
}
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
