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
  @State() loading: boolean = true;
  private intervalId: number; // Store the interval ID to clear it later


  async fetchRepoData() {
    const cacheKey = `${this.owner}/${this.repo}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      // ✅ Use cached data to avoid unnecessary API calls
      const { stars, forks, openIssues } = JSON.parse(cachedData);
      this.stars = stars;
      this.forks = forks;
      this.openIssues = openIssues;
      this.loading = false; // ✅ Stop loading since we have data
    } else {
      try {
        const response = await fetch(`https://api.github.com/repos/${this.owner}/${this.repo}`);
        if (!response.ok) throw new Error('Repository not found');

        const data = await response.json();
        this.stars = data.stargazers_count;
        this.forks = data.forks_count;
        this.openIssues = data.open_issues_count;

        // ✅ Store data in localStorage for caching
        localStorage.setItem(cacheKey, JSON.stringify({
          stars: this.stars,
          forks: this.forks,
          openIssues: this.openIssues
        }));

      } catch (error) {
        this.error = "⚠️ Failed to load repository data.";
      } finally {
        this.loading = false; // ✅ Ensure loading state is updated
      }
    }
  }

  componentDidLoad() {
    // Set up an interval to refresh data every 10 minutes (600,000 milliseconds)
    this.intervalId = window.setInterval(() => {
      this.fetchRepoData(); // Trigger data refresh
    }, 600000); // 10 minutes
  }

  disconnectedCallback() {
    // Clear the interval when the component is removed to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  render() {
    return (
      <div class="card">
      {this.loading ? (
        // ✅ Show loading state before data is available
        <p class="loading">⏳ Loading...</p>
      ) : this.error ? (
        // ✅ Show error message if API fails
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
