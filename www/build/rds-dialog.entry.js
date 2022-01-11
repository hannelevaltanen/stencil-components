import { r as registerInstance, h } from './index-369666d5.js';

const rdsDialogCss = ":host{display:block}.rds-dialog{position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;visibility:hidden;transition:var(--transition-visibility);z-index:10;overflow-y:auto}.rds-dialog__overlay{background-color:var(--color-opacity-dark);height:100%;width:100%;position:fixed}.rds-dialog__content{background-color:var(--color-white);width:100%;height:auto;position:absolute;left:50%;bottom:0;transform:translate(-50%, 100%);border-radius:var(--radius-s);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.rds-dialog__header{padding:var(--spacing-s) var(--spacing-m);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-border)}.rds-dialog__title{margin:0;line-height:var(--line-height-s);font-weight:var(--font-weight-medium);font-size:var(--font-size-m)}.rds-dialog__close{height:24px;width:24px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-s);cursor:pointer;transition:0.1s ease-in-out}.rds-dialog__body{padding:var(--spacing-m);height:auto;color:var(--color-content)}.rds-dialog__footer{padding:var(--spacing-m);display:flex;justify-content:flex-end;align-items:center}.rds-dialog__footer rds-button{margin:0 var(--spacing-xxs)}.rds-dialog__footer rds-button:first-child{margin-right:var(--spacing-xxs)}.rds-dialog__footer rds-button:last-child{margin-left:var(--spacing-xxs)}.rds-dialog.is-open{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.rds-dialog.is-open .rds-dialog__content{transform:translate(-50%, 0)}@media (min-width: 600px){.rds-dialog__content{width:600px;top:0;bottom:auto;transform:translate(-50%, 0px)}.rds-dialog--large .rds-dialog__content{width:80vw}.rds-dialog--small .rds-dialog__content{width:400px}.rds-dialog.is-open .rds-dialog__content{transform:translate(-50%, var(--spacing-xxxl))}}";

let RdsDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * What size?
     */
    this.size = "medium";
    /**
     * Is the dialog open?
     */
    this.closable = true;
    /**
     * Functions
     */
    this.handleCancel = () => {
      this.isOpen = false;
    };
  }
  // Watch for data
  arrayDataWatcher(buttons) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    }
    else {
      this._buttons = buttons;
    }
  }
  // before the compinent loads, we need to convert rhw buttons string to an array
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }
  render() {
    return (h("div", { role: "dialog", id: "dialog1", "aria-labelledby": "dialog1_label", "aria-modal": "true", class: `rds-dialog rds-dialog--${this.size} ${this.isOpen && 'is-open'}` }, h("div", { class: "rds-dialog__overlay", onClick: this.closable && this.handleCancel }), h("div", { class: "rds-dialog__content" }, h("div", { class: "rds-dialog__header" }, h("h2", { tabindex: "-1", id: "dialog1_label", class: "rds-dialog__title" }, this.heading), this.closable && h("span", { class: "rds-dialog__close" }, h("rds-button", { variant: "link", size: "small", onClick: this.handleCancel }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-x" }, h("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), h("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))))), h("div", { class: "rds-dialog__body" }, h("slot", null)), h("div", { class: "rds-dialog__footer" }, h("rds-button", { variant: "link", onClick: this.closable && this.handleCancel }, "Cancel"), h("rds-button", { variant: this.variant }, "Confirm")))));
  }
};
RdsDialog.style = rdsDialogCss;

export { RdsDialog as rds_dialog };
