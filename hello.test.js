const holaMundo = require('./hello');

test('Debe retornar "Hola Mundo!"', () => {
  expect(holaMundo()).toBe("Hola Mundo!");
});
