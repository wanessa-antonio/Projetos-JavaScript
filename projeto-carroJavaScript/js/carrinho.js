var valorTotal = [0, 0, 0, 0, 0, 0, 0, 0];
var valorProduto = [50.00, 30.00, 40.00, 60.00, 70.00, 45.00, 65.00, 75.00];
var qtd = [0, 0, 0, 0, 0, 0, 0, 0];
var totalCompra = 0;


if (localStorage.getItem('carrinho')) {
  var carrinho = JSON.parse(localStorage.getItem('carrinho'));
  qtd = carrinho.qtd;
  valorTotal = carrinho.valorTotal;
  totalCompra = carrinho.totalCompra;
} else {
  var carrinho = {
    qtd: qtd,
    valorTotal: valorTotal,
    totalCompra: totalCompra
  };
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function adicionarItem(item) {
  var quantidade = document.getElementById('quantidade' + item);
  var total = document.getElementById('total' + item);
  qtd[item] += 1;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  valorCompra();

  // Atualizar os dados no localStorage
  carrinho.qtd = qtd;
  carrinho.valorTotal = valorTotal;
  carrinho.totalCompra = totalCompra;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function removerItem(item) {
  if (qtd[item] > 0) {
    qtd[item] -= 1;
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();

    // Atualizar os dados no localStorage
    carrinho.qtd = qtd;
    carrinho.valorTotal = valorTotal;
    carrinho.totalCompra = totalCompra;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }
}

function valorCompra() {
  var valorTotalCompra = document.getElementById('valorTotalCompra');
  var valor = 0;

  for (var i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }

  totalCompra = valor;
  valorTotalCompra.innerHTML = totalCompra.toFixed(2);

  // Atualizar os dados no localStorage
  carrinho.totalCompra = totalCompra;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

