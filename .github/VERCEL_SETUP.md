# Vercel Deployment Setup

This guide explains how to configure GitHub Actions for automatic Vercel deployment.

## Required GitHub Secrets

You need to add 3 secrets to your GitHub repository:

### 1. VERCEL_TOKEN
- Go to https://vercel.com/account/tokens
- Click "Create Token"
- Name it "GitHub Actions"
- Copy the token
- Add it to GitHub: Settings → Secrets → Actions → New repository secret
- Name: `VERCEL_TOKEN`
- Value: (paste your token)

### 2. VERCEL_ORG_ID
- Run this command in your project directory:
  ```bash
  npx vercel link
  ```
- This creates a `.vercel` folder
- Open `.vercel/project.json`
- Copy the `orgId` value
- Add to GitHub secrets as `VERCEL_ORG_ID`

### 3. VERCEL_PROJECT_ID
- From the same `.vercel/project.json` file
- Copy the `projectId` value
- Add to GitHub secrets as `VERCEL_PROJECT_ID`

## Vercel Project Configuration

Make sure your Vercel project is configured correctly:

1. **Framework Preset:** Next.js
2. **Build Command:** `npm run build`
3. **Output Directory:** `.next`
4. **Install Command:** `npm install`
5. **Node Version:** 20.x

## Workflow Behavior

- **Push to `main`:** Deploys to production (https://pyanimate.vercel.app)
- **Pull Requests:** Creates preview deployment and comments on PR with URL
- **Build Verification:** Always runs `npm run build` before deploying

## Testing the Workflow

1. Make a change and push to a new branch
2. Open a pull request to `main`
3. GitHub Actions will:
   - Run build verification
   - Deploy to Vercel preview
   - Comment on PR with preview URL
4. Merge the PR
5. GitHub Actions will deploy to production

## Troubleshooting

### Build fails
- Check that `npm run build` works locally
- Verify Node version matches (20.x)
- Check environment variables in Vercel dashboard

### Deployment fails
- Verify all 3 secrets are set correctly
- Check Vercel project exists and is linked
- Review Vercel dashboard for deployment logs

### Preview URL not commenting
- Ensure GitHub Actions has write permissions for PRs
- Settings → Actions → General → Workflow permissions → Read and write permissions
