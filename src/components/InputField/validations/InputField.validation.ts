import { InputFieldValidationsType, ValidationType } from "./InputField.validation.type";

const validateText = (value: string, regexp: RegExp): ValidationType => {
  if (regexp.test(value)) {
    return {
      isValid: true,
      validatedText: value,
    };
  } else {
    return {
      isValid: false,
      validatedText: "",
    };
  }
};

const capitalLetterValidation = (value: string): ValidationType => validateText(value, /^$|^[a-zA-Z]+$/);

const integerValidation = (value: string): ValidationType => validateText(value, /^$|^\d+$/);

const floatValidation = (value: string): ValidationType => validateText(value, /^([0-9]{1,})?(\.)?([0-9]{1,6})?$|^([0-9]{1,})?(,)?([0-9]{1,6})?$/);

const InputFieldValidations: InputFieldValidationsType = {
  capitalLetter: capitalLetterValidation,
  integer: integerValidation,
  float: floatValidation,
};

export default InputFieldValidations;
