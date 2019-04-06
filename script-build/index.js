const path = require('path');
const fse = require('fs-extra');
const dotenv = require('dotenv');
dotenv.config();

const generateHtaccess = async () => {
  try {
    const buildPath = path.join(__dirname, '../build');
    const htaccessPath = path.join(buildPath, '.htaccess');
    const { PUBLIC_URL } = process.env;
    const htaccessData = `
    RewriteEngine On
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
    RewriteRule ^ - [L]

    # Fallback all other routes to index.html
    RewriteRule ^ ${PUBLIC_URL}index.html [L]
    `;
    await fse.ensureDir(buildPath);
    await fse.outputFile(htaccessPath, htaccessData);
    console.log('success!', buildPath, PUBLIC_URL);
  } catch (err) {
    console.error(err);
  }
};

generateHtaccess();
