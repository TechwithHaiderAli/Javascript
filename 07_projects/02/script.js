const form = document.querySelector('form')
// empty values if values of weight and height taken outside the event
form.addEventListener('submit',function(e){
    e.preventDefault()
  const height=  parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=(document.querySelector('#result'))
    if(height==="" || height < 0 || isNaN(height) ){
        result.innerHTML=`Please give Valid Height ${height}`
    }
    else if(weight==="" || height < 0 || isNaN(height) ){
        result.innerHTML=`Please give Valid Height ${weight}`
    }
    else{
        const bmi =(weight / ((height*height)/10000)).toFixed(2)
   
        result.innerHTML=`<span>${bmi}</span>`
    }
    

});
