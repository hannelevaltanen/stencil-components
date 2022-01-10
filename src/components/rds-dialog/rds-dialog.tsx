import { Component, h, Prop, State, Event, EventEmitter, } from '@stencil/core';

@Component({
  tag: 'rds-dialog',
  styleUrl: 'rds-dialog.scss',
  shadow: true,
})
export class RdsDialog {
  /**
   * Props
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  /**
   * What is the heading for this dialog?
   */
  @Prop() heading: string;
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
   * What size?
   */
  @Prop() size?:
  | "large"
  | "medium"
  | "small" 
  = "medium";
  /**
   * Is the dialog open?
   */
  @Prop() closable: boolean = true;
  /**
   * Is the dialog open?
   */
  @Prop() isOpen: boolean;
  /**
   * What buttons for the footer?
   */
  @Prop() buttons: string;
  
  /**
   * Stae for our buttons array
   */
  @State() _buttons: Array<any>

  // Watch for data
  arrayDataWatcher(buttons) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    } else {
      this._buttons = buttons;
    }
  }

  // Events
  @Event() private action: EventEmitter;

  // before the compinent loads, we need to convert rhw buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }

  /**
   * Functions
   */
  private handleCancel = () => {
    this.isOpen = false;
  };

  private handleAction = () => {
    this.action.emit();
  }

  render() {
    return (
      <div 
        role="dialog"
        id="dialog1"
        aria-labelledby="dialog1_label"
        aria-modal="true"
        class={`rds-dialog rds-dialog--${this.size} ${this.isOpen && 'is-open'}`}
      >
        <div class="rds-dialog__overlay" onClick={this.closable && this.handleCancel} />
        <div class="rds-dialog__content">
          <div class="rds-dialog__header">
            <h2 tabindex="-1" id="dialog1_label" class="rds-dialog__title">{this.heading}</h2>
            {this.closable && <span class="rds-dialog__close"><rds-button variant="link" size="small" onClick={this.handleCancel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </rds-button></span>}
          </div>
          <div class="rds-dialog__body">
            <slot />
          </div>
          <div class="rds-dialog__footer">
            <rds-button variant="link" onClick={this.closable && this.handleCancel}>Cancel</rds-button>
            <rds-button variant={this.variant}>Confirm</rds-button>

            {/* {this._buttons.map((button, i) => (
              <rds-button 
                onClick={i === 0 ? this.handleCancel: this.handleAction}
                variant={button.variant}
              >
                {button.text}
              </rds-button>
            ))} */}
          </div>
        </div>
      </div>
    );
  }

}
