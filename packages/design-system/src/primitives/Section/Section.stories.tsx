import type { Meta, StoryObj } from "@storybook/react-vite";
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  title: "Primitives/Section",
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  render: () => (
    <Section style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}>
      A full-width section with vertical spacing.
    </Section>
  ),
};
