const NoDataAvailable = () => {
  const err = new Error("No data available!");
  err.status = 404;
  throw err;
};


module.exports = {
  NoDataAvailable,
};
