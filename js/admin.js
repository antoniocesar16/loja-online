let navProdutos = document.querySelector("a.navbar-link[href='#produtos']");
let navVendas = document.querySelector("a.navbar-link[href='#vendas']");
let navConfiguracoes = document.querySelector("a.navbar-link[href='#configuracoes']");

let card = document.getElementById("card");

navProdutos.addEventListener("click", produtosClick);
navVendas.addEventListener("click", vendasClick);
navConfiguracoes.addEventListener("click", configuracoesClick);


function produtosClick() {

    card.innerHTML = '';
    card.style.display = 'grid';
    
    let sectionProdutos = document.createElement('section');
    sectionProdutos.setAttribute('id', 'produtos');

    let btnAdicionarproduto = document.createElement('button');
    btnAdicionarproduto.innerText = 'Novo produto';
    btnAdicionarproduto.setAttribute('class', 'btn-card btn-card-right');
    btnAdicionarproduto.addEventListener('click', () => {
        // apagando os produtos.
        document.getElementById('produtos').remove();
        let sectionNovoProduto = document.createElement('section');
        let formNovoProduto = document.createElement('form');

        sectionNovoProduto.setAttribute('id', 'novoProduto');
        sectionNovoProduto.setAttribute('class', 'card-flex');
        sectionNovoProduto.appendChild(formNovoProduto)
        card.appendChild(sectionNovoProduto);

    });

    card.appendChild(btnAdicionarproduto);
    card.appendChild(sectionProdutos);

    
    // card
    let divProdutos = document.createElement('div');
    divProdutos.setAttribute('class', 'produtos');

    $.ajax({
        url: './config/produtos.php',
        method: "GET",
    }).done((produtos) => {
        // adiocionar detalhes de foto
        for(produto in produtos) {
            let detalhes = produtos[produto];
            let id = detalhes['ID'];
            let url = detalhes['url'];
            let nome_forncecedor = detalhes['nome_forncecedor'];
            let nome_produto = detalhes['nome_produto'];
            let img_path = detalhes['img_path'];
            let tipo = detalhes['tipo'];

            // produto 
            let divProduto = document.createElement('div');
            divProduto.setAttribute('class', 'produto card');

            if(document.width < 550) {
                divProduto.setAttribute('onclick', `animationCardIn(this, "${nome_forncecedor})" `);
            }
            
            divProduto.setAttribute('onmouseover', `animationCardIn(this, "${nome_forncecedor}") `);
            divProduto.setAttribute('onmouseout', 'animationCardOut(this)');
            // cardUp
            let divCardUp = document.createElement('div');
            divCardUp.setAttribute('class', 'card-up');
            divCardUp.style.display = 'none';
            divProduto.appendChild(divCardUp);

            
            // titulo
            let divTitulo = document.createElement('div');
            divTitulo.setAttribute('class', 'titulo-produto');
            let textoTitulo = document.createElement('p');
            textoTitulo.setAttribute('class', 'titulo');
            textoTitulo.innerHTML = nome_produto;
            divTitulo.appendChild(textoTitulo);
            divProduto.appendChild(divTitulo);
            // escrevendo a divProduto.
            divProdutos.appendChild(divProduto);
            sectionProdutos.appendChild(divProduto);


            //  div img do produto.
            let divImg = document.createElement('div');
            divImg.setAttribute('class', 'img-details');
            divProduto.appendChild(divImg);

            // img dentro da div com a classe Details
            let imgDetails = document.createElement('img');
            imgDetails.setAttribute('src', '../img/svg/plus.png');
            imgDetails.setAttribute('class', 'img-produto');
            divImg.appendChild(imgDetails);
            
        }
    });
}


function vendasClick() {
    document.write("vendas");
}

function configuracoesClick() {
    document.write("teste");
}


/**
 * @param {Document} element - Elemento HTML
 * @param {String} conteudoCardIn - Texto.
 */
function animationCardIn(element, conteudoCardIn) {

    element.getElementsByClassName('img-details')[0].style.display = 'none';

    let getClassCard = element.getAttribute('class');
    element.removeAttribute('class', 'card-in');
    element.setAttribute('class', `${getClassCard} card-in`);



    let tituloProduto = element.getElementsByClassName('titulo-produto')[0];
    tituloProduto.style.display = 'none';


    let divCardUp = element.getElementsByClassName('card-up')[0];
    divCardUp.style.display = 'flex';
    divCardUp.innerHTML = conteudoCardIn;
}


/**
 * @param {Document} element - Elemento HTML
 */
function animationCardOut(element) {
    
    element.getElementsByClassName('img-details')[0].style.display = 'initial';
    element.setAttribute('class', 'produto card');


    let tituloProduto = element.getElementsByClassName('titulo-produto')[0];
    tituloProduto.style.display = '';


    let divCardUp = element.getElementsByClassName('card-up')[0];
    divCardUp.style.display = 'none';
    divCardUp.innerHTML = '';
}
