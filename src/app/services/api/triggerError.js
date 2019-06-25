import errorMessages from './errorMessages';

export default (errorConfig, apiError) => {
  if (errorConfig.show === false) return;
  const toastTitle = errorMessages.default.title;
  let toastMessage = errorMessages.default.message;
  if (errorConfig && errorConfig.message) {
    toastMessage = errorConfig.message;
  } else if (apiError.reference && errorMessages[apiError.reference]) {
    toastMessage = errorMessages[apiError.reference];
  }
  // Will update when messaging system is inplace
  console.warn({ title: toastTitle, message: toastMessage, variant: 'error' });
};
