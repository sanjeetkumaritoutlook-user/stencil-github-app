import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'github-repo-card',
  styleUrl: 'github-repo-card.css',
  shadow: true,
})
export class GithubRepoCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
