let navProdutos = document.querySelector("a.navbar-link[href='#produtos']");
let navVendas = document.querySelector("a.navbar-link[href='#vendas']");
let navConfiguracoes = document.querySelector("a.navbar-link[href='#configuracoes']");

let card = document.getElementById("card");

navProdutos.addEventListener("click", produtosClick);
navVendas.addEventListener("click", vendasClick);
navConfiguracoes.addEventListener("click", configuracoesClick);


function produtosClick() {
    // no duplicates
    card.innerHTML = "";

    // span adicionar produto.
    
    // card
    let divProdutos = document.createElement('div');
    divProdutos.setAttribute("class", "produtos");

    $.ajax({
        url: './config/produtos.php',
        method: "GET",
    }).done((data) => {
        // adiocionar detalhes de foto
        let produtos = data;
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
                divProduto.setAttribute('onmouseout', 'animationCardOut(this)');
            } else {
                divProduto.setAttribute('onmouseover', 'animationCardIn(this)');
                divProduto.setAttribute('onmouseout', 'animationCardOut(this)');
            }

            // titulo
            var titulo = document.createElement('p');
            titulo.setAttribute('class', 'tituloProduto');
            titulo.innerText = nome_produto;
            divProduto.appendChild(titulo);

            // escrevendo a divProduto.
            divProdutos.appendChild(divProduto);
            card.appendChild(divProduto);

            //  div img do produto.
            var divImg = document.createElement('div');
            divImg.setAttribute('class', 'imgDetails');
            divProduto.appendChild(divImg);

            // cardUp
            var divCardUp = document.createElement('div');
            divCardUp.setAttribute('class', 'cardUp');
            // conteudo aqui
            divProduto.appendChild(divCardUp);
                        

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

    var divCardUp = element.getElementsByClassName('cardUp')[0];
    divCardUp.style.display = 'flex';
    divCardUp.style.color = 'red';
    divCardUp.innerHTML = 'display';
}


/**
 * @param {object} element - HTML element
 */
function animationCardOut(element) {
    var img = element.getElementsByClassName('imgDetails')[0].style.display = 'initial';
    element.setAttribute('class', 'produto card');


    var divCardUp = element.getElementsByClassName('cardUp')[0];
    divCardUp.style.display = 'none';
    divCardUp.innerHTML = '';
    // divCardUp.remove();
}
