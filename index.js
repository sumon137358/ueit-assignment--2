fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => display(data));

function display(data) {
  for (let element of data.slice(0, 10)) {
    const userBtn = document
      .getElementById("posts")
      .addEventListener("click", function () {
        const ul = document.getElementById("container");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        ul.appendChild(p1);
        ul.appendChild(p2);
        ul.appendChild(p3);
        ul.appendChild(p4);

        p1.innerHTML = "userId:" + element.userId;
        p2.innerHTML = "id:" + element.id;
        p3.innerHTML = "title:" + element.title;
        p4.innerHTML = "body:" + element.body;
      });
  }
}

// //fetch API for comments
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => displayComment(data));
function displayComment(data) {
  for (let element of data.slice(0, 10)) {
    const userBtn = document
      .getElementById("comments")
      .addEventListener("click", function () {
        const ul = document.getElementById("container");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        ul.appendChild(p1);
        ul.appendChild(p2);
        ul.appendChild(p3);
        ul.appendChild(p4);

        p1.innerHTML = "postId:" + element.postId;
        p2.innerHTML = "id:" + element.id;
        p3.innerHTML = "name:" + element.name;
        p4.innerHTML = "email:" + element.email;
      });
  }
}
//fetch API for albums
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => displayAlbum(data));
function displayAlbum(data) {
  for (let element of data.slice(0, 10)) {
    const userBtn = document
      .getElementById("albums")
      .addEventListener("click", function () {
        const ul = document.getElementById("container");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        ul.appendChild(p1);
        ul.appendChild(p2);
        ul.appendChild(p3);

        p1.innerHTML = "userId:" + element.userId;
        p2.innerHTML = "id:" + element.id;
        p3.innerHTML = "title:" + element.title;
      });
  }
}

//fetch API for photos
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => displayPhotos(data));
function displayPhotos(data) {
  for (let element of data.slice(0, 10)) {
    const userBtn = document
      .getElementById("photos")
      .addEventListener("click", function () {
        const ul = document.getElementById("container");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        ul.appendChild(p1);
        ul.appendChild(p2);
        ul.appendChild(p3);
        ul.appendChild(p4);

        p1.innerHTML = "albumId:" + element.albumId;
        p2.innerHTML = "id:" + element.id;
        p3.innerHTML = "title:" + element.title;
        p4.innerHTML = "url:" + element.url;
      });
  }
}

//fetch API for posts

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => displayUsers(data));
function displayUsers(data) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const userBtn = document
      .getElementById("users")
      .addEventListener("click", function () {
        const ul = document.getElementById("container");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        ul.appendChild(p1);
        ul.appendChild(p2);
        ul.appendChild(p3);
        ul.appendChild(p4);

        p1.innerHTML = "id:" + element.id;
        p2.innerHTML = "name:" + element.name;
        p3.innerHTML = "username:" + element.username;
        p4.innerHTML = "email:" + element.email;
      });
  }
}
