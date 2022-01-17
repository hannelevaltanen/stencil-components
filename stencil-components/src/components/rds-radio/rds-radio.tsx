import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rds-radio',
  styleUrl: 'rds-radio.scss',
  scoped: true,
})

export class RdsRadio {
  /**
   * What is the heading for this dialog?
   */
  @Prop() value: string;

  /**
   * What is the heading for this dialog?
   */
  @Prop() label: string;

  render() {
    const { value, label } = this;

    return (
      <div class="rds-radio">
        <input value={value} type="radio" class="rds-radio__input" name="1" />
        <label htmlfor={value} class="rds-radio__label">{label}</label>
      </div>
  );
  }

}
