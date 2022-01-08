exports.textValidationServices = async (text = "") => {
  try {
    if (!text.trim().length) return { valid: false };
    const newText = text.split("").reverse().join("");
    const palindrome =
      newText.replace(/ /g, "").toLocaleLowerCase() ===
      text.replace(/ /g, "").toLocaleLowerCase();

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
