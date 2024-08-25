# drei-html-fix

<h1 align="center" title="file-type">
 <img src="media/logo.png" alt="file-type logo">
</h1>

`drei-html-fix` is an npm package designed to address the offset issues of the Drei `HTML` component in React Three Fiber projects, particularly on high DPI devices. This package ensures that HTML content is properly positioned and displayed within your 3D scenes.

## Features

- Fixes offset issues for Drei's `HTML` component.
- Ensures accurate positioning on high DPI devices (DPI of 3).
- Easy integration with React Three Fiber projects.

## Installation

To install `drei-html-fix`, run:

```bash
npm install drei-html-fix
```

## Usage

To use drei-html-fix, import '<CanvasWrapper>' and wrap '<Canvas>' component:

```tsx
import { Html } from 'drei-html-fix'
import { CanvasWrapper } from '@react-three/fiber'

function App() {
  return (
    <CanvasWrapper>
      {/* Wrap react-three-fiber Canvas */}
      <Canvas>
        <Html>
          <div>Your HTML content here</div>
        </Html>
      </Canvas>
    </CanvasWrapper>
  )
}

export default App
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- [GitHub Profile](https://github.com/IsaacUA)
- [Email me](mailto:dmytro.hordus@gmail.com)

## GitHub Repository

You can find the project repository [here](https://github.com/IsaacUA/drei-html-fix).
