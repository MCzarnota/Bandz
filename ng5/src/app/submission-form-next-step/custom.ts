export class Custom {
  // Checks if the email is unique. Return null if it's valid
  static uniqueEmail(control) {
    const db = ['maciej.czarnota@gmail.com'];

    return new Promise(resolve => {
      setTimeout(() => {
        if (db.indexOf(control.value) !== -1) {
          // its not unique
          resolve({notUnique: true});
          resolve(null);
        }
      }, 4000);
    });

  }
}
