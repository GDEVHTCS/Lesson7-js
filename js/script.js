//xml
let responseobject = new XMLHttpRequest();
responseobject.open('GET', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
responseobject.addEventListener('load', function () {
    console.log(this.response)
    let response = this.response //save as a text objects
    let responsejs = JSON.parse(response) //parsing into javascript object
    console.log(responsejs)

    let ul = document.createElement('ul')
    let strMeal = document.createElement('li')
    let strMealThumb = document.createElement('li')

    strMealThumb.textContent = `StrMealThumb - ${responsejs.meals[2].strMealThumb}`
    strMeal.textContent = `strMeal - ${responsejs.meals[2].strMeal}`

    ul.appendChild(strMeal);
    ul.appendChild(strMealThumb)
 
    document.getElementById("Xml-request").appendChild(ul)
})
responseobject.send()

//fetch
fetch('https://jsonplaceholder.typicode.com/users',{
    method:'GET' 
}) 
.then(function(response){
    console.log(response)
    //now error
    if (!response.ok){
        throw response.response
    }
    return response.json() //response as a json
})
.then(function(gotinfo){
    console.log(gotinfo)
    let ul = document.createElement('ul')
    gotinfo.forEach(elGotinfo =>{
        let li = document.createElement('li')
        li.textContent = elGotinfo.company.name
        ul.appendChild(li)
    })
    document.getElementById("fetch-request").appendChild(ul)
})
.catch(function(error){
    console.log(error)
    if (error === 404){   //in catch if else statement for error
        let p = document.createElement('p') 
        p.textContent = 'Page not found!'
        document.getElementById("fetch-request").appendChild(p)
    }else{  
        let pnew = document.createElement('p')
        pnew.textContent = 'Server Failed!'
        document.getElementById("fetch-request").appendChild(pnew)
    }
})