document.getElementById("h1").innerHTML = "Lab7 Assignment";
h1.style.color="blue";
document.body.appendChild(h1)

const hr1 = document.createElement('hr');
document.body.appendChild(hr1);

const task = document.createElement('h2');
task.innerText = "Task";
task.setAttribute("style", "color:red");
document.body.appendChild(task);

const p = document.createElement('p');
const text = document.createTextNode('In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:');
const word = text.textContent.split(' ');

for (let i = 0; i < word.length; i++) {
  const span = document.createElement('span');
  if (word[i] === 'only') {
    span.style.fontWeight = 'bold';
  }
  const node = document.createTextNode(word[i] + ' ');
  span.appendChild(node);
  p.appendChild(span);
}
document.body.appendChild(p);

//list1

const ulElement = document.createElement('ul');
const items = ['find elements in the DOM (5 points);', 'create/add/remove elements (5 points);', 'change content of the elements (5 points);', 'change styles of the elements (5 points);', 'change attributes of the elements (5 points);', 'change classes of the elements (5 points).'];
const colors = ['green', 'purple'];
const boldWords = ['(5','points);','points).'];

items.forEach((item, index) => {
  const listItem = document.createElement('li');
  const colorIndex = index % colors.length;
  listItem.style.color = colors[colorIndex];

  const words = item.split(' ');
  words.forEach(word => {
    const bold = boldWords.includes(word);
    const span = document.createElement('span');
    span.style.fontWeight = bold ? 'bold' : 'normal';
    span.textContent = `${word} `;
    listItem.appendChild(span);
  });

  ulElement.appendChild(listItem);

document.body.appendChild(ulElement)
});

const hr2 = document.createElement('hr');
document.body.appendChild(hr2);

const submission = document.createElement('h2');
submission.innerText = "Submission";
submission.style.color="red";
document.body.appendChild(submission);

submission.setAttribute("id", "sub");
document.body.appendChild(sub);
sub.classList.add("myclass");
console.log(sub.classList);
sub.classList.remove("myclass");
console.log(sub.classList);

let p1 = document.createElement('p');
p1.innerText='To submit your work, follow these instructions:'
document.body.appendChild(p1);

//list2

const ul = document.createElement('ul');
const list = ['Create a new repository on Github, named lab7 (1 point).', 'Clone this repository to your local machine and work inside it.', 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).', 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).', 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).', 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).','After you finish your work, submit it to the Github (2 points).'];
const text_colors = ['green', 'purple'];
const bold_Words = ['lab7','(1','point).','points).','index.html','main.js','index.html,','main.js,','body','(5','(2'];

list.forEach((item, index) => {
  const listItem = document.createElement('li');
  const colorIndex = index % text_colors.length;
  listItem.style.color = text_colors[colorIndex];

  const words = item.split(' ');
  words.forEach(word => {
    const bold = bold_Words.includes(word);
    const span = document.createElement('span');
    span.style.fontWeight = bold ? 'bold' : 'normal';
    span.textContent = `${word} `;
    listItem.appendChild(span);
  });

  ul.appendChild(listItem);

document.body.appendChild(ul)
});

const hr3 = document.createElement('hr');
document.body.appendChild(hr3);