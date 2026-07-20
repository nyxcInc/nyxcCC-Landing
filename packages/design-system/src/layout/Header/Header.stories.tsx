import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
import { Button } from "../../primitives/Button";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Header
      logo={<strong style={{ color: "#fff", fontSize: 20 }}>NYXC</strong>}
      navItems={[
        { label: "About", onClick: () => {} },
        { label: "Supporters", onClick: () => {} },
        { label: "Offering", onClick: () => {} },
        { label: "Impact", onClick: () => {} },
      ]}
      cta={<Button size="sm">Get Started</Button>}
    />
  ),
};
