const fs = require('fs');
const path = require('path');

const src = path.resolve(process.cwd(), '..', '..', 'Downloads', 'viper player', 'assets', 'icons', 'icon.ico');
const dest = path.resolve(process.cwd(), 'public', 'favicon.ico');

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied icon.ico to public/favicon.ico');
} catch (err) {
  console.error('Error copying file:', err.message);
  process.exit(1);
}
