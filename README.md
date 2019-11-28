# Full Stack Django Hiring Challenge

# Setup

## Install dependencies

- Install Python dependencies

  `pipenv shell`

  `pipenv install`

- Install JavaScript dependencies
  `npm install`

## Run project

In one tab:
`python manage.py runserver`
In another tab:
`npm run watch`

Then open http://localhost:8000 in browser.

# Introduction

Datapane is being developed as a hybrid application, also known as an MPA, as opposed to an SPA.

This approach is used by many larger websites, including both GitHub and Facebook, allowing us to take advantage of a robust BE ecosystem, whilst adding FE-rendered components as needed to improve interactivity.

This is simpler and faster in many ways for startups, however comes with it's own challenges (see [https://www.gregnavis.com/articles/the-architecture-no-one-needs.html](https://www.gregnavis.com/articles/the-architecture-no-one-needs.html) for an overview of the pros/cons involved).

This challenge involves building a small MPA using a combination of a back-end stack (e.g. Django, Rails, etc.) combined with your front-end technology of choice, (e.g. React, Vue, Angular, etc.) from scratch to explore the design and architecture of such an application.

# Task

For this task we'll be building a very simple webapp with 3 main pages and a navbar.

This app is comprised of several individual components - you can build these components using either FE or BE rendering, however must use each technology at least once.

## Pages & Components

### Navbar

- The navbar is persistent at the top of the page and has 3 navigation options
  - Home (the default)
  - CSV Uploader
  - Entry Form
- This navbar is to be rendered by the backend

### Home Page

- This page has a single component that just displays "Lorem Ipsum"

### CSV Uploader Page

- This page has 2 components
  1. A file uploader, that allows users to select a CSV to upload to the server (the repo includes a sample CSV to test with)
  1. A viewer component, that displays the contents of the CSV sent to the server in the 1st component
     - The viewer should be able to handle displaying larger CSVs, i.e > 1000 rows, in an easy-to-navigate manner

### Entry Form Page

- This page has 2 components
  1. A form the allows users to enter a name, age, and email of an individual
     - This form should validate the input in some way
  1. A table that displays the list of all entries added to the server via the 1st component
     - This table is stored on the BE and should be reproduced upon navigating back to the page

## Technologies

- A traditional BE stack that supports generating both HTML templates and JSON APIs (we highly recommend Django and DRF as we use these ourselves, however others, except NodeJS/Express, are acceptable)
- A modern FE framework (e.g. React, Vue.js, Angular, etc., - we highly recommend React as we use it ourselves)
- Build systems and scripts of your choice, e.g. typescript, FE bundlers, etc.
- Any FE and BE libraries you may find useful to help your task, e.g. a CSV parsing library - we prioritise using existing libraries to accomplish tasks rather than building in-house,

## Requirements

- You are free to choose either of your chosen FE or BE technology to build each component, however both must be used at least once
- Multi-user support and log-in is NOT required for this project
- The app should behave like traditional content-based web site - i.e. back button should work, history should be present, etc.
- Instructions should be provided on how to build / bundle / start the system.

### Optional Requirements

- Styling, via CSS, is preferable but not required, however if you do style your app, then please make sure that both BE and FE- rendered components look similar
- Rendering new pages may cause flickering during reload, you can attempt resolving this in several ways, including, network optimisations and caching, making use of turbolinks / stimulus.js / intercooler.js / etc., and other approaches

# Review

Please don't spend more than 2-4 hours on this - we're looking to see how you approached the problem and the decisions made rather than a complete solution. This should be a fun challenge rather than a stressful endeavour.

There is no right answer as such, we will mainly be looking at code quality, software architecture skills, completeness of the solution from a software engineering perspective, and clarity of thought.

Once completed, please create a PR containing your work, send us an email, and book a second follow-up interview via angellist (https://angel.co/schedule/mandeep-gill-2).
