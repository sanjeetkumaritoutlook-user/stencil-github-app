import { newE2EPage } from '@stencil/core/testing';

describe('github-repo-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<github-repo-card></github-repo-card>');

    const element = await page.find('github-repo-card');
    expect(element).toHaveClass('hydrated');
  });
});
