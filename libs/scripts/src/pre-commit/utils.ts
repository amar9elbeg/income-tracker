import { execSync } from 'child_process';

export const execCommand = (command: string) => {
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`success`);
  } catch (err) {
    console.log(`failed`);
    console.log(err);
    throw new Error(`${command} failed`);
  }
};
