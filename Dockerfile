FROM jenkins/jenkins:lts

USER root

# Install Node.js
RUN apt-get update && \
    apt-get install -y nodejs npm

# Install Playwright browsers globally
RUN npm install -g playwright && \
    npx playwright install chromium

# Fix permissions for Jenkins user
RUN mkdir -p /var/jenkins_home/.cache/ms-playwright && \
    chown -R jenkins:jenkins /var/jenkins_home/.cache

USER jenkins