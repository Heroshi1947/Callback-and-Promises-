const getData = async() => {
    const dataResponse =  await fetch(`https://jsonplaceholder.typicode.com/posts/123456789`)
    if(dataResponse.ok){
        const data = await dataResponse.json() ;
        console.log(data);
    }else{
        console.log("some error occured " + dataResponse);
    }
}

getData();