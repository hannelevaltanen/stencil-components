import { newSpecPage } from '@stencil/core/testing';
import { RdsRadioGroup } from '../rds-radio-group';

describe('rds-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RdsRadioGroup],
      html: `<rds-radio-group></rds-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <rds-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rds-radio-group>
    `);
  });
});
