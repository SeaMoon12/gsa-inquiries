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

// Automatically inject absolute URL into Open Graph tags for WhatsApp / Social Media Link Previews
let baseUrl = process.env.PUBLIC_URL || '';
if (!baseUrl && process.env.GITHUB_REPOSITORY) {
    const parts = process.env.GITHUB_REPOSITORY.split('/');
    if (parts.length === 2) {
        baseUrl = `https://${parts[0]}.github.io/${parts[1]}`;
    }
}

if (baseUrl) {
    const indexPath = path.join(__dirname, '..', 'index.html');
    if (fs.existsSync(indexPath)) {
        let indexHtml = fs.readFileSync(indexPath, 'utf8');
        // Replace relative image path with absolute URL so WhatsApp crawler unfurls the preview image
        indexHtml = indexHtml
            .replace(/content="assets\/preview-banner\.jpg"/g, `content="${baseUrl}/assets/preview-banner.jpg"`)
            .replace(/href="assets\/preview-banner\.jpg"/g, `href="${baseUrl}/assets/preview-banner.jpg"`);
        
        // Add og:url if not present
        if (!indexHtml.includes('<meta property="og:url"')) {
            indexHtml = indexHtml.replace(
                '<meta property="og:type" content="website">',
                `<meta property="og:type" content="website">\n    <meta property="og:url" content="${baseUrl}/">`
            );
        }
        
        fs.writeFileSync(indexPath, indexHtml, 'utf8');
        console.log(`Updated index.html Open Graph tags with absolute URL: ${baseUrl}`);
    }
}
