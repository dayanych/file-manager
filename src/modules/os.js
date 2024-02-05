import os from 'os';
import { stdout } from 'process';

export const osFileManager = (data) => {
  const eol = os.EOL ?? 'Empty\n';
  const cpus = os.cpus();
  const homedir = os.homedir();
  const username = os.userInfo().username;
  const arch = os.arch();

  const cpuCores = cpus.map((cpu) => ({
      model: cpu.model,
      speed: `${cpu.speed / 1000} GHz`,
  }));

  switch (data) {
    case '--EOL':
    case '--eol':
      stdout.write(JSON.stringify(eol) + '\n');
      break;
    case '--cpus':
      console.log('Amount of CPUS: ' + cpus.length);
      console.dir(cpuCores);
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
