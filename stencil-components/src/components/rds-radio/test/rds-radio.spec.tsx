import { newSpecPage } from '@stencil/core/testing';
import { RdsRadio } from '../rds-radio';

describe('rds-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RdsRadio],
      html: `<rds-radio></rds-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <rds-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rds-radio>
    `);
  });
});
