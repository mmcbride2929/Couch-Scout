# Final53

The roster building app is designed for fans to create a final 53 man roster for any NFL team. Users can select any team, add and cut players, sort by offense & defense, and lastly search for players via the searchbar at the top. 

**DEMO:** https://final53.netlify.app/

![home](https://github.com/mmcbride2929/Roster-Predictor-V2/assets/77947488/067fe514-1364-46cb-954d-b8110dfd0b95)

## How It's Made:

**Tech used:** React, TypeScript, NodeJS, MongoDB, Sass, React Query, Redux-Toolkit, React-Router

- React and TypeScript were chosen as the foundation for the app's frontend. The combination of the two helped me avoid type-errors as well as create reusable components like the add/delete button which saved time & also helped avoid a ton of repeated code. 

- The backend of the app was developed using Node.js with the Express framework. Mongoose was utilized as an interface for interacting with the MongoDB database, enabling me to dynamically sort through the database's 32 collections.

- Sass was selected as the CSS preprocessor for its modular approach and convenient organization. As more components were created, Sass's reusable styles, simplifies code maintenance, and improves readability by helping me locate my stylesheets easily, which saved me a lot of time.

- To manage the app's global state and handle variables that needed to be shared across components, Redux-Toolkit was utilized. The biggest need was having the current team available for both the dashboard, and the home page. Storing the team value in redux as well as methods to modify the team was huge because it saved me from prop-drilling and forgetting where my methods lived.

- For navigation within the app, React-Router was employed. React-Router offers a straightforward setup and provides essential tools like useNavigation for programmatic navigation and <Link> elements to conveniently wrap navigation elements so it fit my project's needs perfectly.

- The retrieval of roster data is facilitated by React Query. React Query offers convenient features such as isLoading, data, error, and more, reducing boilerplate code and enhancing data handling efficiency. Since I'm only fetching one time, and in one single componenent, React Query helped me impliment data-fetching in little to no time.

## Lessons Learned / optimizations
  
Through this project, I gained valuable insights and knowledge in several key areas. Firstly, I learned the importance of utilizing IDs to store items in a list, which significantly reduced code duplication. Before learning this, I would have stored entire player objects in a second array, but realized I only needed to store the id & could filter results from the original state with the matching id.

Secondly, I acquired the skill of implementing the useRef hook on input elements. This technique allowed me to optimize component rendering by avoiding unnecessary re-renders, resulting in improved performance and a smoother user experience.

Lastly, I learned the process of dynamically fetching collections within MongoDB. This capability enabled the dynamic retrieval of roster data for different teams, instead of using multiple databases for each team. 


## Whats next?
- Add Testing with React Testing Library
- Update Rosters for all Teams
- Add animations and a 3 team carousel to the home page

![dashboard](https://github.com/mmcbride2929/Roster-Predictor-V2/assets/77947488/0f12fffb-1a28-40dc-8e5c-7800fef569a9)
