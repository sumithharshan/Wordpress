$(function () { 
///===================================================	
  if($('#sgem_pretax_income').length > 0) {
    $('#sgem_pretax_income').on('keyup', function () {
      sgem_calculate_live();
      sgem_show_valueonfield();
    });
  }

//====================================================
  if($('#sgem_pretax_income,#sgem_age,#sgem_current_savings,#sgem_retirement_age,#sgem_monthly_spending,#sgem_other_expected_income,#sgem_inv_rate,#sgem_life_expectancy,#sgem_monthly_saving').length > 0) {
    $('#sgem_pretax_income,#sgem_age,#sgem_current_savings,#sgem_retirement_age,#sgem_monthly_spending,#sgem_other_expected_income,#sgem_inv_rate,#sgem_life_expectancy,#sgem_monthly_saving').on('keyup', function () {
      sgem_calculate_live();
     
    });
  }
	
//==============================================	
	// Empty field validation
   $('#sgem_pretax_income,#sgem_current_savings,#sgem_monthly_spending,#sgem_other_expected_income,#sgem_inv_rate,#sgem_life_expectancy,#sgem_monthly_saving').on('keyup', function () {
      var val = parseInt(this.value);
      if ($.trim($(this).val()) == ''){      
         this.value ='0';
         $('.sgem-err-msg').html('Field cannot be empty').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE"
      });        
  } else{
     $('.sgem-err-msg').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });
	
	
 //==================================================
	
	// Current age validation
    $('#sgem_age').on('keyup', function () {
      var val = parseInt(this.value);
      if (val > 150 || val < 0){
         
         this.value ='0';
         $('.sgem-err-msg-age').html('Age cannot be more than 150').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE"
      });        
  }else{
     $('.sgem-err-msg-age').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

	
	//================================================================
// Retirement age validation
    $('#sgem_retirement_age').on('keyup', function () {
      var current_age7     = $('#sgem_age').val().trim();
      var val = parseInt(this.value);
      if (val > 150 || val < current_age7){    
         //this.value ='0';
         $('.sgem-err-msg-rmt').html('Retirement age should be between your age '+current_age7+' and 150').fadeIn();      
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE"
      });        
  }else{
     $('.sgem-err-msg-rmt').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }   
    });


//============================================================
	 //tippy('[data-tippy-content]');
	
	tippy('.sgem-tooltip', {  
	  arrow: true, theme: 'light-border',
	  trigger: 'click', 
	});


	$('input.inputnumber').keyup(function(event) {
	  if (event.which >= 37 && event.which <= 40) return;
	  $(this).val(function(index, value) {
		return value
		  // Keep only digits and decimal points:
		  .replace(/[^\d.]/g, "")
		  // Remove duplicated decimal point, if one exists:
		  .replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
		  // Keep only two digits past the decimal point:
		  .replace(/\.(\d{2})\d+/, '.$1')
		  // Add thousands separators:
		  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	  });
	});	
	

	
}); // DOCUMENT.READY END



//jQuery('sgem-result-goal-text').addClass('pos-2').removeClass('pos-4');
$(window).load(function () {
		$('input.inputnumber').each(function(){  
		  $(this).val(function(index, value) {
			return value
			  // Keep only digits and decimal points:
			  .replace(/[^\d.]/g, "")
			  // Remove duplicated decimal point, if one exists:
			  .replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
			  // Keep only two digits past the decimal point:
			  .replace(/\.(\d{2})\d+/, '.$1')
			  // Add thousands separators:
			  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		  });
		});
});



function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	    //if (charCode == 31 && charCode > 32 && (charCode < 48 || charCode > 57)) { // for decimal
			return false;
		}
        return true;
}

// sumith
function sgem_ConvertToInternationalCurrencySystem (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}

function sgem_show_valueonfield(){

  var pT_income3    = $('#sgem_pretax_income').val().trim();
  var pT_income4 = pT_income3.replace(/\,/g,'');  
  var pT_income5 = parseInt(pT_income4,10);

    var monthly_save = (((pT_income5 / 12) / 100 ) * 10).toFixed();
       $('#sgem_monthly_saving').val(monthly_save);


 //Monthly retirement spending 
    var monthly_retirement_spending = ((pT_income5 / 100) * 51)/12;

    $('#sgem_monthly_spending').val(monthly_retirement_spending);

}

