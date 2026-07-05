import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = "C:\\Users\\vijay\\.gemini\\antigravity\\brain\\16b247e2-c599-4517-9a98-0a50d69e4050\\business_card_mockup_1783258150871.png";
const dest = path.join(__dirname, 'src', 'assets', 'Cards.jpeg');

try {
    fs.copyFileSync(src, dest);
    console.log('SUCCESS: Image copied to ' + dest);
} catch (err) {
    console.error('ERROR copying file:', err.message);
}
