const ipc = require('node-ipc');

ipc.config.id = 'rmq-server-simulator';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.connectTo('rmq-server', () => {
  ipc.of['rmq-server'].on('connect', () => {
    ipc.of['rmq-server'].emit('eve007', "EVE007");
    ipc.disconnect('rmq-server');
  });
});