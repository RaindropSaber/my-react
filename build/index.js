const babel = require('babel-core');
const path = require('path');
const fs = require('fs');
let res = babel.transformFileSync(path.resolve(__dirname, '../web/components.jsx'), { "presets": ["react"] });
fs.writeFileSync(path.resolve(__dirname, '../web/components.js'), res.code, 'utf-8')