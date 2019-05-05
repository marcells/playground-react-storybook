import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info';
import '../src/App.css';
import '../src/index.css';

// // ***********************
// // Viewports überschreiben
// // ***********************
// const newViewports = {
//     kindleFire2: {
//       name: 'Kindle Fire 2',
//       styles: {
//         width: '600px',
//         height: '963px',
//       },
//     },
//     kindleFireHD: {
//       name: 'Kindle Fire HD',
//       styles: {
//         width: '533px',
//         height: '801px',
//       },
//     },
//   };

// addParameters({
//     viewport: { viewports: newViewports }
// });

addDecorator(withInfo);

addParameters({
    options: {
      isFullscreen: false,
      showAddonsPanel: true,
      showSearchBox: false,
      panelPosition: 'right',
      sortStoriesByKind: false,
      hierarchySeparator: /\>/,
      hierarchyRootSeparator: /\|/,
      enableShortcuts: true,
      theme: create({
        base: 'light',
        brandTitle: 'My awesome App',
        brandUrl: 'https://github.com/marcells/react-fontawesome-storybook',
        gridCellSize: 12,
      }),
    },
  });

const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);