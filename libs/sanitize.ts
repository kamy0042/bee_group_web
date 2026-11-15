import sanitizeHtml from 'sanitize-html';

const COLOR = /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\))$/i;

// microCMS のリッチエディタが出力しうるタグ・属性・スタイルだけを許可する
// （script / iframe / イベントハンドラ / javascript: URL などはすべて除去される）
const options: sanitizeHtml.IOptions = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr', 'blockquote',
    'strong', 'em', 'u', 's', 'sub', 'sup', 'span', 'a', 'code', 'pre',
    'ul', 'ol', 'li', 'figure', 'figcaption', 'img',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
  ],
  allowedAttributes: {
    '*': ['class', 'style'],
    h1: ['id'],
    h2: ['id'],
    h3: ['id'],
    h4: ['id'],
    h5: ['id'],
    h6: ['id'],
    a: ['href', 'target', 'rel'],
    img: ['src', 'alt', 'width', 'height'],
    th: ['colspan', 'rowspan'],
    td: ['colspan', 'rowspan'],
  },
  allowedSchemes: ['https', 'http', 'mailto', 'tel'],
  allowedStyles: {
    '*': {
      'text-align': [/^(left|right|center|justify|start|end)$/],
      color: [COLOR],
      'background-color': [COLOR],
    },
  },
};

// eslint-disable-next-line import/prefer-default-export
export const sanitizeRichText = (html: string) => sanitizeHtml(html, options);
