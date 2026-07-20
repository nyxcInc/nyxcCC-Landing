import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Primitives/Container",
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
      Constrained, centered content.
    </Container>
  ),
};
