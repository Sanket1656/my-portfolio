import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPairs = [
  'd:/My_Portfolio/src/components',
  'd:/My_Portfolio/src'
];

const colorMap = {
  'slate-950': 'neutral-950',
  'slate-900': 'neutral-900',
  'slate-800': 'neutral-800',
  'slate-700': 'neutral-700',
  'slate-400': 'neutral-400',
  'slate-300': 'neutral-300',
  'slate-50': 'neutral-50',
  'emerald-600': 'fuchsia-600',
  'emerald-500': 'fuchsia-500',
  'emerald-400': 'fuchsia-400',
  'cyan-600': 'rose-600',
  'cyan-500': 'rose-500',
  'cyan-400': 'rose-400',
  'blue-600': 'violet-600',
  'blue-500': 'violet-500',
  'blue-400': 'violet-400',
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'components' && file !== 'assets') {
        processDir(fullPath);
      }
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;

      for (const [oldColor, newColor] of Object.entries(colorMap)) {
        // use regex to match whole words for the color classes
        const regex = new RegExp(oldColor, 'g');
        newContent = newContent.replace(regex, newColor);
      }

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

dirPairs.forEach(dir => processDir(dir));
