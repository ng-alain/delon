const gitRawCommits = require('git-raw-commits');
const conventionalCommitsParser = require('conventional-commits-parser');
const through = require('through2');

/**
 * `npm run changelog 7.0.0-rc.0`
 */
const from = process.argv[2];
const to = process.argv[3] || 'HEAD';

const commits = [];
let toSha = null;

return new Promise((resolve) => {
  gitRawCommits({
    from,
    to,
    format: '%B%n-hash-%n%H%n-gitTags-%n%D%n-committerDate-%n%ci%n-authorName-%n%aN%n',
  }).on('error', err => {
    logger.fatal('An error happened: ' + err.message);
    process.exit(1);
  })
  .pipe(through((chunk, enc, callback) => {
    // Replace github URLs with `@XYZ#123`
    const commit = chunk.toString('utf-8').replace(/https?:\/\/github.com\/(.*?)\/issues\/(\d+)/g, '@$1#$2');
    console.log(commit);
    callback(undefined, Buffer.from(commit));
  }))
  .pipe(conventionalCommitsParser({
    headerPattern: /^(\w*)(?:\(([^)]*)\))?: (.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
    noteKeywords: ['BREAKING CHANGE'],
    revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
    revertCorrespondence: [`header`, `hash`],
  }))
  .pipe(through.obj((chunk, _, cb) => {
    try {
      const maybeTag = chunk.gitTags && (chunk.gitTags).match(/tag: (.*)/);
      const tags = maybeTag && maybeTag[1].split(/,/g);
      chunk['tags'] = tags;

      if (tags && tags.find(x => x == args.to)) {
        toSha = chunk.hash;
      }

      commits.push(chunk);
      cb();
    } catch (err) {
      cb(err);
    }
  }))
  .on('finish', resolve);
}).then(() => {
  console.log(toSha);
  console.log(commits);
});
