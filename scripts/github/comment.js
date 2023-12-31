const REPO = process.env.ACCESS_REPO;
const TOKEN = process.env.ACCESS_TOKEN;
const PR = process.env.PR_NUMBER;
const REPLACE_MARK = '<!-- GHA_UPDATE_COMMENT -->';

const argv = process.argv;

const comment = argv[argv.length - 1];

const wrappedComment = `
  ${REPLACE_MARK}
  ${comment}
`.trim();

async function withGithub(url, json, method) {
  const res = await fetch(url, {
    method: method || (json ? 'POST' : 'GET'),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(TOKEN).toString('base64')}`,
    },
    body: json ? JSON.stringify(json) : undefined,
  });

  return res.json();
}

(async function run() {
  if (PR == null) {
    console.log('未获取到PR，忽略处理')
    return;
  }

  const commentUrl = `https://api.github.com/repos/${REPO}/issues/${PR}/comments`;
  console.log(`commentUrl`, commentUrl);
  const comments = await withGithub(commentUrl);
  console.log(`comments data`, comments);

  // Find my comment
  const updateComment = comments.find(({ body }) => body.includes(REPLACE_MARK));
  console.log('Origin comment:', updateComment);

  // Update
  let res;
  if (!updateComment) {
    res = await withGithub(commentUrl, {
      body: wrappedComment,
    });
  } else {
    res = await withGithub(
      `https://api.github.com/repos/${REPO}/issues/comments/${updateComment.id}`,
      {
        body: wrappedComment,
      },
      'PATCH',
    );
  }

  console.log(res);
})();
