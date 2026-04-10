FROM jenkins/jenkins:lts

USER root

# Install Node.js & npm
RUN apt-get update && \
    apt-get install -y nodejs npm

# Install Playwright + dependencies
RUN npm install -g playwright && \
    npx playwright install --with-deps

USER jenkins