// sumith
function sgem_calculate_live(e) {
        
   var current_age     = $('#sgem_age').val().trim();
  
  var current_saving1   = $('#sgem_current_savings').val().trim();
  var current_saving2 = current_saving1.replace(/\,/g,'');  
  var current_saving = parseInt(current_saving2,10);
  
  var retirement_age  = $('#sgem_retirement_age').val().trim();
  
  var pT_income1    = $('#sgem_pretax_income').val().trim();
  var pT_income2 = pT_income1.replace(/\,/g,'');  
  var pT_income = parseInt(pT_income2,10);
  
  var monthly_save1     = $('#sgem_monthly_saving').val().trim();
  var monthly_save2 = monthly_save1.replace(/\,/g,'');
    var monthly_saver = parseInt(monthly_save2,10);    
  
  
  var monthlyretirement_spending1 = $('#sgem_monthly_spending').val().trim();
  var monthlyretirement_spending2 = monthlyretirement_spending1.replace(/\,/g,'');  
  var monthlyretirement_spending = parseInt(monthlyretirement_spending2,10);
  
  var other_income1     = $('#sgem_other_expected_income').val();
  var other_income2 = other_income1.replace(/\,/g,'');  
  var other_income = parseInt(other_income2,10);
  
   
  var invesment_rate1   = $('#sgem_inv_rate').val().trim();
  var invesment_rate  = invesment_rate1.replace('%', "");

  var inflation_rate  = 3 / 100;
  var intrest_rate_d_retirement = 5 / 100;
  var death       = $('#sgem_life_expectancy').val().trim();
  
      

      var growth_rate =  2 / 100;

   
      var one = 1;
      var aER = invesment_rate / 100;
      var no_of_years = retirement_age - current_age;
      var retirement_no_of_age = death - retirement_age;
      var oneAER = one + aER;
      let x = Math.pow(oneAER, no_of_years);
      //var w = parseFloat(x); 
      var first_one = x * current_saving;
  
      var annual_saving = monthly_saver * 12;
      var oneplusg = one + growth_rate;
      var rminusg = aER - growth_rate;
      let y = Math.pow(oneplusg, no_of_years);
      var upper_part = x - y;
      var last_part = upper_part / rminusg;
      var finalset = annual_saving * last_part;

      var you_will_have = first_one + finalset;


    
    //*********************************** Second part calculation ******************************************

      var oneplusinflation = one + inflation_rate;
      var oneplusintrestatretirement = one + intrest_rate_d_retirement;
      var real_rate_of_return = (oneplusintrestatretirement / oneplusinflation) - 1;
      let rounded_rate_of_return = parseFloat(real_rate_of_return).toFixed(3);


      var annual_retirement_spending_at_todays_term = (monthlyretirement_spending - other_income) * 12;
       
      var annual_retirement_spending_at_start1 = one + inflation_rate;
      let annual_retirement_spending_at_start2 = Math.pow(annual_retirement_spending_at_start1, no_of_years);
      var annual_retirement_spending_at_start3 = annual_retirement_spending_at_todays_term * annual_retirement_spending_at_start2;
      var annual_retirement_spending_at_start = annual_retirement_spending_at_start3;//parseFloat(annual_retirement_spending_at_start3).toFixed(2);

      var secondpart_upper_section1 = (parseFloat(one) + parseFloat(rounded_rate_of_return)).toFixed(2);
      var minus_retirement_noofyears = -retirement_no_of_age;
      let secondpart_upper_section2 = Math.pow(secondpart_upper_section1, minus_retirement_noofyears);
      var secondpart_upper_section = 1 - secondpart_upper_section2;
      
      var secondpart_lower_section = parseFloat(rounded_rate_of_return) * secondpart_upper_section1;

      var secondpart_upper_lower = secondpart_upper_section / secondpart_lower_section;

      var you_will_need2 = annual_retirement_spending_at_start * secondpart_upper_lower;
 
      var you_will_need = Math.round(you_will_need2/10000)*10000;

      
    // *********************************** Result in percentage ***********************************
      var percentage_result = ((you_will_have / you_will_need) * 100).toFixed();
    
      
      $('#sgem_age_text').text(retirement_age); 
      $('#sgem_goal_value').text(percentage_result + '%'); 
      $('#sgem_you_will_have').text(sgem_ConvertToInternationalCurrencySystem(you_will_have));
      $('#sgem_you_will_need').text(sgem_ConvertToInternationalCurrencySystem(you_will_need));
    
      $('.sgem-precentage-arrow').css("left", percentage_result+"%");


// *********************************** Color bar in percentage message ***********************************
    var message;
  
  if (percentage_result >= 76) {
       message = "Could your future be any brighter? Let’s find out. Create an account to see opportunities to grow your savings, detect hidden fees and track your future wealth.";
  } 
  else if (percentage_result >= 51) {
       message = "Just a few finishing touches and you'll be on your way. Create an account to project your wealth and find opportunities to grow your dough.";
  } 
  else if (percentage_result >= 26) {
       message = "You’re off to the races, but have some catching up to do. Sign up for NerdWallet to get a detailed forecast, a personalized plan and notifications to stay on top of your finances.";
  } 
  else {
       message = "There are a few steps you could take to jumpstart your retirement savings. Create an account to reduce your bills, eliminate debt and grow your money.";
  }

  /*var messageBox = document.getElementById('message');
  messageBox.innerHTML= message;
*/
  var messageBox = $('#sgem_message_details').html(message);
	

  
}

