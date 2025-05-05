import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    loading: {
      control: "boolean",
    },
  },
  args: {
    onClick: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    disabled: true,
    loading: true,
  },
};

export const PrimarySizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} variant="primary" size="small">
        Primary Small
      </Button>
      <Button {...args} variant="primary" size="medium">
        Primary Medium
      </Button>
      <Button {...args} variant="primary" size="large">
        Primary Large
      </Button>
    </div>
  ),
};

export const SecondarySizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} variant="secondary" size="small">
        Secondary Small
      </Button>
      <Button {...args} variant="secondary" size="medium">
        Secondary Medium
      </Button>
      <Button {...args} variant="secondary" size="large">
        Secondary Large
      </Button>
    </div>
  ),
};
