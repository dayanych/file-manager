import os from 'os';
import { stdout } from 'process';

export const osFileManager = (data) => {
  const eol = os.EOL ?? 'Empty\n';
  const cpus = os.cpus();
  const homedir = os.homedir();
  const username = os.userInfo().username;
  const arch = os.arch();
  switch (data) {
    case '--EOL':
    case '--eol':
      stdout.write(JSON.stringify(eol) + '\n');
      break;
    case '--cpus':
      stdout.write(JSON.stringify(cpus) + '\n');
      break;
    case '--homedir':
      stdout.write(JSON.stringify(homedir) + '\n');
      break;
    case '--username':
      stdout.write(JSON.stringify(username) + '\n');
      break;
    case '--architecture':
      stdout.write(JSON.stringify(arch) + '\n');
      break;
    default:
      stdout.write('Invalid command\n');
      break;
  }
};
