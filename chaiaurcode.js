const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
  if(height==='' || height <0 || isNaN(height)){
    results.innerHTML="please enter a valid height"
  }
   else if(weight==='' || weight <0 || isNaN(weight)){
    results.innerHTML="please enter a valid weight"
  }
  else{
    const bmi = weight * 10000 /(height * height)
    results.innerHTML=`<span> ${bmi} </span>`
  }


})
