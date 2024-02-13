Scenario

By completing this exercise, your React app will use a semantic HTML structure to better describe the intention and semantics of the document. As you have learned, semantic HTML is important for describing the meaning, or semantics, of your HTML document. It also assists accessibility software, such as screen readers, in describing your content to users with disabilities.
Instructions 
Step 1: Set up the initial semantic structure

    Open your project in Visual Studio Code.

    Open the App.js file.

    The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment.

Tip: Remember, a fragment starts with a <> tag and ends with a </> tag.

    Review your UI/UX and decide how each of the sections of the design will be represented using semantic tags.

Tip: Use the header, nav, main and footer semantic tags.

    Inside the fragment, add the semantic tags.

Step 2: Break the sections down into React components

Now that you have planned your semantic structure, it is important to decide which sections will be dynamically updated and if those sections should be child components of the App component.

Tip: For simplicity, you can create a component for each semantic element you added to App.js.

    Create a JavaScript file for each semantic element that will be a React component, for example, Header.js, Nav.js, Main.js and Footer.js.

    In each component, return the semantic HTML element.

    In App.js, replace the semantic tags with the corresponding child components, for example <header></header> will be replaced with <Header/>.

Step 3: Add the logo and navigation elements

The initial components are now set up. You will now add the details for the logo and navigation.

    Add the Little Lemon logo to the appropriate React component using the <img> tag.

    Add the website navigation to the Nav component. It is important to add a hyperlink for each key page of the website based on your mockup.

Tip: Use a <ul> element and add an <li> element for each <a> hyperlink.
Step 4: Add the footer content

Review your design and add the necessary HTML elements to the footer component.
Conclusion

By completing this exercise, you have now set up the semantic foundations to build the rest of your application. As you progress through the course, ensure that you apply the appropriate semantic HTML elements to the content that you are building.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
