exports.textValidationServices = async (text = "") => {
  try {
    if (!text.trim().length) return { valid: false };
    const newText = text.split("").reverse().join("");

    return {
      text: newText,
      valid: true,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
