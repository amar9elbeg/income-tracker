import { execCommand } from './utils';

export const runPreCommitScript = () => {
  try {
    execCommand('bunx nx affected -t lint');
    execCommand('bunx nx affected -t test');
    execCommand('bunx nx affected -t build');
  } catch (error) {
    process.exit(1);
  }
};

runPreCommitScript();
