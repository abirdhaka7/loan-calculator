

//listen for  submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide Result
  document.getElementById('results').style.display = 'none';

  //Show Loader
  document.getElementById('loading').style.display = 'block';


  setTimeout(calculateRasults, 2000);

  e.preventDefault();
})


//Calculate Results

function calculateRasults(){

  //ui variables

  const amount          = document.getElementById('amount');
  const interest        = document.getElementById('interest');
  const years           = document.getElementById('years');
  const monthlyPayment  = document.getElementById('monthly-payment');
  const totalPayment    = document.getElementById('total-payment');
  const totalInterest   = document.getElementById('total-interest');
  

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100 /10;
  const calculatedPayment = parseFloat(years.value)*12;
 

  //Compute monthly payment

  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed();
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed();

    //show result
    document.getElementById('results').style.display = 'block';

    //hide Loader
    document.getElementById('loading').style.display = 'none';
  }else{
   
      showError('Check The Number Correctly');
  }

  //e.preventDefault();
}


//Show error

function showError(error){

      //show result
      document.getElementById('results').style.display = 'none';

      //hide Loader
      document.getElementById('loading').style.display = 'none';

  //create div

  const errorDiv = document.createElement('div');

  //Get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //add class
  errorDiv.className = 'alert alert-danger';

  //create text node append to div

  errorDiv.appendChild(document.createTextNode(error))

  //Insert Error avobe heading
  card.insertBefore(errorDiv, heading);

  //clerar error
  setTimeout(clearError, 3000);
   
}

function clearError(){
  document.querySelector('.alert').remove();
}