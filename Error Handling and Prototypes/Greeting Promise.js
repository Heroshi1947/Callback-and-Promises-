function greet(name) {
    const greeting = `Hello, ${name}!`;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(greeting);
      }, 2000);
    });
  };

  const name = "BadMan";

const promise = greet(name);

promise.then(greeting => console.log(greeting));