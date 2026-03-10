import './global.css';
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // This prevents the "Save as new story" prompt in the Controls panel
      disableSaveFromUI: true,
    },
  },
};

export default preview;
