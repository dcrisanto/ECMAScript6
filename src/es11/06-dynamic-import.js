const btn = document.getElementById('btn');
btn.addEventListener('click', async () => {
  const module = await import('./module.js');
  console.log(module);
  module.hello();
})
