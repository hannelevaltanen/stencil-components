import { html } from 'lit-html';

export default {
  title: 'Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
  },
}

const Template = ({ 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  block = false,
  slot,
}) => {
  return html`
  <rds-button 
    type="${type}"
    variant="${variant}"
    size="${size}"
    ?block="${block}"
    ?disabled=${disabled}
  >
  ${slot}
</rds-button>
`
}

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  slot: 'Primary',
  disabled: false,
  block: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
  slot: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  variant: 'tertiary',
  slot: 'Tertiary',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  variant: 'danger',
  slot: 'Danger',
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  variant: 'success',
  slot: 'Success',
};

export const Link = Template.bind({});
Link.args = {
  ...Primary.args,
  variant: 'link',
  slot: 'Link',
};
