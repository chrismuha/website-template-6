//Add reviews here
const reviews = [
    {
          id: 0,
          name: 'Sam Matteson',
          star: '★★★★★',
          location: 'from Google Reviews',
          img: 'https://lh3.googleusercontent.com/a-/ALV-UjV70LyuEStvLQ7z3oSwyJpmI1VUDK0eDxnVgCXG3jgJfva2EQs=s120-c-rp-mo-br100',
          text: 'Dylan and Phil have dug multiple electrical trenches for me. Being a self employed contractor I am always looking to team up with other top of the line contractors. These guys will do you right. I wouldn’t hesitate to call them and will continue to use them for my projects.',
  
      },  
      {
        id: 1,
        name: 'Sam Matssssssteson',
        star: '★★★★★',
        location: 'from Googlesssssss Reviews',
        img: 'https://lh3.googleusercontent.com/a-/ALV-UjV70LyuEStvLQ7z3oSwyJpmI1VUDK0eDxnVgCXG3jgJfva2EQs=s120-c-rp-mo-br100',
        text: 'Dylan and Phil have dug multiple electrical trenches for me. Being a self employed contractor I am always looking to team up with other top of the line contractors. These guys will do you right. I wouldn’t hesitate to call them and will continue to use them for my projects.',

        },  
    // {
    //       id: 1,
    //       name: '',
    //       star: '',
    //       img: '',
    //       text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
  
    //   },
    //   {
    //       id: 2,
    //       name: '',
    //       star: '',
    //       img: '',
    //       text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
  
    //   },
    //   {
    //       id: 3,
    //       name: '',
    //       star: '',
    //       img: '',
    //       text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
    //   },
    //   {
    //       id: 4,
    //       name: '',
    //       star: '',
    //       img: '',
    //       text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
    //   },
  ];
  
  // select items
  
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const star = document.getElementById('star');
  const info = document.getElementById('info');
  const location = document.getElementById('location');
  
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item 
  
  let currentItem = 0;
  
  // load initial item 
  window.addEventListener('DOMContentLoaded', function() {
      showPerson();
  });
  
  // show person based on item 
  
  function showPerson() {
      const item =  reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      star.textContent = item.star;
      info.textContent = item.text;
      location.textContent = item.location;
  }
  
  // show next person 
  
  nextBtn.addEventListener('click', function(){
      currentItem++;
      if (currentItem > reviews.length - 1){
          currentItem = 0;
      }
      showPerson(currentItem);
  });
  // show prev person 
  prevBtn.addEventListener('click', function(){
      currentItem--;
     if (currentItem < 0){
      currentItem = reviews.length -1;
     }
      
      showPerson(currentItem);
  });
  
  // show random person
  
  randomBtn.addEventListener('click',  function(){
      currentItem = Math.floor(Math.random() * reviews.length);
      console.log(currentItem);
      showPerson();
  });