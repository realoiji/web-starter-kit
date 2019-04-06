const { PUBLIC_URL } = process.env;

export const isProtocolFile = () => (PUBLIC_URL && (PUBLIC_URL.substring(0, 4) === 'file'))

export const getFile = (pathFile) => {
  const baseUrl = PUBLIC_URL ? '' : '/';
  return `${baseUrl}${pathFile}`;
}

export default {};