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
    btnAdicionarproduto.setAttribute('id', 'btnCard')
    btnAdicionarproduto.addEventListener('click', () => {
        document.getElementById('produtos').innerHTML = ''; // apagando os produtos.
        let divNovoProduto = document.createElement('div');
        let formNovoProduto = document.createElement('form');
        divNovoProduto.setAttribute('class', 'card');
        divNovoProduto.appendChild(formNovoProduto);

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
            divCardUp.setAttribute('class', 'cardUp');
            divCardUp.style.display = 'none';
            divProduto.appendChild(divCardUp);

            
            // titulo
            let divTitulo = document.createElement('div');
            divTitulo.setAttribute('class', 'tituloProduto');
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
            divImg.setAttribute('class', 'imgDetails');
            divProduto.appendChild(divImg);

            // img dentro da div com a classe Details
            let imgDetails = document.createElement('img');
            imgDetails.setAttribute('src', '../img/svg/plus.png');
            imgDetails.setAttribute('class', 'imgProduto');
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

    element.getElementsByClassName('imgDetails')[0].style.display = 'none';

    let getClassCard = element.getAttribute('class');
    element.removeAttribute('class', 'cardIn');
    element.setAttribute('class', `${getClassCard} cardIn`);



    let tituloProduto = element.getElementsByClassName('tituloProduto')[0];
    tituloProduto.style.display = 'none';


    let divCardUp = element.getElementsByClassName('cardUp')[0];
    divCardUp.style.display = 'flex';
    divCardUp.innerHTML = conteudoCardIn;
}


/**
 * @param {Document} element - Elemento HTML
 */
function animationCardOut(element) {
    
    element.getElementsByClassName('imgDetails')[0].style.display = 'initial';
    element.setAttribute('class', 'produto card');


    let tituloProduto = element.getElementsByClassName('tituloProduto')[0];
    tituloProduto.style.display = '';


    let divCardUp = element.getElementsByClassName('cardUp')[0];
    divCardUp.style.display = 'none';
    divCardUp.innerHTML = '';
}
