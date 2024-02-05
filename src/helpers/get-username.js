export const getUserName = (args) => {
  const argsArr = args.slice(2);
  const name = argsArr.find((arg) => arg.startsWith('--'))?.split('=')[1];

  return name ?? 'My Friend';
};
