type formInputsType = {
  name: string;
  email: string;
  phoneNumber: string;
};
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+\d{1,4} \d{4}-\d{4}$/;
export const validateForm = ({ name, email, phoneNumber }: formInputsType) => {
  const errors: Record<string, string> = {};

  if (name.trim() === "") {
    errors.name = "This field is required";
  } else errors.name = "";
  if (email.trim() === "") {
    errors.email = "This field is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid format";
  } else errors.email = "";
  if (phoneNumber.trim() === "") {
    errors.phoneNumber = "This field is required";
  } else if (!phoneRegex.test(phoneNumber)) {
    errors.phoneNumber = "Invalid format";
  } else errors.phoneNumber = "";

  return errors;
};
