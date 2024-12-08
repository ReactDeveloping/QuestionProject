const loader = document.querySelector('.loader-back')
const wrong = document.querySelectorAll('.wrong')
const correct = document.querySelector('.correct')
const btn1 = document.querySelector('.n1')
const btn2 = document.querySelector('.n2')
const btn3 = document.querySelector('.n3')
const btn4 = document.querySelector('.n4')
const btn5 = document.querySelector('.n5')
const btn6 = document.querySelector('.n6')
const btn7 = document.querySelector('.n7')
const btn8 = document.querySelector('.n8')
const btn9 = document.querySelector('.n9')
const btn10 = document.querySelector('.n10')
const btn11 = document.querySelector('.n11')
const btn12 = document.querySelector('.n12')
const btn13 = document.querySelector('.n13')
const btn14 = document.querySelector('.n14')
const btn15 = document.querySelector('.n15')
const btn16 = document.querySelector('.n16')
const btn17 = document.querySelector('.n17')
const btn18 = document.querySelector('.n18')
const btn19 = document.querySelector('.n19')
const btn20 = document.querySelector('.n20')
const btn21 = document.querySelector('.n21')
const btn22 = document.querySelector('.n22')
const btn23 = document.querySelector('.n23')
const btn24 = document.querySelector('.n24')
const btn25 = document.querySelector('.n25')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const container4 = document.querySelector('.container4')
const container5 = document.querySelector('.container5')
const container6 = document.querySelector('.container6')
const container7 = document.querySelector('.container7')
const container8 = document.querySelector('.container8')
const container9 = document.querySelector('.container9')
const container10 = document.querySelector('.container10')
const container11 = document.querySelector('.container11')
const container12 = document.querySelector('.container12')
const container13 = document.querySelector('.container13')
const container14 = document.querySelector('.container14')
const container15 = document.querySelector('.container15')
const container16 = document.querySelector('.container16')
const container17 = document.querySelector('.container17')
const container18 = document.querySelector('.container18')
const container19 = document.querySelector('.container19')
const container20 = document.querySelector('.container20')
const container21 = document.querySelector('.container21')
const container22 = document.querySelector('.container22')
const container23 = document.querySelector('.container23')
const container24 = document.querySelector('.container24')
const container25 = document.querySelector('.container25')
const cards = document.querySelectorAll('.card')
const scoreTag = document.querySelector('.score');
const cover = document.querySelector('.cover');
const result = document.querySelector('.final-score');
const screen = document.querySelector('.final');
const falseTag = document.querySelector('.false-number');
const trueTag = document.querySelector('.true-number');
const nextBtn = document.querySelectorAll('.next')

window.addEventListener('load', () => {
   loader.style.display = 'none';
});


const cardsArray = Object.values(cards)
const wrongArray = Object.values(wrong)
const nextBtnArray = Object.values(nextBtn)
let score = 0;
let trueAnswer = 0;
let falseAnswer = 0;
let check = false;
cardsArray.map((item) => {
   item.addEventListener('click', () => {
      if(item.classList[1] == 'correct') {
         item.style.backgroundColor = 'green';
         score += 4;
         result.innerHTML = score + '%';
         trueAnswer++;
         trueTag.innerHTML = trueAnswer;
         cover.style.display = 'block';
         check = true;
         nextBtnArray.map((item) => {
            item.style.backgroundColor = 'white';
         })
      } else {
         item.style.backgroundColor = 'red';
         cover.style.display = 'block';
         falseAnswer++;
         falseTag.innerHTML = falseAnswer;
         check = true;
         nextBtnArray.map((item) => {
            item.style.backgroundColor = 'white';
         })
      }
   })
})

btn1.addEventListener('click', () => {
   if(check) {
      btn2.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container.style.display = 'none';
      container2.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn2.addEventListener('click', () => {
   if(check) {
      btn3.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container2.style.display = 'none';
      container3.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn3.addEventListener('click', () => {
   if(check) {
      btn4.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container3.style.display = 'none';
      container4.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
      check = false;
   }
})

btn4.addEventListener('click', () => {
   if(check) {
      btn5.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container4.style.display = 'none';
      container5.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn5.addEventListener('click', () => {
   if(check) {
      btn6.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container5.style.display = 'none';
      container6.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn6.addEventListener('click', () => {
   if(check){
      btn7.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container6.style.display = 'none';
      container7.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn7.addEventListener('click', () => {
   if(check){
      btn8.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container7.style.display = 'none';
      container8.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn8.addEventListener('click', () => {
   if(check) {
      btn9.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container8.style.display = 'none';
      container9.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn9.addEventListener('click', () => {
   if(check) {
      btn10.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container9.style.display = 'none';
      container10.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn10.addEventListener('click', () => {
   if(check) {
      btn11.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container10.style.display = 'none';
      container11.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn11.addEventListener('click', () => {
   if (check) {
      btn12.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container11.style.display = 'none';
      container12.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn12.addEventListener('click', () => {
   if(check){
      btn13.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container12.style.display = 'none';
      container13.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn13.addEventListener('click', () => {
   if(check) {
      btn14.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container13.style.display = 'none';
      container14.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn14.addEventListener('click', () => {
   if(check) {
      btn15.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container14.style.display = 'none';
      container15.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn15.addEventListener('click', () => {
   if(check) {
      btn16.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container15.style.display = 'none';
      container16.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn16.addEventListener('click', () => {
   if(check) {
      btn17.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container16.style.display = 'none';
      container17.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn17.addEventListener('click', () => {
   if(check) {
      btn18.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container17.style.display = 'none';
      container18.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn18.addEventListener('click', () => {
   if(check) {
      btn19.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container18.style.display = 'none';
      container19.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn19.addEventListener('click', () => {
   if(check) {
      btn20.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container19.style.display = 'none';
      container20.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn20.addEventListener('click', () => {
   if(check) {
      btn21.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container20.style.display = 'none';
      container21.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn21.addEventListener('click', () => {
   if(check) {
      btn22.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container21.style.display = 'none';
      container22.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn22.addEventListener('click', () => {
   if(check) {
      btn23.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container22.style.display = 'none';
      container23.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn23.addEventListener('click', () => {
   if(check) {
      btn24.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container23.style.display = 'none';
      container24.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn24.addEventListener('click', () => {
   if(check) {
      btn25.style.backgroundColor = 'rgba(255, 255, 255, 0.301)';
      container24.style.display = 'none';
      container25.style.display = 'flex';
      cover.style.display = 'none';
      check = false;
   }
})

btn25.addEventListener('click', () => {
   if(check) {
      container25.style.display = 'none';
      screen.style.display = 'flex';
      check = false;
   }
})

function handleClick(e) {
   console.log(e);
}