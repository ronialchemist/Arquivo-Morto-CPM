const notFound = () => {
  document.body.innerHTML = '<h1>404 not found</h1>';
}

const route = Rlite(notFound, {
  '': () => {
	selectElement('title').textContent = 'Home';

	activateCurrentButton('#navButtonsContainer', 'li', 'homeBttn');

    const mainContainer = selectElement('#mainContainer');

    mainContainer.innerHTML = `
      <main class="grid-16 card card--home" id="homeSection" style="display: none;">
				<img class="card__logo" src="./src/img/logo.png" width="300px" height="300px" class="img-fluid">
				<h1 class="card__title card__title--name">Arquivo Morto CPM</h1>
			</main>
    `;

    $('#homeSection').fadeIn('slow');
  },

  'add': () => {
	selectElement('title').textContent = 'Cadastrar';

	activateCurrentButton('#navButtonsContainer', 'li', 'addBttn');

    const mainContainer = selectElement('#mainContainer');

    mainContainer.innerHTML = `
			<form class="grid-16 card card--cadastro" method="POST" id="addSection" style="display: none;">
				<input class="input grid-8" name="cadNum" type="text" placeholder="Nº">
				<input class="input grid-8" name="cadBox" type="text" placeholder="Caixa">
				<input class="input grid-12" name="cadName" type="text" placeholder="Nome">
				<button class="btn grid-4" name="cadastrar" type="submit">Cadastrar</button>
			</form>
    `;

    $('#addSection').fadeIn('slow');
  },

  'search': () => {
	selectElement('title').textContent = 'Buscar';

	activateCurrentButton('#navButtonsContainer', 'li', 'searchBttn');
    const mainContainer = selectElement('#mainContainer');

    mainContainer.innerHTML = `
			<form class="grid-16 card card--search searchSection" method="POST" style="display: none;">
				<input class="input grid-12" name="nome" type="text" placeholder="Nome">
				<button class="btn grid-4" name="buscar" type="submit">Buscar</button>
			</form>


			<div class="grid-16 card searchSection" style="display: none;">
				<div class="table">
					<div class="table__header">
						<p>Nº</p>
						<p>Nome</p>
						<p>Caixa</p>
						<p>Editar</p>
					</div>
					<div class="table__body" id="tableBody">
						<div class="table__row">
							<p>01</p>
							<p>Higor Cardoso Silva Gostosão da Pombona</p>
							<p>01A</p>
							<p align="center"><a href=""><i class="far fa-edit"></i></a></p>
						</div>
						<div class="table__row">
							<p>03</p>
							<p>Ronildo Ribeiro de Almeida</p>
							<p>02B</p>
							<p align="center"><a href=""><i class="far fa-edit"></i></a></p>
						</div>
						<div class="table__row">
							<p>05</p>
							<p>Diogo Mendes Barbosa</p>
							<p>03C</p>
							<p align="center"><a href=""><i class="far fa-edit"></i></a></p>
						</div>
					</div>
				</div>
				<div class="table__nav">
					<div class="grid-5">
						<a class='btn' href="">Anterior</a>
						<button type="button" class="btn" disabled>Anterior</button>
					</div>
					<div class="grid-5">
						<a  class='btn' href="">Próximo</a>
						<button type="button" class="btn" disabled>Próximo</button>
					</div>
				</div>
			</div>
    `;

    $('.searchSection').fadeIn('slow');
  }
});

const processHash = () => {
  const hash = location.hash || '#';
  route(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();