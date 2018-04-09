import fs from 'fs';
import path from 'path';

const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html')).toString();

export default function renderFullPage({ html, state }) {
  const ssrHtml = `
  <div id="root">
  ${html}
  </div>
  <script>
  window.__INITIAL_STATE__ = ${JSON.stringify(state)};
  </script>
  `;
  const rtn = indexHtml.replace('<div id="root"></div>', ssrHtml);
  return rtn;
}
