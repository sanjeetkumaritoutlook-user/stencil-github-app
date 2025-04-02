import { Component,  Prop, State, h } from '@stencil/core';

@Component({
  tag: 'github-repo-card',
  styleUrl: 'github-repo-card.css',
  shadow: true,
})
export class GithubRepoCard {
  @Prop() owner: string;
  @Prop() repo: string;

  @State() stars: number;
  @State() forks: number;
  @State() openIssues: number;
  @State() error: string;

  async fetchRepoData() {
    try {
      const response = await fetch(`https://api.github.com/repos/${this.owner}/${this.repo}`);
      if (!response.ok) throw new Error('Repo not found');
      const data = await response.json();
      this.stars = data.stargazers_count;
      this.forks = data.forks_count;
      this.openIssues = data.open_issues_count;
    } catch (error) {
      this.error = error.message;
    }
  }

  componentWillLoad() {
    this.fetchRepoData();
  }
  render() {
    return (
      <div class="card">
      {this.error ? (
        <p class="error">{this.error}</p>
      ) : (
        <>
          <h3>{this.owner}/{this.repo}</h3>
          <p>⭐ Stars: {this.stars}</p>
          <p>🔀 Forks: {this.forks}</p>
          <p>❗ Open Issues: {this.openIssues}</p>
        </>
      )}
    </div>
    );
  }
}
