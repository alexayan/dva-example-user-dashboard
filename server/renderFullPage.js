import fs from 'fs';
import path from 'path';
import { XmlEntities as Entities } from 'html-entities';

const entities = new Entities();
const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html')).toString();

export default function renderFullPage({ html, state }) {
  const ssrHtml = `
  <div id="root">
  ${html}
  </div>
  <div id="data" data-state="${entities.encode(JSON.stringify(state))}"></div>
  `;
  const rtn = indexHtml.replace('<div id="root"></div>', ssrHtml);
  return rtn;
}
