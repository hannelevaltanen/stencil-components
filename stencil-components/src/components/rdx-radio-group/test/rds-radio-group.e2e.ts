import { newE2EPage } from '@stencil/core/testing';

describe('rds-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rds-radio-group></rds-radio-group>');

    const element = await page.find('rds-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
