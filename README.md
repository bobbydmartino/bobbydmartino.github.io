# Stephen Martino's Portfolio Website

Hey Stephen! This README will guide you through setting up your development environment and managing your portfolio website. Follow these steps carefully, and you'll be able to make changes and see them live on your site.

## Initial Setup

1. Install Node.js and npm:
   - Download Node.js from https://nodejs.org/ (LTS version)
   - This will also install npm (Node Package Manager)

2. Clone the Repository: (you've already done this)
   - Enter the project directory: `cd stephenmartino.github.io`

3. Install Dependencies:
   - In the project directory, run: `npm install`

## Making Changes

1. Open the project in a text editor (Visual Studio Code)
2. Make your desired changes to the code
3. To see your changes locally:
   - Run `npm start` in Git Bash
   - Open a web browser and go to `http://localhost:3000`

## Deploying Changes

After you're happy with your changes:

1. Save all modified files
2. Open Git Bash in your project directory
3. Stage your changes:
   ```
   git add .
   ```
4. Commit your changes:
   ```
   git commit -m "Describe your changes here"
   ```
5. Push to GitHub:
   ```
   git push origin main
   ```
6. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

This last step builds your site and pushes it to the `gh-pages` branch.

## Troubleshooting

- If `npm run deploy` fails, try:
  ```
  git checkout gh-pages
  git pull origin gh-pages
  git checkout main
  npm run deploy
  ```

- Ensure GitHub Pages is set to deploy from the `gh-pages` branch:
  1. Go to your GitHub repository
  2. Click 'Settings'
  3. Go to 'Pages' in the left sidebar
  4. Under 'Source', select 'Deploy from a branch'
  5. Select 'gh-pages' branch and '/ (root)' folder
  6. Click 'Save'

## Best Practices

- Always pull the latest changes before you start working:
  ```
  git pull origin main
  ```
- Regularly commit your changes with clear, descriptive messages
- Test your changes locally before deploying


If you encounter any issues or have questions, don't hesitate to ask for help. Good luck with your portfolio site!
