# Eventio

Hi Anna 👋 As you know, I've been working on the Eventio app implementation for the past week. Unfortunately, I wasn't able to implement everything so let me walk you through what needs to be done next:

## Feature 1: Login and Authorized State

- I implemented UI, form functionality, hooked up API, redirection and logout functionality
- Form validation needs to be added - currently, there is only default validation, I would probably choose Yup for this

## Feature 2: Event List

- I implemented UI, toggle view mode, hooked up API, events filtering and JOIN/LEAVE functionality
- Small styling adjustments might be needed for smaller resolutions like tablet
- JOIN/LEAVE button needs to be disabled when event capacity is full

## Feature 3: Create Event

- I implemented UI, form functionality and I hooked up API
- As you can see, dateTime input field styling needs to be fixed
- Form validation needs to be added, mainly prohibiting users to select date in the past
- If all the details are filled in correctly event creation works, but better error handling needs to be implemented
- The page should be already responsive but there might be small details left to fix, like margin or padding

## FEATURE 4: 404 Page

- I implemented UI and made it responsive
- Button functionality is not implemented



I hope my code isn't too messy and you will be able to find everything pretty quick. I divided the project into these folders:

- `components` - folder with smallest components and their styles
- `containers` - folder with bigger components composed of small components in the `components` folder
- `pages` - 4 pages that can be visited, usually composed of big components from the `containers` folder
- `images`
- `theme` - folder for global theme
- `utils` - folder for any constants, helper functions, hooks, routes config and authentification context
