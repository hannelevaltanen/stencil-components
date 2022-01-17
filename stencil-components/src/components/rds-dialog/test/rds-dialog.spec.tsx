import { newSpecPage } from '@stencil/core/testing';
import { RdsDialog } from '../rds-dialog';

describe('rds-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RdsDialog],
      html: `<rds-dialog></rds-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <rds-dialog>
        <div aria-labelledby="dialog1_label" aria-modal="true" class="rds-dialog rds-dialog--medium undefined" id="dialog1" role="dialog">
          <div class="rds-dialog__overlay"></div>
          <div class="rds-dialog__content">
            <div class="rds-dialog__header">
              <h2 class="rds-dialog__title" id="dialog1_label" tabindex="-1"></h2>
              <span class="rds-dialog__close">
                <rds-button size="small" variant="link">
                  <svg class="feather feather-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                </rds-button>
              </span>
            </div>
            <div class="rds-dialog__body">
              <slot></slot>
            </div>
            <div class="rds-dialog__footer">
              <rds-button variant="link">
                Cancel
              </rds-button>
              <rds-button>
                Confirm
              </rds-button>
            </div>
          </div>
        </div>
      </rds-dialog>
    `);
  });
});
