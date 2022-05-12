export default {
  head: 'Welcome!',
  text:
    '<p>This assignment is a co-production of the final assignment in the React 2022 Q1 training course at The Rolling Scopes, a free education program hosted by the Rolling Scopes Developer community.' +
    '</p><p>The task is a kind of consolidation of the "learned material", requires the application of knowledge and skills gained in the previous 6 tasks, plus it develops the skill of teamwork.' +
    '</p><p>The result of development should be an application that helps an individual in a team or group of developers achieve their goals - Project Management System.' +
    '</p><h2>Team working on the project:</h2>' +
    '<ul><li><a href=https://github.com/iamserik" target="_blank" rel="noreferrer">Naviy Serikzhan <a>' +
    '</li><li><a href="https://github.com/choco-cat" target="_blank" rel="noreferrer">Natallia Panfilenka</a>' +
    '</li><li><a href="https://github.com/arteemm" target="_blank" rel="noreferrer">Artsiom Mianitski</a>' +
    '</li></ul><p>with competent mentoring <a href="https://github.com/ipanfilenko” target="_blank" rel="noreferrer">Ihar Panfilenka</a>' +
    '<h2>' +
    ' Application structure' +
    '</h2>' +
    '<ul type="disc">' +
    '<li>welcome page</li>' +
    '<li>username</li>' +
    '<li>profile management page</li>' +
    '<li>project management page</li>' +
    '<li>projects management page</li>' +
    '</ul>' +
    '<h2>' +
    ' Functionality' +
    '</h2>' +
    '<p>' +
    " An authorized user can set tasks, perform tasks, view tasks, delete their own tasks, be responsible (guilty) in other people's tasks." +
    '</p>' +
    '<h3>Welcome page</h3>' +
    '<p>The welcome page should show general information about the team, project, course.</p>' +
    '<ul type="disc">' +
    '<li>The 2 buttons Sign In and Sign Up should be available in the upper right corner.</li>' +
    '<li>If you have an unexpired token, replace the Sign In and Sign Up buttons with a "Go to Main Page" button.</li>' +
    '<li>When the token expires, the user should automatically be redirected to the "Welcome page".</li>' +
    '<li>Clicking on the Sign In / Sign Up button automatically redirects us to the route with the Sign In / Sign Up form.</li>' +
    '</ul>' +
    '<h3>Header</h3>' +
    '<ul type="disc">' +
    '<li>All routes available with the token must have a sticky header. The moment when it becomes sticky (if there is a scroll on the page) should be animated: its color may darken or its height will decrease slightly.</li>' +
    '<li>The header should contain buttons: Edit profile, Sign Out, Create new board, toggler / select localization.</li>' +
    '<li>The Edit profile button should take us to the route with the edit profile form. The requirements for the form are the same as for all forms in the application. There should be a delete user button. In case of this action =&gt; "Confirmation modal" =&gt; the user should be logged out and the user should be removed from the database.</li>' +
    '<li>Sign Out button - logs out.</li>' +
    '<li>Create new board button - opens a modal window with a form for creating a board.</li>' +
    '<li>The requirements for the form are the same as for all forms in the application.</li>' +
    '</ul>' +
    '<h3>Footer</h3>' +
    '<ul type="disc">' +
    '<li>footer with links to the githubs of the authors of the application, the year the application was created,&nbsp;<a href="https://rs.school/images/rs_school_js.svg">course logo</a>&nbsp;co&nbsp;<a href="https://rs.school/react/">link to the course</a>. footer is displayed on all pages of the app.</li>' +
    '</ul>' +
    '<h3>Sign In / Sign Up</h3>' +
    '<ul type="disc">' +
    '<li>Form fields must be implemented according to the api backend of the application. Validation must be implemented.</li>' +
    '<li>Errors from the BE side - (Not found, unhandled rejection, etc) should be displayed to the user in a user-friendly format (toast, pop-up or something similar, at your discretion).</li>' +
    '<li>On successful login, the user should be redirected to the "Main page"</li>' +
    '<li>If the user is logged in, then when trying to go to these routes, he should be redirected to the Main page.</li>' +
    '</ul>' +
    '<h3>Main page</h3>' +
    '<ul type="disc">' +
    '<li>Displays the boards as a list.</li>' +
    '<li>Boards are displayed with a small preview of the available information (title, description, etc). By clicking on the element, we go to the board item (Board page). There should also be a button to remove the board.</li>' +
    '<li>When trying to delete the board, we should get a Confirmation modal in which we should confirm the seriousness of our intentions. Confirmation modal should be a universal component (one for the entire application).</li>' +
    '<li>example add. functionality: global search (search for a task by task number, name, users who participate in it and by the text of the task description).</li>',
};
