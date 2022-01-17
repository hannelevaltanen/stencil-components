import { newE2EPage } from '@stencil/core/testing';

describe('rds-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rds-radio></rds-radio>');

    const element = await page.find('rds-radio');
    expect(element).toHaveClass('hydrated');
  });
});
