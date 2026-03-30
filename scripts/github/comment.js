const REPO = process.env.ACCESS_REPO;
const TOKEN = process.env.ACCESS_TOKEN;
const PR = process.env.PR_NUMBER;

const API_BASE = 'https://api.github.com';
const REPLACE_MARK = '<!-- GHA_UPDATE_COMMENT -->';
const comment = process.argv.at(-1);
const wrappedComment = `${REPLACE_MARK}\n${comment}`;

async function requestGithub(url, { method = 'GET', body } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};

  if (!res.ok) {
    const message = data.message || 'Unknown GitHub API error';
    throw new Error(`GitHub API ${res.status} ${res.statusText}: ${message}`);
  }

  return data;
}

async function run() {
  const commentUrl = `${API_BASE}/repos/${REPO}/issues/${PR}/comments`;
  console.log('Fetch comments:', commentUrl);

  const comments = await requestGithub(commentUrl);
  const existing = comments.find(({ body }) => typeof body === 'string' && body.includes(REPLACE_MARK));

  const isCreate = !existing;
  const targetUrl = isCreate ? commentUrl : `${API_BASE}/repos/${REPO}/issues/comments/${existing.id}`;
  const method = isCreate ? 'POST' : 'PATCH';

  console.log(`${isCreate ? 'Create' : 'Update'} comment on PR #${PR}`);
  const result = await requestGithub(targetUrl, {
    method,
    body: { body: wrappedComment },
  });

  console.log('Comment completed:', {
    id: result.id,
    html_url: result.html_url,
  });
}

run().catch(error => {
  console.error('Comment script failed:', error.message);
  process.exit(1);
});
