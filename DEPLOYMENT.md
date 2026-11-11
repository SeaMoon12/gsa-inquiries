# GitHub Pages Deployment & Secret Management

This repository is configured to deploy to **GitHub Pages** using GitHub Actions, ensuring sensitive credentials (API keys) are **never pushed to GitHub or committed to version control**.

---

## 🔒 How Secrets Work on GitHub Pages

Static sites hosted on GitHub Pages run in the user's browser. There are two recommended approaches depending on the type of key:

### 1. Firebase Credentials (Public Client Config)
Firebase web credentials (`apiKey`, `projectId`, etc.) identify your Firebase project to Google servers and are secured by Firestore Security Rules.
* Set them as **GitHub Repository Secrets**.
* The GitHub Actions deploy workflow automatically creates `config.js` on the CI/CD runner during deployment.
* Your git repository remains 100% free of hardcoded project IDs.

### 2. Gemini API Key (Private AI Studio Key)
Because GitHub Pages serves static files publicly, **bundling a private Gemini API key into `config.js` would expose it to anyone viewing your site's source**. By default, `scripts/build-config.js` **blocks** `GEMINI_API_KEY` from being written into the deployed `config.js` bundle.

#### Recommended Approach: Admin Browser `sessionStorage` (Default & Safest)
* **Regular attendees** only submit and view questions—they **never** need the Gemini API key.
* **Only the Admin** triggers AI question grouping.
* Simply sign in as Admin on your GitHub Pages site, open **Gemini API Key Setup**, and paste your key.
* It is stored **only in your browser's `sessionStorage`** for your active Admin session and is automatically wiped when you click **Logout** or close the tab.
* **Result:** Zero API key exposure to attendees, zero API key in git, and zero API key in the public GitHub Pages bundle.

---

## 🛡️ Firestore Security Rules (`firestore.rules`)

Client-side validation is backed by strict server-side rules in [`firestore.rules`](file:///c:/Users/user/Documents/Coding/Personal/gsa-question-collector/firestore.rules):
1. Open the [Firebase Console](https://console.firebase.google.com/) $\rightarrow$ **Firestore Database** $\rightarrow$ **Rules**.
2. Copy the contents of `firestore.rules` and click **Publish**.
3. This enforces on Google's servers that:
   * Public visitors can **read** questions/answers and **create** new pending questions only if they match strict schema, category, and character-length limits (`authorName` $\le 50$, `text` $3\text{--}400$ chars).
   * Only authenticated Email/Password Admins (`request.auth.token.firebase.sign_in_provider == 'password'`) can modify/delete questions or create/edit/delete official answer groups.

---

## 🚀 Step-by-Step Setup Guide

### Step 1: Configure GitHub Repository Secrets
1. Go to your repository on GitHub.
2. Navigate to **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions**.
3. Click **New repository secret** and add:

| Secret Name | Value Example / Description | Required? |
| :--- | :--- | :--- |
| `FIREBASE_CONFIG` | Full JSON string from Firebase Console (or use individual keys below) | Optional |
| `FIREBASE_API_KEY` | `AIzaSy...` | Required (if not using JSON) |
| `FIREBASE_AUTH_DOMAIN` | `your-app.firebaseapp.com` | Required (if not using JSON) |
| `FIREBASE_PROJECT_ID` | `your-app` | Required (if not using JSON) |
| `FIREBASE_STORAGE_BUCKET`| `your-app.firebasestorage.app` | Required (if not using JSON) |
| `FIREBASE_MESSAGING_SENDER_ID`| `159307170166` | Required (if not using JSON) |
| `FIREBASE_APP_ID` | `1:159307170166:web:...` | Required (if not using JSON) |
| `FIREBASE_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Optional |
| `GEMINI_API_KEY` | `AQ.Ab...` or `AIzaSy...` | Optional (if using Option B) |

*(If `GEMINI_API_KEY` is not provided in GitHub Secrets, the site still works perfectly—the Admin can enter it directly via the Admin UI drawer and it will be saved in their browser's local storage).*

---

### Step 2: Enable GitHub Pages with GitHub Actions
1. In your GitHub repository, go to **Settings** $\rightarrow$ **Pages**.
2. Under **Build and deployment** $\rightarrow$ **Source**, select **GitHub Actions**.

---

### Step 3: Deploy
1. Push your changes to `master` (or `main`):
   ```bash
   git add .
   git commit -m "feat: configure GitHub Pages automated deployment"
   git push origin main
   ```
2. In your repo, click the **Actions** tab to watch the **Deploy to GitHub Pages** workflow run.
3. Once completed, your site is live at:
   `https://<your-username>.github.io/<repository-name>/`

---

## 💬 WhatsApp & Social Media Link Previews

When sharing your link in WhatsApp, Discord, Telegram, or LinkedIn, the app automatically displays a rich link card:
* **Preview Title:** `GSA Campus Question Hub | Google Student Ambassadors`
* **Description:** Official community Q&A portal with AI question clustering
* **Preview Image:** Stored at [`assets/preview-banner.jpg`](file:///c:/Users/user/Documents/Coding/Personal/gsa-question-collector/assets/preview-banner.jpg) (1200x630px, optimized to ~65KB to meet WhatsApp's strict <300KB limit)
* **Favicon:** [`assets/favicon.svg`](file:///c:/Users/user/Documents/Coding/Personal/gsa-question-collector/assets/favicon.svg) featuring the official Google 4-color motif
* The deployment workflow in `scripts/build-config.js` automatically binds your full GitHub Pages domain to the Open Graph tags at deploy time so WhatsApp's web scraper immediately unfurls the card.
