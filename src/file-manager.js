import os from "os";
import process from 'node:process';
import { getUserName } from "./helpers/get-username.js";
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

    stdin.on('data', (data) => {
      try {
        const dataString = data.toString().trim();
  
        if (dataString === '.exit') {
          this.goodbye();
        }
  
        this.printCurrentDirectory();
      } catch {
        stdout.write('Operation failed\n');
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
};
