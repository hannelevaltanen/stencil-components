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
        <button class="rds-button rds-button--medium rds-button--primary" type="button"></button>
      </rds-button>
    `);
  });
});
