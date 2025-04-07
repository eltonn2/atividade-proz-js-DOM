// Método simples para adicionar o título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Bem-vindo ao Nosso Site!';
document.body.appendChild(titulo);

// Método complexo para adicionar o produto
const produto = document.createElement('div'); // Container do produto
produto.id = 'produto';

// Criando os elementos filhos
const nome = document.createElement('h2');
nome.innerText = 'Produto: SuperGadget Z300';

const descricao = document.createElement('p');
descricao.innerText = 'Um gadget futurista que combina tecnologia de ponta com design elegante.';

const preco = document.createElement('p');
preco.innerHTML = '<strong>Preço:</strong> R$ 3.799,00';

// Adicionando uma imagem fictícia da internet
const imagem = document.createElement('img');
imagem.src = 'https://via.placeholder.com/300x200'; // Link para uma imagem genérica
imagem.alt = 'Imagem do SuperGadget Z300';

// Adicionando os filhos ao container do produto
produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);
produto.appendChild(imagem);

// Adicionando o container ao corpo da página
document.body.appendChild(produto);