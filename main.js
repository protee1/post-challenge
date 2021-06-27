function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((post) => {
          return `
<div class="post">
<p>Name: ${post.name}</p>
<p>Email: ${post.email}</p>
<center><button onClick="view_post_byID(${post.id})">Get User’s Posts</button></center>
</div>
`;
        })
        .join("");
      document
        .querySelector("#container")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

function view_post_byID(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
          return   Swal.fire(
                `<h1></h1>${data.title}</h1>`,
                `<p></p>:${data.body}</p>`,
              );
         

    }).catch(err=>{
        console.log(err.message)
    })
}
fetchData();
