let navProdutos = document.querySelector("a.navbar-link[href='#produtos']");
let navVendas = document.querySelector("a.navbar-link[href='#vendas']");
let navConfiguracoes = document.querySelector("a.navbar-link[href='#configuracoes']");

let card = document.getElementById("card");

navProdutos.addEventListener("click", produtosClick);
navVendas.addEventListener("click", vendasClick);
navConfiguracoes.addEventListener("click", configuracoesClick);


function produtosClick() {
    // no duplicates
    card.innerHTML = '';
    card.style.display = 'grid';

    // span adicionar produto.
    
    // card
    let divProdutos = document.createElement('div');
    divProdutos.setAttribute("class", "produtos");

    $.ajax({
        url: './config/produtos.php',
        method: "GET",
    }).done((produtos) => {
        // adiocionar detalhes de foto
        for(produto in produtos) {
            var detalhes = produtos[produto];
            var id = detalhes['ID'];
            var url = detalhes['url'];
            var nome_forncecedor = detalhes['nome_forncecedor'];
            var nome_produto = detalhes['nome_produto'];
            var img_path = detalhes['img_path'];
            var tipo = detalhes['tipo'];

            // produto 
            var divProduto = document.createElement('div');
            divProduto.setAttribute('class', 'produto card');

            if(document.width < 550) {
                divProduto.setAttribute('onclick', 'animationCardIn(this)');
            }
            divProduto.setAttribute('onmouseover', 'animationCardIn(this)');
            divProduto.setAttribute('onmouseout', 'animationCardOut(this)');

            // cardUp
            var divCardUp = document.createElement('div');
            divCardUp.setAttribute('class', 'cardUp');
            divCardUp.style.display = 'none';
            // conteudo aqui
            divProduto.appendChild(divCardUp);
                        

            // titulo
            var titulo = document.createElement('div');
            titulo.setAttribute('class', 'tituloProduto');
            titulo.style.color = 'black';
            titulo.innerHTML = '<p class="titulo">teste</p>';
            divProduto.appendChild(titulo);

            // escrevendo a divProduto.
            divProdutos.appendChild(divProduto);
            card.appendChild(divProduto);

            //  div img do produto.
            var divImg = document.createElement('div');
            divImg.setAttribute('class', 'imgDetails');
            divProduto.appendChild(divImg);
 

            // img dentro da div com a classe Details
            var imgDetails = document.createElement('img');
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
 * @param {object} element - HTML element
 */
function animationCardIn(element) {
    
    var getClassCard = element.getAttribute('class');
    element.removeAttribute('class', 'cardIn');
    element.setAttribute('class', `${getClassCard} cardIn`);

    var img = element.getElementsByClassName('imgDetails')[0].style.display = 'none';

    var tituloProduto = element.getElementsByClassName('tituloProduto')[0];
    tituloProduto.style.display = 'none';

    var divCardUp = element.getElementsByClassName('cardUp')[0];
    divCardUp.style.display = 'flex';
    divCardUp.style.color = 'white';
    divCardUp.style.fontSize = '20pt'
    divCardUp.innerHTML = 'conteudo do card! adasdasdsadsdasdsadsadasdasdasdasdasdsadsadsadsad';
}


/**
 * @param {object} element - HTML element
 */
function animationCardOut(element) {
    var img = element.getElementsByClassName('imgDetails')[0].style.display = 'initial';
    element.setAttribute('class', 'produto card');

    var tituloProduto = element.getElementsByClassName('tituloProduto')[0];
    tituloProduto.style.display = '';

    var divCardUp = element.getElementsByClassName('cardUp')[0];
    divCardUp.style.display = 'none';
    divCardUp.innerHTML = '';
}
