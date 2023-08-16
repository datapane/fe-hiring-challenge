# FE Hiring Challenge

# Introduction

Datapane is being developed with a typical FE / BE split, where,
- the FE is an SPA built using Vue3, Typescript, Pinia, Quasar, and more
- the BE is a Django / Python web app that serves REST APIs

This challenge involves building a Vue component of the type we have to build and implement within the Datapane SPA for use within the BE. As an early-stage startup, we often have to work without fully complete specs and like to provide opportunities for developers to make their own choices rather than micromanage - we attempts to recreate that process here.

# Task

For this task we'll be building a single Vue component that allows a user to set a reoccurring date and time for an event to occur, such as triggering an automated report generation event.

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

- Whilst we recommend using a CSS or Component library, we advise excising judgment in not picking an existing `cron`-like component off-the-shelf that implements the task entirely
- The component should be styled well and look complete
- The component should be standalone and presented via Storybook or Historie
- Instructions should be provided on how to build / bundle / start the system
- Comments, tests, and documentation are strongly encouraged

# Review

This task is deliberately open-ended, we encourage experimentation and extension of the component and concept.

Please don't spend more than 2-4 hours on this - we're looking to see how you approached the problem and the decisions made rather than a complete solution. This should be a fun challenge rather than a stressful endeavor.

There is no right answer as such, we will mainly be looking at code quality, software architecture skills, completeness of the solution from a software engineering perspective, and clarity of thought.

Once completed, please create a PR containing your work (or a private fork / zip file), send us an email, and book a second follow-up interview via the link in the previous email.
