# scopus_tracker
Simple repository to test React functionalities. The main objective is consuming the Scopus API for journal querying on a more friendly format!
### TO-DO List

- [x] Save API Key on localStorage, so it does not display my personal key on the project.
- [x] Display the results in an organized manner (so far, only the paper ID of the first entry is being rendered).
- [x] Center the loading spinner on the screen (the loading spinner, when you do a request, is being displayed on the left corner).
- [ ] Enriching the forms, getting them better options and formatting the options before making the request.
- [ ] So far, it is assumed that the user knows how to use the Scopus API. We want to change that!
- [ ] The results are now being displayed in a table. Still needed to style the table a little better.
- [ ] Make a component out of the Modal, Loader, Table, and any other materialize structure (isolating their JS logic).
### Tools used
<ul>
  <li> Parcel: simple bundler with almost no configuration step. To run the DEV application hit: <code>npm run dev</code> on the terminal. </li>
  <li> ES-Linter: to give opinions about our coding, I'm using mostly the default options and the React Team recommendations. To run hit: <code>npm run lint</code> on the terminal. </li>
  <li> Prettier: A simple code formatter, I gave minimal configurations (4 spaced tab and lines ending with ;). To run hit: <code>npm run format</code> on the terminal. </li>
</ul>
