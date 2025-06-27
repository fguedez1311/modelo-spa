import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
    const d = document,
    w= window,
    $main= d.getElementById("main");
    let {hash} = w.location;
    console.log(hash);
    $main.innerHTML=null
    if(!hash || hash === "#/home"){
        await ajax({
               
                url:api.POSTS,
                cbSuccess:(posts)=>{
                    //console.log($main)
                    let html=""
                    posts.forEach(post =>html+= PostCard(post))
                    $main.innerHTML=html;
                   
                    
                      
                }

          })
    }
    else if(hash.includes("#/search")){
       let query=localStorage.getItem("wpSearch")   
       if(!query) return false
       await ajax({
               
                url:`${api.SEARCH}${query}`,
                cbSuccess:(posts)=>{
                   console.log(posts)
                    
                    
                      
                }

          })
            

    }
    else if(hash.includes("#/contacto")){
       $main.innerHTML="<h2>Sección de Contacto</h2>"
    }
    else{
         $main.innerHTML="<h2>Aquí cargará el  contenido del post seleccionado</h2>"
         
         await ajax({
                  
                  url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
                  cbSuccess:(post)=>{
                     console.log(post)
                     $main.innerHTML=Post(post)
                     
                     
                     
                        
                  }

         })
    }
    
    d.querySelector(".loader").style.display="none";
    

}
