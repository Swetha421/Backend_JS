async function nasa(url){
    try{
        let result=await fetch(url);
        let data= await result.json();
        console.log(data)
    }
    catch(error){
        console.error("error")
    }
    finally{
        console.log("operation finished")
    }
}
nasa("https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=KUcTyStXWXnXWYZ8Rx5wBkidyLrXLLhbmxkMc7pe")