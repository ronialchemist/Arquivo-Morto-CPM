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
					<p>${file.time_course}</p>
					<p><a href=""><i class="far fa-edit"></i></a></p>
					<p><a href=""><i class="far fa-trash-alt"></i></a></p>
				</div>
      `;
    });

    $('#table').fadeIn('slow');
  } catch (e) {
    customSwal.fire({
      title: e,
      icon: 'error'
    }); 
  }
}

const create = async evt => {
  try {
    evt.preventDefault();

    const registerFormValues = [];

    selectAllElements('.registerInput').forEach(input => {
      registerFormValues.push(input.value.trim().toUpperCase());
    });

    const error = fileDataValidator(registerFormValues[0], registerFormValues[2], registerFormValues[1]);

    if (error) {
      throw error.message
    }

    const response = await fetch('http://127.0.0.1:3000/files', {
      method: 'POST',
      /*
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      */
      body: JSON.stringify({ number: ''/*registerFormValues[0]*/, name: registerFormValues[2], box: registerFormValues[1] })
    });
  } catch (e) {
    customSwal.fire({
      title: e,
      icon: 'error'
    });
  }
}

selectElement('#searchForm').addEventListener('submit', index);
selectElement('#registerForm').addEventListener('submit', create);
