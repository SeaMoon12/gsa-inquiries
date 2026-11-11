// scripts/build-config.js
// Generates config.js dynamically on the CI/CD runner during GitHub Pages deployment
// Secrets are read from environment variables injected by GitHub Actions Secrets.

const fs = require('fs');
const path = require('path');

const geminiApiKey = process.env.GEMINI_API_KEY || '';

let firebaseConfig = null;
if (process.env.FIREBASE_CONFIG) {
    try {
        firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
    } catch (err) {
        console.warn('Could not parse FIREBASE_CONFIG JSON secret, trying individual variables:', err.message);
    }
}

if (!firebaseConfig) {
    firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY || '',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
        projectId: process.env.FIREBASE_PROJECT_ID || '',
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
        appId: process.env.FIREBASE_APP_ID || '',
        measurementId: process.env.FIREBASE_MEASUREMENT_ID || ''
    };
}

const configOutput = `// Auto-generated configuration for GitHub Pages deployment
// Injected securely by GitHub Actions build runner
window.APP_CONFIG = {
    GEMINI_API_KEY: ${JSON.stringify(geminiApiKey)},
    firebaseConfig: ${JSON.stringify(firebaseConfig, null, 2)}
};
`;

const targetPath = path.join(__dirname, '..', 'config.js');
fs.writeFileSync(targetPath, configOutput, 'utf8');
console.log('Successfully generated config.js for deployment.');
