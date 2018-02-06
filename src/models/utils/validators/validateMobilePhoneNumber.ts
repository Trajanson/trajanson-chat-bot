import { isMobilePhone } from "validator";

export const validateMobilePhoneNumber = (phoneNumber: string) => {
    return isMobilePhone(phoneNumber, "en-US");
};
