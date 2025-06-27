export function SearchCard( search ) {
    
    let {id,title,_embedded}=search
    let slug=_embedded.self[0].slug
    return`
        <article class="post-card">
             <h2>${title}</h2>
             <p>
                <a href="#/${slug}" data-id="${id}">Ver Public</a>
            </p>
        </article>
    `
}
