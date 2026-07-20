import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Footer
      logo={<strong style={{ color: "#fff", fontSize: 20 }}>NYXC</strong>}
      linkColumns={[
        {
          title: "Connect",
          links: [
            { label: "LinkedIn", href: "https://www.linkedin.com/company/nyxcc/" },
            { label: "Substack", href: "https://nyxc.substack.com/" },
          ],
        },
        {
          title: "Support",
          links: [{ label: "support@nyxc.net", href: "mailto:support@nyxc.net", external: false }],
        },
      ]}
      legalText="© 2026 nyxc Community Capital 501(c)(3)"
    />
  ),
};
