const counter = document.getElementById('counter')


const updateCounter = async () => {
  const data = await fetch('https://api.countapi.xyz/hit/raptorktm-counter/visites')
  const count = await data.json()
  counter.innerHTML = count.value
  counter.style.filter = 'blur(O)'
  console.log(count.value)

};

updateCounter();