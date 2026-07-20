import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "nyxc-surface",
      values: [{ name: "nyxc-surface", value: "#10031d" }],
    },
  },
};

export default preview;
