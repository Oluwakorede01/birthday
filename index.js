function myFunction(){
  const randomNumber = Math.random();
  let computerMove;
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = '🏆🏆🏆';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = '🥇🥇🥇';
  }
  
  else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = '🥲🥲🥲';
  }
  
  let result;
   if(computerMove === '🏆🏆🏆'){
    result = "YOU JUST WON free access to joining WAGMI trading platform VIP channel!  kindly take a screenshot of this and submit when you join WAGMI channel below 👇👇.";
   }
   else if( computerMove === '🥇🥇🥇'){
    result = 'YOU JUST WON A GIFT FROM K-FIT! 😍😍 take a screenshot of this, join WAGMI below 👇👇 and send the screenshot as prove'
   }
  else if (computerMove === '🥲🥲🥲'){
    result = 'TRY AGAIN NEXT YEAR 😞😞'
  }
  alert(`YOU JUST PARTICIPATED IN K-FIT BIRTHDAY GIVEAWAYS!! ${computerMove},${result}`);
  document.getElementById('btn').addEventListener('click', function showAlertOnce(){
    alert('click has expire!');
    this.disabled = true;
  })
  
  }
  
  
  