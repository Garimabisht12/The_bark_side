const searchForm = document.querySelector("#searchForm");
const search = document.querySelector("#search");
const validInput = ['german shepherd', 'bulldog', 'labrador retriever', 'french bulldog', 'siberian husky', 'beagle', 'alaskan malamute']
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let breed = search.value.toLowerCase().trim().replace(/\s+/g, '-');
    let breedId = document.getElementById(breed)
    console.log(breed)

    if (breedId){
        breedId.scrollIntoView({behavior: 'smooth'});
        search.placeholder = "Search";
        search.value='';
    }
    else{
        search.value=""
        search.placeholder = "OOPS! Not Here. Try something else...";
    }

}
)

