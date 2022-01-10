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
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rds-dialog>
    `);
  });
});
