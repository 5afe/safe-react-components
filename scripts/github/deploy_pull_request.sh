#!/bin/bash

BUILD_DIR='storybook-static'

function deploy_pull_request {
  REVIEW_ENVIRONMENT_DOMAIN='review.gnosisdev.com'

  # Pull request name with "pr" prefix
  PULL_REQUEST_NAME="pr$PR_NUMBER"

  # Only alphanumeric characters. Example safe-react-components -> safereactcomponents
  REVIEW_FEATURE_FOLDER="$REPO_NAME_ALPHANUMERIC/$PULL_REQUEST_NAME"

  aws s3 sync ${BUILD_DIR} s3://${REVIEW_BUCKET_NAME}/${REVIEW_FEATURE_FOLDER} --delete
}

function publish_pull_request_urls_in_github {
  REVIEW_FEATURE_URL="https://$PULL_REQUEST_NAME--$REPO_NAME_ALPHANUMERIC.$REVIEW_ENVIRONMENT_DOMAIN"

  # Using the Issues api instead of the PR api
  # Done so because every PR is an issue, and the issues api allows to post general comments,
  # while the PR api requires that comments are made to specific files and specific commits
  GITHUB_PR_COMMENTS=https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments
  curl -H "Authorization: token ${GITHUB_API_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"Travis automatic deployment:\r\n '${REVIEW_FEATURE_URL}' \r\n"}'
}

# Only:
# - Pull requests
# - Security env variables are available. PR from forks don't have them.
if [ -n "$AWS_ACCESS_KEY_ID" ]
then
  deploy_pull_request
  # publish_pull_request_urls_in_github
fi
