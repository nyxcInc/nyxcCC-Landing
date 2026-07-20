import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Primitives/Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: () => <Link href="https://nyxc.net">nyxc.net</Link>,
};

export const External: Story = {
  render: () => <Link href="https://www.linkedin.com/company/nyxcc/">LinkedIn</Link>,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Link href="#" size="sm">
        Small
      </Link>
      <Link href="#" size="md">
        Medium
      </Link>
    </div>
  ),
};
