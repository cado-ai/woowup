process.on('unhandledRejection', (error) => {
  console.log(`Error unhandledRejection => ${JSON.stringify(error)}`)
  throw error;
});

process.on('uncaughtException', (error) => {
  console.log("Error uncaughtException pilas...")
  console.log(error)
  console.log(`Error uncaughtException => ${error.message}`)
});
