import jwt from "jsonwebtoken";

export function generateTokenCb(email, doneFn) {
  jwt.sign({ email }, "mysecret123", doneFn);
}

const promisifyJwt = (fn) => (email, secretKey) =>
  new Promise((resolve, reject) => {
    fn({ email }, secretKey, (err, token) => {
      if (err) reject(err);
      if (token) resolve(token);
    });
  });

export function generateTokenPromise(email, secretKey) {
  return promisifyJwt(jwt.sign)(email, secretKey);
}
