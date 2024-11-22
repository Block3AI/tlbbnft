const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const projectName = 'tlbb-nft-project';

// Utility to create directories recursively
const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    }
};

// Utility to create files with content
const createFile = (filePath, content = '') => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
        console.log(`Created file: ${filePath}`);
    }
};

// Setup the folder structure
const setupStructure = () => {
    console.log('Setting up the TLBB NFT project...');

    // Define the folder structure and files
    const structure = {
        '.github/workflows': {
            'deploy.yml': `name: Deploy\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v2\n      - name: Install dependencies\n        run: npm install\n      - name: Deploy to Solana\n        run: echo "Deploying..."`,
        },
        'app': {
            'components': {},
            'pages': {
                'index.js': `export default function Home() {\n  return <div>Welcome to TLBB NFT Project</div>;\n}`,
            },
            'public': {},
            'styles': {},
            'utils': {},
            'package.json': `{\n  "name": "tlbb-app",\n  "version": "1.0.0",\n  "dependencies": {}\n}`,
        },
        'assets': {
            'metadata': {},
            'images': {},
            'README.md': '# NFT Assets\n\nMetadata and images for TLBB NFTs.',
        },
        'programs/tlbb_program/src': {
            'lib.rs': `use anchor_lang::prelude::*;\n\n#[program]\npub mod tlbb_program {\n    use super::*;\n\n    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {\n        Ok(())\n    }\n}\n\n#[derive(Accounts)]\npub struct Initialize {}`,
        },
        'programs/tlbb_program': {
            'Cargo.toml': `[package]\nname = "tlbb_program"\nversion = "0.1.0"\nedition = "2021"`,
        },
        'scripts': {
            'deploy.ts': `console.log("Deploy script placeholder");`,
            'mint.ts': `console.log("Mint script placeholder");`,
            'update_metadata.ts': `console.log("Update metadata script placeholder");`,
            'README.md': '# Scripts\n\nDeployment and minting scripts.',
        },
        'tests': {
            'nft.test.ts': `console.log("Test script placeholder");`,
            'README.md': '# Tests\n\nTest scripts for the project.',
        },
        '.env': 'PRIVATE_KEY=your-key\nCLUSTER=devnet',
        '.gitignore': 'node_modules/\n.env\nprograms/tlbb_program/target/',
        'README.md': `# TLBB NFT Project\n\nBoilerplate for the TLBB NFT project.\n\n## Setup\n\n1. Install dependencies:\n   \`npm install\`\n2. Build and deploy:\n   \`anchor build && anchor deploy\``,
        'package.json': `{\n  "name": "tlbb-nft-project",\n  "version": "1.0.0",\n  "scripts": {\n    "start": "npm run dev",\n    "deploy": "node scripts/deploy.ts"\n  }\n}`,
        'tsconfig.json': `{\n  "compilerOptions": {\n    "target": "ES6",\n    "module": "CommonJS",\n    "strict": true\n  }\n}`,
    };

    const createStructure = (basePath, structure) => {
        Object.entries(structure).forEach(([name, content]) => {
            const fullPath = path.join(basePath, name);
            if (typeof content === 'string') {
                createFile(fullPath, content);
            } else {
                createDirectory(fullPath);
                createStructure(fullPath, content);
            }
        });
    };

    // Set up the project structure
    const projectPath = path.join(process.cwd(), projectName);
    createDirectory(projectPath);
    createStructure(projectPath, structure);

    console.log('Project setup complete!');
};

// Launch VS Code with the project
const openInVSCode = () => {
    exec(`code ${projectName}`, (error) => {
        if (error) {
            console.error('Error opening VS Code:', error.message);
        } else {
            console.log('Opened project in VS Code.');
        }
    });
};

// Run the setup
setupStructure();
openInVSCode();