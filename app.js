function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section)

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Você precisa digitar o nome do livro, autor ou tema que deseja ler.</p>";
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let autor = "";
    let sinopse = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        autor = dado.autor.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();
        tags = dado.tags.toLowerCase();
    
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || autor.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    <span class="autor">(${dado.autor})</span>
                </h2>
                <p class="ano"><strong>Ano: </strong>${dado.anoPublicacao}</p>
                <p class="sinopse">${dado.sinopse}</p>
                <p class="generos"><strong>Gênero: </strong> ${dado.genero}</p>
                <p><strong>Comprar: </strong> <a> ${dado.link} </a></p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não há resultados para a sua busca.</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}