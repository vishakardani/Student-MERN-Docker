const taskEvents = require('./events');

// 1. Listener for 'task-created' event
taskEvents.on('task-created', (task) => {
  // Simulate a background process (e.g., sending an email) with a 2-second delay
  setTimeout(() => {
    try {
      console.log(
        `[NOTIFICATION LOG] Task "${task.title || 'Untitled'}" processed asynchronously at ${new Date().toISOString()}`
      );
    } catch (err) {
      taskEvents.emit('error', err);
    }
  }, 2000);
});

// 2. Listener for 'task-deleted' event
taskEvents.on('task-deleted', (taskId) => {
  setTimeout(() => {
    console.log(
      `[NOTIFICATION LOG] Task ID ${taskId} deletion processed asynchronously at ${new Date().toISOString()}`
    );
  }, 1000);
});

// 3. Global Error Listener (Prevents unhandled error crashes)
taskEvents.on('error', (err) => {
  console.error(`[EVENT ERROR LOG] Background handler encountered error:`, err.message);
});