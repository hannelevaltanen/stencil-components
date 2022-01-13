import { newE2EPage } from '@stencil/core/testing';

describe('rds-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rds-dialog></rds-dialog>');

    const element = await page.find('rds-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
