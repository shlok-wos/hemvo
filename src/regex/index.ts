export const onlyNumberAndFlotRegex = RegExp(/^\d+(\.\d+)?$/);
export const emailRegex = RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const nameRegex = RegExp(/^([a-zA-Z ]){1,100}$/i);

export const urlRegex = RegExp(
  /^https?:\/\/(?:www\.)?instagram\.com\/[\w.-]+$/
);

export const numberAlphaNumericOnlyRegex = RegExp(/^[0-9a-zA-Z-]+$/);

export const nameOnlyAlphabetRegex = RegExp(/^[a-zA-Z ]+$/);

export const passwordRegex = RegExp(
  /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!^%*?&])[A-Za-z\d@$#^!%*?&]*$/
);

export const numberOnlyRegex = RegExp(/^[0-9]+$/);
