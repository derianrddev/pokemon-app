const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
  export const environments = {
    api_base_url: "${ process.env['API_BASE_URL'] }",
  }
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
