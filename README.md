# React Meme Generator

In this project you will find two approaches to creating a web application with the requirements below.

There is a simple approach with three input fields and a download button. The simple approach is done without fetching any data and without styling.

The advanced approach is with data fetching and some styling.

The code is described in chapters starting with 1 e.g. 1 Import useState from react etc.

Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

It should allow the user to:

- [ ] Enter text for the top and bottom of the meme
  - [ ] The top text box needs to have a label element associated with it containing the text `Top text` _-> This means that the input element needs a label called Top text: `<input label="Top text" />`_
  - [ ] The bottom text box needs to have a label element associated with it with the text `Bottom text` _-> This means that the input element needs a label called Bottom text: `<input label="Bottom text" />`_
  - [ ] Both text boxes should be empty when the page first loads
- [ ] Preview the generated meme
  - [ ] The image element needs to have an html attribute set as follows: `data-test-id="meme-image"` _-> This means that the image element needs a this data-test-id: `<img data-test-id="meme-image" />`_
    - [ ] This image element should show a working image when the page first loads _-> This means that an image should be displayed at the beginning, with the input for the top and bottom text already displayed._
- [ ] Change the meme template (the background image)
  - [ ] The meme template selector element needs to have a label element associated with it containing the text `Meme template` _-> This means creating an input field to search for the meme images._
  - [ ] If the user follows the steps below, the `doge` meme template needs to be selected: _-> doge is an id from an image_
    1. Click on the label of the meme template selector _-> This means the input field_
    2. Clear any existing value (eg. with a text box)
    3. Type the text `doge`
    4. Hit enter
- [ ] Download the meme by clicking on a button
  - [ ] The button element needs to contain the text `Download`

## Stretch goals:

- [ ] Reduce the amount of times a meme image is generated (don't generate it every time a user presses a key). Instead, generate a new image when the user clicks a button
  - [ ] The button element needs to have an html attribute set as follows: `data-test-id="generate-meme"`
- [ ] Use a `#`, `?` and `/` in your meme text
- [ ] Save a history of generated meme top text, bottom text, and meme photo type. This history should reappear on refresh of the application.
- [ ] Make your application work offline (without a network connection) with the [PWA capabilities built in to `create-react-app`](https://create-react-app.dev/docs/making-a-progressive-web-app/). Any meme images that were generated while online in the application should be available to be generated again offline as well.
- [ ] Create a favicon that identifies your app: (see [Generating and Adding Favicons](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-design-ux/#generating-and-adding-favicons))

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Netlify deployed website
- [ ] Project has been [imported into CodeSandbox](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-tasks/#codesandbox) and a comment has been added below with the sandbox URL
- [ ] [Drone bot](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-git-github/#writing-commit-messages))
