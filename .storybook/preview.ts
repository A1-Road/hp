import type { Preview } from "@storybook/react"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "hsl(36 33% 97%)",
        },
        {
          name: "dark",
          value: "hsl(20 10% 10%)",
        },
      ],
    },
  },
}

export default preview
