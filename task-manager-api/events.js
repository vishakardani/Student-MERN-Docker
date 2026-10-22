const EventEmitter = require('events');

// Extend EventEmitter to build a dedicated event bus instance
class TaskEventEmitter extends EventEmitter {}

const taskEvents = new TaskEventEmitter();

module.exports = taskEvents;