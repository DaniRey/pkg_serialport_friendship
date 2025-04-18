const ModbusRTU = require("modbus-serial");

const client = new ModbusRTU();
console.log(client.getID());

console.log('Happy developing ✨');