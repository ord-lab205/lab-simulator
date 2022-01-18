const SCHEME = process.env.SCHEME || "http";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;

exports.config__server_info = {
  SCHEME,
  HOST,
  PORT,
};

exports.server_url = `${SCHEME}://${HOST}:${PORT}/`;
