import { InputFieldModeType } from "../InputField.type";

type ValidationFalseType = {
  isValid: false;
  validatedText: "";
};

type ValidationTrueType = {
  isValid: true;
  validatedText: string;
};

export type ValidationType = ValidationFalseType | ValidationTrueType;

export type InputFieldValidationsType = {
  [key in InputFieldModeType]: (value: string) => ValidationType;
};
