### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  * To provide the ability for client-side routing in a web app

- What is a single page application?
  * A website or web app that rewrites the current page instead of loading entire new pages. 

- What are some differences between client side and server side routing?
  * Client side can provide a 'native app' feel with smoother transitions between 'pages' since there isn't a full page refresh.
  * Client side can take longer on initial load since it's loading everything instead of just a single page like server side provides.
  * Client side can have potentially worse SEO since crawlers are designed for traditional server side routing.

- What are two ways of handling redirects with React Router? When would you use each?
  * With a Redirect tag. Used when you want the new location to override the current location in the history stack. (You shouldn't have gone here, go here instead.)
  * Calling .push on the history object. Used when you want to move your user to a new location after they have completed something.

- What are two different ways to handle page-not-found user experiences using React Router? 
  * With a "catchall" route
  * With a Redirect component

- How do you grab URL parameters from within a component using React Router?
  * With the useParams hook

- What is context in React? When would you use it?
  * Universal data across the application. Used when 'deeply' nested component needs access to data. Avoids passing props from a parent to a great grandchild for example. 

- Describe some differences between class-based components and function components in React.
  * Class-based componenets have state initialized in the constructor, and use methods like setState to change.
  * Class-based components rely on 'this,' which can lose context so oftentimes you need to bind your methods in the constructor.

- What are some of the problems that hooks were designed to solve?
  * Duplication and repeating of code and logic within class components or shared amongst components.
  * Remove the need for higher order components and render props, which could make it hard to follow the logic (and possibly lead to wrapper hell).