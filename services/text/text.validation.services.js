/**
 * servicio para validacion de texto
 * @param {*} text string para validar
 * @returns
 */
exports.textValidationServices = async (text = "") => {
  try {
    //validamos si string viene vacio
    if (!text.trim().length) return { valid: false };
    //revertimos el texto
    const newText = text.split("").reverse().join("");
    //validamos si es palindromo
    const palindrome =
      newText.replace(/ /g, "").toLocaleLowerCase() ===
      text.replace(/ /g, "").toLocaleLowerCase();

    //enviamos texto y flag palindromo
    return {
      text: newText,
      palindrome,
      valid: true,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
