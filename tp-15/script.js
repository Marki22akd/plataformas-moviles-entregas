fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese`)
    .then((response) => response.json())
    .then(data => {
        const array = data.meals[0];

        for(let i=0;i<12;i++){
        let btn = document.createElement("button")
        let br = document.createElement("br")
        
        console.log(data)

        btn.textContent = data.meals[i].strMeal
        document.body.appendChild(btn)
        document.body.appendChild(br)

        btn.addEventListener("click",()=>{
            let div = document.createElement("div")
            const parrafo = document.createElement("p")
            parrafo.textContent = data.meals[i].strMeal
            let img = document.createElement("img")
            let imgUrl = data.meals[i].strMealThumb
            img.setAttribute("src", imgUrl);
            div.append(parrafo, img);
            div.classList.add("card",);
            img.setAttribute("heigt", "150px")
            img.setAttribute("width", "150px")
            document.body.append(div);
        })
}})
