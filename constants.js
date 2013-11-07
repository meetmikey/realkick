function define(name, value) {
  Object.defineProperty(exports, name, {
    value : value,
    enumerable: true
  });
}

define('DEFAULT_RESPONSE_MESSAGE', 'internal error');
define('DEFAULT_RESPONSE_CODE', 500);

define('LOG_BREAK', '\n\n\n\n\n\n\n\n');