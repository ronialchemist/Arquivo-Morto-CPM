const index = async evt => {
  try {
    evt.preventDefault();

    const name = selectElement('#searchInputName')
                        .value
                        .trim()
                        .toUpperCase()
                        .replace(/ /g, '+');

    const getFilesUrl = `http://127.0.0.1:3000/files?name=${name}`;

    const error = nameValidator(name.replace(/\+/g, ' '));

    if (error) {
      throw error.message;
    }

    const response = await fetch(getFilesUrl);

    const bodyData = await response.json(); 

    if (bodyData.length === 0) {
      throw 'nenhum arquivo encontrado';
    }

    selectElement('#tableBody').innerHTML = '';
    selectElement('#table').setAttribute('style', 'display: none');

    bodyData.forEach(file => {
      selectElement('#tableBody').innerHTML += `
			  <div class="table__row">
				  <p>${file.number}</p>
					<p>${file.name}</p>
					<p>${file.box}</p>
					<p><a href=""><i class="far fa-edit"></i></a></p>
				</div>
      `;
    });

    $('#table').fadeIn('slow');
  } catch (e) {
    customSwal.fire({
      title: "Ops! Nenhum aluno encontrado.",
      icon: 'error'
    }); 
  }
}

selectElement('#searchForm').addEventListener('submit', index);
