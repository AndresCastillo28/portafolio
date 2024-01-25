export const validateForm = (form) => {
  const newErrors = {};

  // Validar el campo 'name'
  if (!form.name.trim()) {
    newErrors.name = "Please enter your name";
  }

  // Validar el campo 'email'
  if (!form.email.trim()) {
    newErrors.email = "Please enter your email";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Please enter a valid email";
  }

  // Validar el campo 'message'
  if (!form.message.trim()) {
    newErrors.message = "Please enter a message";
  }

  // Devuelve true si no hay errores, de lo contrario, devuelve false
  return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
};
