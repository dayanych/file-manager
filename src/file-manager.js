import os from 'os';
import process from 'node:process';
import {
  getUserName,
  up,
  ls,
  cd,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  osFileManager,
  hash,
  compress,
  decompress,
} from './modules/index.js';
const {stdin, stdout} = process;

export class FileManager {
  constructor() {
    this.name = null;
    this.path = null;
  };

  start() {
    this.name = getUserName(process.argv);
    this.path = os.homedir();

    stdout.write(`Welcome to the File Manager, ${this.name}!\n`);

    stdin.on('data', async (data) => {
      try {
        const dataString = data.toString().trim();
        await this.switchFunction(dataString);
      } catch(error) {
        stdout.write(`Operation failed: ${error.message}\n`);
      }
    });

    process.on('SIGINT', () => {
      this.goodbye();
    });
  };

  goodbye() {
    stdout.write(`Thank you for using File Manager, ${this.name}, goodbye!`);
    process.exit(0);
  };

  printCurrentDirectory() {
    stdout.write(`You are currently in ${this.path}\n`);
  };

  async switchFunction(data) {
    const dataArray = data.split(' ');
    const command = dataArray[0];
    const firstArgument = dataArray[1];
    const secondArgument = dataArray[2];

    switch (command) {
      case 'up':
        this.path = up(this.path);
        break;
      case 'ls':
        await ls(this.path);
        break;
      case 'cd':
        this.path = await cd(this.path, firstArgument);
        break;
      case 'cat':
        await cat(this.path, firstArgument);
        break;
      case 'add':
        await add(this.path, firstArgument);
        break;
      case 'rn':
        await rn(this.path, firstArgument, secondArgument);
        break;
      case 'cp':
        await cp(this.path, firstArgument, secondArgument);
        break;
      case 'mv':
        await mv(this.path, firstArgument, secondArgument);
        break;
      case 'rm':
        await rm(this.path, firstArgument);
        break;
      case 'os':
        osFileManager(firstArgument);
        break;
      case 'hash':
        await hash(this.path, firstArgument);
        break;
      case 'compress':
        await compress(this.path, firstArgument, secondArgument);
        break;
      case 'decompress':
        await decompress(this.path, firstArgument, secondArgument);
        break;
      case '.exit':
        this.goodbye();
        break;
      default:
        stdout.write('Invalid command\n');
    }

    this.printCurrentDirectory();
  };
};
