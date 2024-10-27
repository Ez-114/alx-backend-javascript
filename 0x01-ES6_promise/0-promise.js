function getResponseFromaAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("API call failed"));
    }
  });
}
