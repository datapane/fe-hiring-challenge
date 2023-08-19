# FE Hiring Challenge

## Candidate - Matt Evans

### Installation

To install the project with npm, run the following command:

```
npm ci
```

This will ensure npm uses the package-lock file to install dependencies, avoiding any possible errors from mis-matched
package versions.

### Viewing the Component

To view the component in a Storybook instance:

```
npm run storybook
```

This will run a local server on port 6006 (if available), and automatically open storybook in the browser, where the
component can be viewed independently and its props changed.

To view the component stand alone:

```
npm run dev
```

This will run a local development server and automatically open the browser, displaying the Vue app containing only the
component

### Running Tests

To run any test files contained within the project:

```
npm run test
```

This will execute any test files included in the project using Vitest and output the results in the terminal.

### Todo List

This is a list of features or nice-to-haves if I ever come back to this component:

- `isValidCron` should return a tuple `[result, errors]`, where the second value is an object displaying which of the
  five values are incorrect:
    ```js
    const result = [false, {
      '0': false,
      '1': false,
      '2': true,
      '3': true,
      '4': false,
    }];
    ```
- Better mobile styling - there is a minor extra padding on the right edge of the `CronInput`
- Display prompted cron schedule in mini-calendar format (considered doing this with SVGs, but didn't think I'd complete
  it within the 4-hour time frame)
- Refactor out form label+input components for re-usability
- Refactor out submit button to custom button component w/ loading prop
- Replace Script/Job input with dropdown of specific named jobs (for non-technical users)
- Include tooltip with Cron Time input, showing cron format
