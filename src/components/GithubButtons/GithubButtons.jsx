import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/jaskirat23/simplefolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork jaskirat23/simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/jaskirat23/simplefolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star jaskirat23/simplefolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
