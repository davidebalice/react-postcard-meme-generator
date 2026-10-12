# React Postcard and Meme Generator

A browser-based editor for creating memes and postcards built with React.
Pick one of the preset images or upload your own photo, add and style the texts, then generate a PNG image ready to download.

**Live demo:** <https://meme-generator.davidebalice.dev/>

![Screenshot](https://demo-api.davidebalice.dev/api/demo/gallery/demo-66d07729bd8a552ee4edeb0c-1724938570126-1.jpeg)

![Screenshot](https://demo-api.davidebalice.dev/api/demo/gallery/demo-66d07729bd8a552ee4edeb0c-1724938575485-1.jpeg)

![Screenshot](https://demo-api.davidebalice.dev/api/demo/gallery/demo-66d07729bd8a552ee4edeb0c-1724938619461-1.jpeg)

## Features

- Preset images for memes, postcard fronts and retro postcards
- Upload your own image from your computer
- Up to 6 text blocks per image
- For each text: content, top/left position, size, color, border width, border color and alignment
- Live preview of the result while editing
- Generate the final image as PNG and download it
- Animated, responsive interface

## Tech stack

- [React 16](https://react.dev/) (Create React App)
- [React Router 6](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/) and [AOS](https://michalsnik.github.io/aos/) for animations
- [html-to-image](https://github.com/bubkoo/html-to-image) for image generation
- [React Icons](https://react-icons.github.io/react-icons/)
- React Context + `useReducer` for state management

## Getting started

### Requirements

- Node.js 18 (see `engines` in `package.json`)
- npm

### Installation

```bash
git clone https://github.com/davidebalice/react-postcard-meme-generator.git
cd react-postcard-meme-generator
npm install
```

### Available scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Start the development server                  |
| `npm run build` | Create a production build in `build/`         |
| `npm test`      | Run the tests                                 |

## Project structure

```
src/
├── components/
│   ├── Home/       # Home page cards and presentation
│   ├── Meme/       # Editor, image selection, presets and image generation
│   ├── global/     # Shared UI and form components
│   └── layout/     # Header, footer and page wrappers
├── config/         # Theme, global styles and animations
├── context/        # Editor state (MemeContext)
├── pages/          # Home and Editor pages
└── routes/         # Application routes
```

## Author

**Davide Balice** – [davidebalice.dev](https://www.davidebalice.dev)
