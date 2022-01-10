import { newE2EPage } from '@stencil/core/testing';

describe('rds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rds-button></rds-button>');

    const element = await page.find('rds-button');
    expect(element).toHaveClass('hydrated');
  });
});
