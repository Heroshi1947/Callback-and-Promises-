async function fetchData() {
    const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  
    if (todoResponse.ok && postResponse.ok) {
      const todo = await todoResponse.json();
      const post = await postResponse.json();
  
      const data = {
        todo: todo,
        post: post,
      };
  
      console.log(data);
    } else {
      console.log("Error in fetching data: " + todoResponse.status + ", " + postResponse.status);
    }
  }
  
  fetchData();
  
  