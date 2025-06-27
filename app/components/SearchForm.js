export function SearchForm(){
     const d=document,
     $form=d.createElement("form"),
     $input=d.createElement("input")
     $input.name="search";
     $input.type="search";
     $input.placeholder="Buscar...";
     $input.autocomplete="off";
     $form.classList.add("search-form");
     if (localStorage.getItem("wpSearch")) {
          $input.value = localStorage.getItem("wpSearch");
     }
     d.addEventListener("search",e=>{
          if (!e.target.matches(".search-form input[type='search']")) return false; 
          if (!e.target.value.trim()) {
               e.target.value = "";
               localStorage.removeItem("wpSearch");
              
          }
     })
     $form.appendChild($input);
     d.addEventListener("submit",(e)=>{
          if (!e.target.matches(".search-form")) return false;   
          e.preventDefault();
          localStorage.setItem("wpSearch",e.target.search.value);
          location.hash=`#/search?search=${e.target.search.value}`;
     })
     return $form;
}