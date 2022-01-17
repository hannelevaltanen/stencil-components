import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rds-button',
  styleUrl: 'rds-button.scss',
  scoped: true,
})

export class RdsButton {
  /**
   * What type of button is this?
   */
  @Prop() type?: "button" | "submit" | "reset" = "button";

  /**
   * How large should the button be?
   */
  @Prop() size?: "small" | "medium" | "large" = "medium";
  
  /**
   * What variant to use?
   */
  @Prop() variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "link"
    = "primary";

  /**
   * Is the button full width?
   */
  @Prop() block?: boolean = false;

  /**
   * Is the button disabled?
   */
  @Prop() disabled?: boolean = false;

  render() {
    const { type, disabled, size, variant, block } = this;

    return (
      <button 
        type={type}
        disabled={disabled}
        class={[
          "rds-button",
          size && `rds-button--${size}`,
          variant && `rds-button--${variant}`,
          block ? "rds-button--full" : "",
        ].join(" ")}
      >
        <slot />
      </button>
    );
  }
}
