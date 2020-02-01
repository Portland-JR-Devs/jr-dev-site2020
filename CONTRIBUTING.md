# Contributing

Thank you for your help on this project! If you have any questions about git commands, merging/PRs, or your code, please contact your mentor in the Slack channel or via email. We look forward to seeing what you build! 

## Getting Started & Workflow

1. Clone the repo

```bash
git clone https://github.com/Portland-JR-Devs/jr-dev-site2020
```

2. In your terminal, navigate to the project's root

```bash
cd jr-dev-site2020
```

3. Install the contents of `package.json` to make sure you have all the needed dependencies by running

```bash
npm install
```

3a. Per the Gatsby directions, prevent conflicts between npm and yarn by removing the package-lock file
`rm package-lock.json`

4. Create a new branch for yourself

```bash
git checkout -b <your-branch-name>
```

5. To see the app locally, from the project's root directory run:

```bash
npm start
```

Then visit http://localhost:8000/

6. When you're ready to stage and commit your changes, do so with:

```bash
git add .
git commit -m '<your commit message here>'
```

7. Then, push them to your branch:

```bash
git push origin <your-branch-name>
```

8. Come back to the repo here, and create a pull request by hitting the `New Pull Request` button toward the top. Select your branch from the list. Choose your mentor as a reviewer from the Reviewer tab on the left side of the page.

9. Don't forget - regularly stage and commit your changes. Also, it's good practice to regularly pull down from master to make sure you have the most up to date version of the code. With several contributors, things can get confusing quickly! Do your best to write useful comments where appropriate so other people know what your code is doing!
