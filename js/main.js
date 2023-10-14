const equal = document.querySelector('.equal')
const ok = document.querySelector('.ok')
ok.addEventListener('click', function change(){
 const mon = +document.querySelector('.mon').value
 const pod = +document.querySelector('.pod').value
 let sum1 = mon - (mon / 100 * pod)
 equal.textContent = sum1
})

const equal2 = document.querySelector('.equal2')
const ok2 = document.querySelector('.ok2')
ok2.addEventListener('click', function change(){
 const par = +document.querySelector('.par').value
 let ex1 = par % 2
 if(ex1 === 0){
  equal2.textContent = 'Число парне'
 }else {
  equal2.textContent = 'Число НЕ парне'
 }
})

const equal3 = document.querySelector('.equal3')
const ok3 = document.querySelector('.ok3')
ok3.addEventListener('click', function change(){
 const num1 = +document.querySelector('.num1').value
 const num2 = +document.querySelector('.num2').value
 if(num1 > num2){
  equal3.textContent = `${num1} більше ніж ${num2}`
 }else if (num1 < num2) {
  equal3.textContent = `${num2} більше ніж ${num1}`
 }else {
  equal3.textContent = `Числа рівні`
 }
})

const equal4 = document.querySelector('.equal4')
const select = document.getElementById('select')

select.addEventListener('change', function lvl(){
  const selectedValue = select.value
  if (selectedValue == 'admin'){
    equal4.textContent = 'Ти адмін і можешь творити усе що на думку прийде'
  }else if (selectedValue == 'user'){
    equal4.textContent = 'Ти юзер, можешь тільки користуватися усім функціоналом сайту'
  } else if (selectedValue == 'guest'){
    equal4.textContent = 'Що ти загубив тут, далекий мандрівник?'
  }else {
    alert('Error')
  }
})
