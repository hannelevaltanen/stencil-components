import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rds-radio-group',
  styleUrl: 'rds-radio-group.scss',
  shadow: true,
})
export class RdsRadioGroup {
  /**
   * What is the heading for this dialog?
   */
  @Prop() label: string;

  render() {
    const { label } = this;
    return (
      <Host>
        <fieldset class="rds-radio-group">
          <legend class="rds-radio-group__legend">
            {label}
          </legend>
          <slot></slot>
        </fieldset>
      </Host>
    );
  }

}
