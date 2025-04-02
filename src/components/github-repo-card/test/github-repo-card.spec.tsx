import { newSpecPage } from '@stencil/core/testing';
import { GithubRepoCard } from '../github-repo-card';

describe('github-repo-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GithubRepoCard],
      html: `<github-repo-card></github-repo-card>`,
    });
    expect(page.root).toEqualHtml(`
      <github-repo-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </github-repo-card>
    `);
  });
});
