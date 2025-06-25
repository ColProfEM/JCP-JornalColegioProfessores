// Liga/Desliga o Menu Lateral

document.getElementById("menu_btn").addEventListener("click", function () {
    document.getElementById("menu_btn").classList.toggle("active");
    document.getElementById("sidebar").classList.toggle("active");
});

// Cria o elemento html Section (Card das Notícias)

function createNewsSection(
    id,
    imgUrl,
    theme,
    title,
    description,
    linkUrl = "#"
) {
    const section = document.createElement("section");
    section.id = id;
    section.className = `container ${theme}`;

    section.innerHTML = `
    <a href="${linkUrl}">
        <img src="${imgUrl}" alt="Imagem da Notícia">
        <h2>${title}</h2>
        <span>${description}</span>
    </a>
    `;

    return section;
}

// Lista que contém as informações dos Cards

const newsData = [
    {
        id: "bullying_velado",
        imgUrl: "https://picsum.photos/400/200",
        theme: "cultura",
        title: "Bullying Velado",
        description: "Artigo de opnião por Sabrina Kruger",
        linkUrl: "./pages/bullying-velado.html",
    },
    {
        id: "reuniao_dos_pais",
        imgUrl: "https://picsum.photos/400/200",
        theme: "evento",
        title: "Reunião dos Pais",
        description: "Reunião Trimestral com Pais e Responsáveis",
        linkUrl: "./pages/reuniao-dos-pais.html",
    },
    {
        id: "elis_reflexao_atemporal",
        imgUrl: "https://picsum.photos/400/200",
        theme: "cultura",
        title: "Elis: Reflexão Atemporal",
        description: "Resenha: Como Nossos Pais - Elis Regina",
        linkUrl: "./pages/elis-reflexao-atemporal.html",
    },
    {
        id: "preparando_o_espaco",
        imgUrl: "https://picsum.photos/400/200",
        theme: "outro",
        title: "Preparando o Espaço!",
        description:
            "Iniciaram os trabalhos de transformação das salas no colégio",
        linkUrl: "./pages/preparando-o-espaco.html",
    },
    {
        id: "semana_da_fisica",
        imgUrl: "https://picsum.photos/400/200",
        theme: "evento",
        title: "Semana da Física",
        description:
            "Uma semana de atividades interativas no Colégio Professores",
        linkUrl: "./pages/semana-da-fisica.html",
    },
    {
        id: "dia_do_abraco",
        imgUrl: "https://picsum.photos/400/200",
        theme: "acolhimento",
        title: "Dia do Abraço",
        description: "Acolhimento Semanal Realizado no Colégio",
        linkUrl: "./pages/dia-do-abraco.html",
    },
    {
        id: "para_os_alunos",
        imgUrl: "https://picsum.photos/400/200",
        theme: "evento",
        title: "Para os Alunos",
        description: "Semana da Física: Atividades interativas e competições",
        linkUrl: "./pages/para-os-alunos.html",
    },
    {
        id: "conquista",
        imgUrl: "https://picsum.photos/400/200",
        theme: "outro",
        title: "Conquista",
        description: "Colégio conquista primeiro lugar na Olimpíada de Matific",
        linkUrl: "./pages/conquista.html",
    },
    {
        id: "faca_bonito",
        imgUrl: "https://picsum.photos/400/200",
        theme: "acolhimento",
        title: "Faça Bonito!",
        description: "Acolhimento semanal realizado no colégio",
        linkUrl: "./pages/faca-bonito.html",
    },
    {
        id: "matue_333",
        imgUrl: "https://picsum.photos/400/200",
        theme: "cultura",
        title: "Matuê: 333",
        description: "Resenha: 333 - Matuê",
        linkUrl: "./pages/matue-333.html",
    },
];

const newsContainer = document.getElementById("news_containers");

newsData.forEach((news) => {
    const section = createNewsSection(
        news.id,
        news.imgUrl,
        news.theme,
        news.title,
        news.description,
        news.linkUrl
    );
    newsContainer.appendChild(section);
});

// Separa os cards por categoria

document.addEventListener("DOMContentLoaded", function () {
    var filterLinks = document.querySelectorAll(".filter-link");

    filterLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const theme = this.dataset.theme;
            const allNewsCards = document.querySelectorAll(".container");

            if (theme === "all") {
                // Mostra todas as notícias
                allNewsCards.forEach((card) => {
                    card.style.display = "block";
                });
            } else {
                // Esconde todas primeiro
                allNewsCards.forEach((card) => {
                    card.style.display = "none";
                });

                // Mostra apenas as do tema selecionado
                const themeCards = document.querySelectorAll(
                    `.container.${theme}`
                );
                themeCards.forEach((card) => {
                    card.style.display = "block";
                });
            }
        });
    });
});
