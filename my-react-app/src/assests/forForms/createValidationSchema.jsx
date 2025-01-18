import * as Yup from "yup";

export const createValidationSchema = (fields) => {
    const schema = {};

    Object.keys(fields).forEach(field => {
      if (field === 'password') {
        schema[field] = Yup.string().max(15, "Поле превышает максимальную длину в 15 символов").required('Нельзя оставлять поле пустым!');
      } else if (field === 'email') {
        schema[field] = Yup.string().email("Указан некорректный адрес электорнной почты").required('Нельзя оставлять поле пустым!');
      } else if (field === 'rememberMe') {
        schema[field] = Yup.boolean();
			}
      // } else if (field === 'name') {
      //   schema[field] = Yup.string().required('Обязательно').max(50, "Поле превышает максимальную длину в 50 символов");
      // } else if (field === 'success') {
      //   schema[field] = Yup.string().max(200, "Поле превышает максимальную длину в 200 символов").required();
      // }
    });

    return Yup.object(schema);
  };
