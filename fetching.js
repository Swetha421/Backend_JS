async function syncfunction(url){
    try{
        let result= await fetch(url)
        const data=await result.json()
        console.log(data.totalResults)
        
    }
    catch (error){
    console.log("error")
 }finally{
    console.log("operation finished")
 }

}

syncfunction("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=561e63b388564e51817c8a6c2dc2eb34")

    