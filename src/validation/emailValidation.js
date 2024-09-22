import { EMAIL_REGEX } from '../constants/constants.js';

export default function emailValidation(email){
    return EMAIL_REGEX.test(email);
}
