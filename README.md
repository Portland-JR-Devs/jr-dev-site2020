[![CircleCI](https://circleci.com/gh/dslemay/gatsby-starter.svg?style=svg)](https://circleci.com/gh/dslemay/gatsby-starter)
[![codecov](https://codecov.io/gh/dslemay/gatsby-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/dslemay/gatsby-starter)
# Jr Developer Website

This site will be the web presence for [Portland Junior Developer](https://www.meetup.com/Portland-JR-DEVELOPER-Meetup/) meetup group.  It's being built by members of the group and will evolve to meet the needs of the organization and its members.  If you would like to contribute to this project, take a look at the quick guide below, but also the [`CONTRIBUTING.md`](https://github.com/Portland-JR-Devs/jr-dev-site2020/blob/master/CONTRIBUTING.md) file for a more complete description of how to get the site up and running and make your best contribution! 💻 😊 🎉

## Contributing

The basic workflow is:
1. Pull from current master
2. Create a branch from it (`git checkout -b <name_of_your_branch>`)
3. Do your work
4. Push your branch to the repo (`git push -u origin <name_of_your_branch>
5. *Github will tell you whether your changes can be merged successfully or not*
6. If it can be successfully merged, create a PR, and add your mentor as a reviewer (on the right hand side)
7. Once your mentor has reviewed your work with you and you've made any requested changes, they will merge your branch and close the issue
8. Once merged, your mentor will delete the branch you created

This repo is based on the gatsby tooling starter created by [@dslemay](https://github.com/dslemay/gatsby-starter). His descriptions around the tooling are included below.

# Gatsby Tooling Starter

- ESLint and Prettier configuration
- Integration and End 2 End testing
- Continuous integration
- Precommit hooks
- Storybook
- Gatsby base plugins
- Contributing

## ESLint and Prettier

The starter uses ESLint for code quality and Prettier for code formatting. The AirBnB style guide is used as the base, with additional plugins for React Hooks, testing, and Prettier integration. This should provide a solid base for most projects. Configuration can be updated in `.eslintrc.js` and `.prettierrc.js`.

## Testing

The starter is configured to use Jest for the test runner and React Testing Library for testing React components. This allows for a user driven approach to testing which allows for more resilient testing. Jest has also been configured with plugins to improve the developer experience when run in watch mode. This includes typeahead plugins to highlight matching test files or testnames when filtering tests to run.

Cypress has been configured to conduct End 2 End tests with the development server. This enables automating click through testing with the complete site. This can bring benefits such as running any GraphQL queries used in the build process for Gatsby. Cypress can run both in a visual interface when writing tests or headless to be used in a Continuous Integration environment. The different instances can be launched by running the `e2e:open` and `e2e:headless` scripts respectively. This will take care of booting up the development server before starting Cypress.

## Continuous Integration (CI)

The starter uses CircleCI for its CI server. This runs a Prettier check on all files, lints the files, runs both Jest and Cypress tests, and runs a build of the Gatsby site. If any of those processes fail, the build will fail. This helps alert you of breaking changes within the project. The configuration for CircleCI lives in `.circleci/config.yml`. In order to use CircleCI, some additional action steps are needed. Information on removing all CI configuration for the project is a the bottom of this section.

1. Login to [CircleCI](https://circleci.com/). Access is free for all public repositories.
1. Enable CircleCI for your repository.
1. Either remove the CircleCI badge at the top of this README or replace it with the badge for your repository.

If you desire to use CodeCov as a visual interface for monitoring code coverage on your project some configuration will need to be updated. Follow these steps to incorporate CodeCove with your project.

1. Login to [CodeCov](https://codecov.io/). Access is free for all public repositories.
1. Enable CodeCov for your repository.
1. Replace the badge at the top of this README with the badge listed in your CodeCov dashboard. If you do not wish to have a badge, it can just be removed.

### Removing CI and/or Codecov from the project.

To remove CircleCI configuration entirely, delete the `.circleci` folder at the root of the project. The CircleCI and CodeCov badges in this README can also be removed.

To use CirclCI, but eliminate CodeCov, delete the CodeCov badge from the README and the following section of code from `.circleci/config.yml`

```yaml
- run:
    name: Send coverage reports to Codecov
    command: npx codecov
```

## Git Hooks

Husky and Lint-staged have been installed to automate running scripts on git hooks. `.huskyrc.js` sets which npm scripts are run on various git hooks. Currently lint-staged will run before commit. This enables performing checks on files before they are committed, and failing a commit if there are issues with the staged file. The configuration for lint-staged is located in `lint-staged.config.js`. Configuration includes

- Lint and format all JavaScript files. Prettier is connected to ESLint through `eslint-plugin-prettier`.
- Format all markdown files. This will also respect the code formatting preferences set in `.prettierrc.js`.

There are many more git hooks and scripts which can be configured. For more information check out the [Husky repo](https://github.com/typicode/husky).

## Storybook

Storybook is a tool to build components in isolation of the main application. This enables development of the component to happen asynchronously of its integration into the site. An example is the data source for the component not being ready for integration. It also enables a tight feedback loop when working on a particular piece of UI, checking the rendered result with different props, and at different screen sizes. A sample component has been included in the repository and can be found at `src/components/button`. The `button.stories.js` file is what brings the component into Storybook. To see this sample component run `yarn storybook`.

The Storybook configuration for this project has been customized in several areas to help initial configuration.

- Update config with recommended Gatsby changes in `.storybook/webpack.config.js`
- Add additional Storybook utility plugins including the knobs and viewport plugin.
- Storybook will look for all files ending in `.stories.js` in the `src` directory and subdirectories. If you desire to use `jsx` extensions, this can be updated in `.storybook/config.js`

Storybook can be built and deployed separately from your site. To do so, run `yarn build-storybook`.

### How to Remove Storybook

If you do not want to include Storybook in your project it can be removed entirely with the following steps.

- Uninstall all `@storybook/*` packages.
- Delete the `.storybook` directory.
- Delete the sample Storybook file at `src/components/button/button.stories.js`

## Gatsby Themes

This starter uses Gatsby themes to abstract some of the common plugin installs, dependency management, and addition to `gatsby-config.js`. These dependencies are wrapped into `gatsby-theme-dslemay-core`. For more information about the purpose behind Gatsby themes, check out [Why Themes?](https://www.gatsbyjs.org/blog/2019-01-31-why-themes/) on Gatsby's blog. To see the configuration options for the theme, check out the [package's README](https://github.com/dslemay/gatsby-themes/blob/master/packages/gatsby-theme-dslemay-core/README.md).

### Thanks for reading!
