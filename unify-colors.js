import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPairs = [
    path.join(__dirname, 'src/components'),
    path.join(__dirname, 'src')
];

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
            
            newContent = newContent.replace(/trangray/g, 'translate');
            newContent = newContent.replace(/transtone/g, 'translate');

            const colorMap = {
                'bg-stone-': 'bg-zinc-',
                'text-stone-': 'text-zinc-',
                'border-stone-': 'border-zinc-',
                'from-stone-': 'from-zinc-',
                'via-stone-': 'via-zinc-',
                'to-stone-': 'to-zinc-',

                'bg-gray-': 'bg-zinc-',
                'text-gray-': 'text-zinc-',
                'border-gray-': 'border-zinc-',
                'from-gray-': 'from-zinc-',
                'via-gray-': 'via-zinc-',
                'to-gray-': 'to-zinc-',

                'text-orange-': 'text-indigo-',
                'bg-orange-': 'bg-indigo-',
                'border-orange-': 'border-indigo-',
                'from-orange-': 'from-indigo-',
                'via-orange-': 'via-indigo-',
                'to-orange-': 'to-indigo-',
                'shadow-orange-': 'shadow-indigo-',

                'text-fuchsia-': 'text-violet-',
                'bg-fuchsia-': 'bg-violet-',
                'border-fuchsia-': 'border-violet-',
                'from-fuchsia-': 'from-violet-',
                'via-fuchsia-': 'via-violet-',
                'to-fuchsia-': 'to-violet-',
                'shadow-fuchsia-': 'shadow-violet-',

                'text-rose-': 'text-cyan-',
                'bg-rose-': 'bg-cyan-',
                'border-rose-': 'border-cyan-',
                'from-rose-': 'from-cyan-',
                'via-rose-': 'via-cyan-',
                'to-rose-': 'to-cyan-',
                'shadow-rose-': 'shadow-cyan-',

                'text-yellow-': 'text-cyan-',
                'bg-yellow-': 'bg-cyan-',
                'border-yellow-': 'border-cyan-',
                'from-yellow-': 'from-cyan-',
                'via-yellow-': 'via-cyan-',
                'to-yellow-': 'to-cyan-',
                'shadow-yellow-': 'shadow-cyan-',
            };

            for (const [oldColor, newColor] of Object.entries(colorMap)) {
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
