import formProject from './form_project';

const content = () => {
  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('page_title');
  pageTitle.innerText = 'Todo List';

  document.body.appendChild(pageTitle);

  const message = document.createElement('div');
  message.id = 'message';
  message.innerText = 'Hola';
  message.classList.add('none');

  document.body.appendChild(message);

  const button = document.createElement('button');
  button.id = 'new_project';
  button.innerHTML = "New Project <i class='far fa-plus-square'></i>";
  button.onclick = formProject;

  document.body.appendChild(button);

  const content = document.createElement('div');
  content.classList.add('content');

  const projectsList = document.createElement('div');
  projectsList.id = 'list_projects';

  content.appendChild(projectsList);

  const todosList = document.createElement('div');
  todosList.id = 'list_todos';

  content.appendChild(todosList);

  const container = document.createElement('div');
  container.id = 'container';
  container.classList.add('none');

  document.body.appendChild(container);

  const formContainer = document.createElement('form');
  formContainer.id = 'form_container';
  formContainer.classList.add('none');

  document.body.appendChild(formContainer);

  return content;
};

export default content;
