const express = require('express'); 

const app = express(); 
app.use(express.json()); 

app.get('/bin', (request, response) =>  {
  const {binary} = request.body; 

  var bin2int = s => Array.prototype.reduce.call(s, (p,c) => p*2 + +c)
  console.log(bin2int(binary));

  return response.status(200).json(bin2int(binary))
}); 

app.listen(3333, () => {
  console.log('start application')
}); 