// utils/formValidation.ts
import * as Yup from 'yup';
import { ContactFormValidation } from '../types/contactPage-Types';

export const getValidationSchema = (validation: ContactFormValidation) => {
  return Yup.object({
    name: Yup.string().required(`${validation.nameRequired}`),
    phoneNumber: Yup.string().required(`${validation.phoneNumberRequired}`),
    companyName: Yup.string().required(`${validation.companyNameRequired}`),
    jobPosition: Yup.string().required(`${validation.jobPositionRequired}`),
    email: Yup.string()
      .email(`${validation.invalidEmail}`)
      .required(`${validation.emailRequired}`),
    message: Yup.string().required(`${validation.messageRequired}`),
    over18: Yup.bool().oneOf([true], `${validation.over18Required}`),
    agreeProcessing1: Yup.bool().oneOf(
      [true],
      `${validation.agreeProcessing1Required}`
    ),
    agreeProcessing2: Yup.bool().oneOf(
      [true],
      `${validation.agreeProcessing2Required}`
    ),
  });
};
