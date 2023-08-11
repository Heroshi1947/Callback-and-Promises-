async function fetchData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    if (response.ok) {
      const apiData = await response.json();
      console.log(apiData);
    } else {
      console.log("Error : " + response.status);
    }
  }
  
  fetchData();