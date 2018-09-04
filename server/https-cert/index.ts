import { readFileSync } from 'fs';
import { resolve } from 'path';

const privKey = resolve(__dirname, './privkey.pem');
const fullChain = resolve(__dirname, './fullchain.pem');

export const key = readFileSync(privKey);
export const cert = readFileSync(fullChain);
export default { key, cert };
