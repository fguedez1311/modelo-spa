export function Post(props){
    let {title, date, content} = props;
    let dateFormat=new Date(date).toLocaleString();
    return`
        <section class="post-page">
            <aside>
                <h2>${title.rendered}</h2>
                <time datetime="${date}">${date}</time>
            </aside>
            <hr>
            <article>
                ${content.rendered}
            </article>
        </section>
    `
}