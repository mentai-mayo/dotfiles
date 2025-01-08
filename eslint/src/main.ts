
/**
 * main function
 * @throws { unknown }
 */
function main(): void {
  console.log("Hello, world!");
}

// call main function
try {
  main();
} catch (e: unknown) {
  throw e;
}
