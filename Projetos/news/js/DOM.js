export class DOM {
    static mostrarNews(arr){
        const ul = document.querySelector('ul')

        arr.forEach((noticia) => {
            const li = document.createElement('li')
            const img = document.createElement('img')
            const categoria = document.createElement('p')
            const titulo = document.createElement('h1')
            const fonte = document.createElement('p')
            const div = document.createElement('div')
            const resumo = document.createElement('p')

            img.src = noticia.imagem
            categoria.textContent = noticia.categoria
            titulo.textContent = noticia.titulo
            fonte.textContent = noticia.fonte
            resumo.textContent = noticia.resumo
            
            div.append(categoria,titulo, resumo)
            
            
            if(noticia.id == 2){
                li.classList.add('main')
                categoria.classList.add('categoria')
                fonte.classList.add('font')

                resumo.classList.add('resumo-none')

            } else{

                li.classList.add('normal')
                categoria.classList.add('categoria-normal')
                fonte.classList.add('fonte')
                resumo.classList.add('resumo')
          
            }
            div.appendChild(fonte)
            li.append(img, div)
            ul.appendChild(li)
        })
    }
}