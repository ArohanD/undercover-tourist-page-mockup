# What's in this repo?
Enclosed is a mockup of an info-page. The page features animated accordions, and custom styling.

[Live Demo](https://undercover-tourist-mock-arohan.herokuapp.com/)

[screenshot]()

## Get started

To run the page on your local machine, navigate to the repo and run the following commands:

```
npm install
npm start
```

To edit the repo further, enter the following command:

```
npm run compile
```

## Build Process
The approach I took to mocking this site was modularity first. I wanted to be able to re-use components of the page and create components for the site in general. WIth this in mind, items like the accordion, info page, header, side bar and footer are all components that can be plugged in wherever they are needed.

In the accordion example, each accordion is easily able to be modified to receive data from a specific source. This way, no code is repeated when creating multiple instances of a component for a page. 

## Stack
This page was built using the react library, and vanilla css.

## Going Forward
As this was a timed exercise, here are the features I would be able to complete if given another day:

- Full mobile responsiveness