import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 320, color: "#fff" }}>
      <p style={{ margin: 0 }}>Card content goes here.</p>
    </Card>
  ),
};

export const Radii: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      {(["sm", "md", "xl"] as const).map((radius) => (
        <Card key={radius} radius={radius} style={{ width: 120, height: 80, color: "#fff" }}>
          {radius}
        </Card>
      ))}
    </div>
  ),
};
