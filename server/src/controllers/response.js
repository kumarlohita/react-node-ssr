// res = will be coming from controller
// error = Boolean
// payload = Object
export const SEND = (res, error, payload) => {
  res.send({ error, data: payload });
};
