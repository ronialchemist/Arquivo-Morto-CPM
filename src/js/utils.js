const selectElement = element => document.querySelector(element);

const nameValidator = (name) => {
	const schema = joi.object({
		name: joi
					.string()
					.required()
					.min(2)
					.max(40)
					.pattern(/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
					.messages({
						'string.empty': `O campo "Nome" não pode estar vazio`,
						'string.min': `O nome deve ter no mínimo 2 caracteres`,
						'string.max': `O nome deve ter no máximo 40 caracteres`,
						'string.pattern.base': `O nome não é um nome válido`
					}),
	});

	const { error } = schema.validate({ name });

	return error;
}

const customSwal = Swal.mixin({
	customClass: {
		popup: 'alert',
		icon: 'iconAlert',
		title: 'titleAlert',
		confirmButton: 'btnAlert',
	}
});
