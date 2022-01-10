import { newSpecPage } from '@stencil/core/testing';
import { RdsButton } from '../rds-button';

describe('rds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RdsButton],
      html: `<rds-button></rds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rds-button>
    `);
  });
});
