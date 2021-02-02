//Bring in counters
//querySelectorALL & not just querySelector because we want to slelct all

const counters = document.querySelectorAll('.counter');

//Incriment to start the count for counter

const speed = 250; //lower makes it faster & vice versa

counters.forEach(counter => { //getting info for the target attribute to implement into the counter. Follower amount for twitter, # of Likes for Facebook,etc.
  const updateCount = () => {
  const target = +counter.getAttribute('data-target'); //use +counter because  will give a number
  const count = +counter.innerText;

  //Get the actual Incriment by counting up until it reaches the target number (functionality)
  const inc = target / speed;

    if(count < target) {
      counter.innerText = count + inc; //if it has not reached target number, increase Incriment
      setTimeout(updateCount, 1); //counting by 1 milli-second interval
    } else {
      count.innerText = target;
    }
}

updateCount();
});
