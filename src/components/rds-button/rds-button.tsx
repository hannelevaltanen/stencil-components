import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rds-button',
  styleUrl: 'rds-button.scss',
  scoped: true,
})
export class RdsButton {
  /**
   * What variant to use?
   */
  @Prop() variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "link";
  /**
   * How large should the button be?
   */
  @Prop() size?: "small" | "medium" | "large";
  /**
   * Is the button full width?
   */
  @Prop() fullWidth?: boolean;
  /**
   * Is the button disabled?
   */
  @Prop() disabled?: boolean;

  render() {
    return (
      <button 
        type="button"
        disabled={this.disabled && true}
        class={[
          "rds-button",
          this.size && `rds-button--${this.size}`,
          this.variant && `rds-button--${this.variant}`,
          this.fullWidth && "rds-button--full",
        ].join(" ")}

      >
        <slot />
      </button>
    );
  }
}
