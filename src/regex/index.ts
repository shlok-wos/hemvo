export const onlyNumberAndFlotRegex = RegExp(/^\d+(\.\d+)?$/);
export const emailRegex = RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const nameRegex = RegExp(/^[\p{L} ]{1,100}$/u);

export const urlRegex = RegExp(
  /^https?:\/\/(?:www\.)?instagram\.com\/[\w.-]+$/
);

export const numberAlphaNumericOnlyRegex = RegExp(/^[0-9a-zA-Z-]+$/);

export const nameOnlyAlphabetRegex = RegExp(/^[a-zA-Z ]+$/);

export const passwordRegex = RegExp(
  /^(?!.*\s)(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$#!^%*?&])[\p{L}\d@$#^!%*?&]*$/u
);

export const numberOnlyRegex = RegExp(/^[0-9]+$/);
