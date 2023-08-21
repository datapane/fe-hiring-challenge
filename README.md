# FE Hiring Challenge

# Introduction

Datapane is being developed with a typical FE / BE split, where,

- the FE is an SPA built using Vue3, Typescript, Pinia, Quasar, and more
- the BE is a Django / Python web app that serves REST APIs

This challenge involves building a Vue component of the type we have to build and implement within the Datapane SPA for use within the BE. As an early-stage startup, we often have to work without fully complete specs and like to provide opportunities for developers to make their own choices rather than micromanage - we attempt to recreate that process here.

# Task

For this task we'll be building a single Vue component that allows a user to set a recurring date and time for an event to occur, such as triggering an automated report generation event.

This component should accept the schedule using a `cron`-like textual entry format.

The component should validate the input and present the schedule to the user in an intuitive form. The manner this could take is left as an open-ended exercise for the reader, with credit given to the UX and ease-of-use of the component alongside the general execution, implementation, and extension of this concept.

Some sample ideas could be, but not limited to,

- Representing the schedule within a calendar widget
- Representing the schedule as a easy-to-read sentence
- Providing live syntax highlighting and debug/error messages regarding the `cron`-input string
- Anything else that you think a user would benefit from

## Technologies

- Vue3
- Typescript
- Any CSS / component library of your choice, however we would not look as highly at a submission that uses a fully prebuilt component that implements this task
- [Storybook](https://storybook.js.org/) or [Histoire](https://histoire.dev/) to showcase and present your component
- Build systems and scripts of your choice, e.g. `vite`, `rollup`, etc.
- Any other FE libraries you may find useful to help your task - we prioritize using existing libraries to accomplish tasks rather than building in-house

## Requirements

- Whilst we recommend using a CSS or Component library, we advise exercising judgment in not picking an existing `cron`-like component off-the-shelf that implements the task entirely
- The component should be styled well and look complete
- The component should be standalone and presented via Storybook or Historie
- Instructions should be provided on how to build / bundle / start the system
- Comments, tests, and documentation are strongly encouraged

# Review

This task is deliberately open-ended, we encourage experimentation and extension of the component and concept.

Please don't spend more than 2-4 hours on this - we're looking to see how you approached the problem and the decisions made rather than a complete solution. This should be a fun challenge rather than a stressful endeavor.

There is no right answer as such, we will mainly be looking at code quality, software architecture skills, completeness of the solution from a software engineering perspective, and clarity of thought.

Once completed, please create a PR containing your work (or a private fork / zip file), send us an email, and book a second follow-up interview via the link in the previous email.

# Solution - Mattia Uggè

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development on Storybook

```sh
npm run storybook
```

### Build component for NPM publication

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run Unit Tests coverage with [Vitest](https://vitest.dev/)

```sh
npm run coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run lint
```

## Documentation

I've designed and implemented the `EventScheduler.vue` component found at `src/components` giving the user the possibility to interact with `cron` in an intuitive way.

It is a form based component consisting of four inputs:

1. `Start date`: this refers to start date/time of the cron task;
2. `End date`: it is possible to end the cron task execution at a specific date/time;
3. `Frequency`: this provides the possibility to schedule the cron task once, weekly, monthly etc.;
4. `Repetitions`: it is tied to the `End Date`, which can be calculated based on how many times the user wants the cron task to be repeated;

Two more components have been developed: `EventList` and `EventListItem`; their main goal is to show the `EventScheduler` functionality through a simple CRUD list of cron tasks.
Pinia event store (`src/stores/events.ts`) has been used to provide `REST Apis` integrations.

A sets of `src/utils/cronUtils.ts` has been drafted, specificaly for the `EventScheduler` component.

## External libraies

- [Quasar](https://quasar.dev/vue-components) for UI components
- [cron-validate](https://github.com/Airfooox/cron-validate) to validate `cron`-like strings
- [cron-converter](https://github.com/roccivic/cron-converter) to parse `cron`-like strings to array-like structures
- [cronstrue](https://github.com/bradymholt/cronstrue) to parse `cron`-like strings to human readable format

## Next steps

1. Implement the TODOs in `cronUtils`, these are required to complete the functionality of the `EventScheduler` component; their goal is to make the component reactive by parsing the form inputs to cron type and viceversa
2. Write more extensive tests
3. Improve styling
