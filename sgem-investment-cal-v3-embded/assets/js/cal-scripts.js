var sgem_main_contents = '<div class="sgem-cal-wrapper">' +
	'<div class="sgem-cal-left">' +
	'<div class="sgem-form sgem-cal-1">' +
	'<div class="sgem-flex-container">' +
	'<div class="sgem-form-group sgem-form-flex sgem-years-holder">' +
	'<label>My age is</label>' +
	'<input type="text" id="sgem_age" value="35" min="0" max="150" onkeypress="return isNumber(event)"/>' +
	'<span class="sgem-err-msg-age"></span></div>' +
	'<div class="sgem-form-group sgem-form-flex sgem-years-holder">' +
	'<label>Retirement age</label>' +
	'<input type="text" id="sgem_retirement_age" value="67" min="0" max="150" onkeypress="return isNumber(event)"/>' +
	'<span class="sgem-err-msg-rmt"></span></div></div>' +
	'<div class="sgem-flex-container">' +
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">' +
	'<label>My Pre-tax income is</label>' +
	'<input type="text"class="inputmove inputnumber" id="sgem_pretax_income" value="60,000" min="0" max="100000" onkeypress="return isNumber(event)" />' +
	'<span class="sgem-err-msg-income"></span></div>' +
		'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">' +
		'<label>Current savings I have <span class="sgem-tooltip tooltip" data-tippy-content="Include your total savings and spouse\'s Income">?</span></label>' +
		'<input type="text" class="inputmove inputnumber"  id="sgem_current_savings" value="30,000" min="0" max="50000000" onkeypress="return isNumber(event)"/>' +
			'<span class="sgem-err-msg-current"></span></div></div>'+
	'<div class="sgem-flex-container">'+
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">'+
	'<label>Every month I save <span class="sgem-tooltip tooltip" data-tippy-content="This is the amount invested each month. We recommend to start investing 10% of your paycheck and gradually build it to 15% or more. Include the amount your employee matches, if any.">?</span></label>'+
	'<input type="text" class="inputmove inputnumber"  id="sgem_monthly_saving" value="500" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
	'<span class="sgem-percentage-note">10% of my monthly income</span></div>'+
	'<div class="sgem-form-group sgem-form-flex"> </div></div>'+
'<details class="sgem-input-more-details"><summary><div>'+
'<h3 class="sgem-collapsible-summary-title">Optional</h3></div></summary>'+
'<div class="collapsible-content">'+
	'<div class="sgem-flex-container">'+
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">'+
	'<label>Monthly spending <span class="sgem-tooltip tooltip" data-tippy-content="Living on 70% of current income (savings, investments, social security, pension) would be the rule of thumb">?</span></label>'+
	'<input type="text" id="sgem_monthly_spending" class="inputnumber" value="2,550" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
'<span class="sgem-percentage-note">70% of pre-retirement income</span></div>'+
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">'+
	'<label>Other expected income <span class="sgem-tooltip tooltip" data-tippy-content="Include any other expected retirement income such as social security, pension etc">?</span></label>'+
'<input type="text" id="sgem_other_expected_income" class="inputnumber" value="0" min="0" max="100000" onkeypress="return isNumber(event)"/></div></div>'+
	'<div class="sgem-flex-container">'+
	' <div class="sgem-form-group sgem-form-flex">'+
	'<label>Life expectancy <span class="sgem-tooltip tooltip" data-tippy-content="It would be wise to plan for a long retirement since people are living longer and healthier due to advancement in medicine and technology.">?</span></label>'+
	'<input type="text" id="sgem_life_expectancy" class="inputnumber" value="95" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
	'<span class="sgem-err-msg-death"></span></div>'+
      '<div class="sgem-form-group sgem-form-flex">'+
      '<label>Investment rate of return <span class="sgem-tooltip tooltip" data-tippy-content="Based on historic returns, our estimate for average annual return is 6%. What is your expected earning on investment between now and retirement?">?</span></label>'+
          '<input type="text" id="sgem_inv_rate" class="inputnumber" value="6" min="0" max="50" onkeypress="return isNumber(event)"/>'+
          '<span class="sgem-err-msg-per"></span></div></div></div></details>'+
          ' <span class="sgem-err-msg"></span></div></div>'+
         '<div class="sgem-cal-right">'+
	'<div class="sgem-cal-1-result-wrapper">'+
        '<div class="sgem-cal-1-result-header"> HOW MUCH WILL YOU NEED TO RETIRE AT <span id="sgem_age_text">67</span>? </div>'+
        '<div class="sgem-flex-container sgem-column2">'+
          '<div class="sgem-form-group sgem-form-flex"> <div id="futureV" class="sgem-result-label">$<span id="sgem_you_will_have">0.87M</span></div> <span class="futuretext sgem-result-value">You will have about</span></div>'+
  '<div class="sgem-form-group sgem-form-flex "> <div id="futureV2" class="sgem-result-label">$<span id="sgem_you_will_need">1.12M</span></div> <span class="futuretext2 sgem-result-value">You will need about</span></div></div>'+
'<div class="sgem-cal-1-result">'+
  '<div class="sgem-result-panel">'+
    '<div class="sgem-result-panel-header"> RETIREMENT SAVINGS SCORE </div>'+
    '<div class="sgem-result-panel-goal">'+
  '<div class="sgem-result-goal-text pos-2">'+
  'You are <span id="sgem_goal_value">56%</span> to goal</div></div>'+
  '<div class="sgem-flex-container-2 sgem-result-score-panel">'+
    '<span class="sgem-precentage-arrow"></span>'+
      '<div class="sgem-form-group sgem-form-flex-2 sgem-form-flex-needAtt tooltip sgem-goal-tooltip active" data-tippy-content="Needs attention <br><span class=\'sgem-goal-tooltip-range-to-NeedAtt\'> < 65% to goal</span>">'+
	'<div class="sgem-needAtt sgem-result-score-label"> Need Attention </div></div>'+
      '<div class="sgem-form-group sgem-form-flex-2 sgem-form-flex-onWay tooltip sgem-goal-tooltip" data-tippy-content="On your way <br><span class=\'sgem-goal-tooltip-range-to-onWay\'> 65-80% to goal</span>">'+
    '<div class="sgem-onWay sgem-result-score-label"> On your way </div> </div>'+   
          '<div class="sgem-form-group sgem-form-flex-2 sgem-form-flex-getClose tooltip sgem-goal-tooltip" data-tippy-content="Getting close <br><span class=\'sgem-goal-tooltip-range-to-getClose\'> 80-95% to goal</span>">'+
      '<div class="sgem-getClose sgem-result-score-label"> Getting close </div></div>'+
        '<div class="sgem-form-group sgem-form-flex-2 sgem-form-flex-onTrack tooltip sgem-goal-tooltip" data-tippy-content="On track <br><span class=\'sgem-goal-tooltip-range-to-onTrack\'> > 95% to goal</span>">'+
     '<div class="sgem-onTrack sgem-result-score-label"> On track </div></div></div></div></div>'+
        '<div class="sgem-cal-1-result-footer">'+
      '<div id="messagetitle">'+
      'Let\'s get Future You </div> <div id="mainmessage">out of the red.</div>'+
        //'<div id="message">There are a few steps you could take to jumpstart your retirement savings. Create an account to reduce your bills, eliminate debt and grow your money.</div>'+
     '<div class="sgem-cal-static-text">Spend retirement with more. Enjoy monthly income through retirement with the confidence your savings will last.</div>'+
	 '<a href="https://retirementinvestments.com/retirable" target="_blank" class="sgem-getStart">GET STARTED</a></div></div>'+
      '<div class="sgem-logo-center">Retirement calculator by'+
        '<a class="sgem-logo-image" href="https://retirementinvestments.com/" target="_blank" rel="noopener">'+
      '<img src="/wp-content/plugins/sgem-investment-cal/assets/images/Retirement-Investments-8.png" alt="Retirement calculator Logo" /></a></div></div></div></div>';


 $(function () { 
	$('#sgem-retirement-cal-main-id').html(sgem_main_contents);
	tippy('.sgem-goal-tooltip', {animation: 'sacle',theme: 'sgem-goal', boundary: 'viewport',allowHTML: true,arrow: true,placement: 'top',size:'large',trigger: 'click',  });
    tippy('.sgem-tooltip', {animation: 'sacle',theme: 'light-border', boundary: 'viewport',allowHTML: true,arrow: true,placement: 'top',size:'large',trigger: 'click',  });

///===================================================	
  if($('#sgem_pretax_income').length > 0) {
    $('#sgem_pretax_income').on('keyup', function () {
      sgem_calculate_live();
      sgem_show_valueonfield();
		
		 // Removing front zero
      this.value=this.value.replace(/^0+/, '');
        // Keep only digits and decimal points:
      this.value=this.value.replace(/[^\d.]/g, "")
      // Remove duplicated decimal point, if one exists:
      this.value=this.value.replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
      // Keep only two digits past the decimal point:
      this.value=this.value.replace(/\.(\d{0})\d+/, '')
      // Add thousands separators:
      this.value=this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  }

//====================================================
  if($('#sgem_pretax_income,#sgem_age,#sgem_current_savings,#sgem_retirement_age,#sgem_monthly_spending,#sgem_other_expected_income,#sgem_inv_rate,#sgem_life_expectancy,#sgem_monthly_saving').length > 0) {
    $('#sgem_pretax_income,#sgem_age,#sgem_current_savings,#sgem_retirement_age,#sgem_monthly_spending,#sgem_other_expected_income,#sgem_inv_rate,#sgem_life_expectancy,#sgem_monthly_saving').on('keyup', function () {
      sgem_calculate_live();
		
	 // Removing front zero
      this.value=this.value.replace(/^0+/, '');
        // Keep only digits and decimal points:
      this.value=this.value.replace(/[^\d.]/g, "")
      // Remove duplicated decimal point, if one exists:
      this.value=this.value.replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
      // Keep only two digits past the decimal point:
      this.value=this.value.replace(/\.(\d{0})\d+/, '')
      // Add thousands separators:
      this.value=this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
     
    });
  }
	
//==============================================	
	// Empty field validation
    $('#sgem_pretax_income,#sgem_current_savings,#sgem_monthly_spending,#sgem_inv_rate,#sgem_life_expectancy,#sgem_monthly_saving').on('keyup', function () {
      var val = this.value;
      if ($.trim($(this).val()) == ''){      
         this.value ='';
         $('.sgem-err-msg').html('Field cannot be empty').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE"
      });   

  }else{
     $('.sgem-err-msg').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

    // other expected field validation
    $('#sgem_other_expected_income').on('keyup', function () {
      var val = this.value;
      if ($.trim($(this).val()) == ''){      
         this.value ='';

  }    
    });

// current saving validation
    $('#sgem_current_savings').on('keyup', function () {
      var val = this.value;
      if ($(this).val().length>11){
         
         this.value ='';
         $('.sgem-err-msg-current').html('Must be at most $900,000,000').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-err-msg-current').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

// pre income validation
    $('#sgem_pretax_income').on('keyup', function () {
      var val = this.value;
      if ($(this).val().length>9){
         
         this.value ='';
         $('.sgem-err-msg-income').html('Must be at most $9,000,000').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-err-msg-income').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

// Investment rate validtion
    $('#sgem_inv_rate').on('keyup', function () {
      var val = this.value;
      if (val > 15 ){
         
         this.value ='';
         $('.sgem-err-msg-per').html('Investment rate of return connot be more than 15%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('.sgem-err-msg-per').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

// Death age validation
    $('#sgem_life_expectancy').on('keyup', function () {
       var retirement_age7     = $('#sgem_retirement_age').val().trim();
      var val = this.value;
      if ($(this).val().length>2 || val < retirement_age7){
         
         this.value ='';
         $('.sgem-err-msg-death').html('Life expectancy cannot be more than 100 and less than retirement age').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-err-msg-death').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

// Current age validation
    $('#sgem_age').on('keyup', function () {
       var retirement_age7     = $('#sgem_retirement_age').val().trim();
      var val = this.value;
      if ($(this).val().length>2 || val < 0 || val > retirement_age7){
         
         this.value ='';
         $('.sgem-err-msg-age').html('Age cannot be more than 100 and retirement age').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-err-msg-age').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

// Retirement age validation
    $('#sgem_retirement_age').on('keyup', function () {
      var current_age7     = $('#sgem_age').val().trim();
      var val = this.value;
      if ($(this).val().length>2 || val < current_age7){    
         this.value ='';
         $('.sgem-err-msg-rmt').html('Retirement age should be between your age '+current_age7+' and 100').fadeIn();      
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

	/*$('input.inputnumber').keyup(function(event) {
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
	});	*/
	

	
}); // DOCUMENT.READY END



//jQuery('sgem-result-goal-text').addClass('pos-2').removeClass('pos-4');
/*$(window).load(function () {
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
});*/



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

      if (isNaN(monthly_save)){
          $('#sgem_monthly_saving').text('0'); 
      }else{
        $('#sgem_monthly_saving').val(monthly_save); 
      }

 //Monthly retirement spending 
    var monthly_retirement_spending = ((pT_income5 / 100) * 51)/12;

      if (isNaN(monthly_retirement_spending)){
          $('#sgem_monthly_spending').text('0'); 
      }else{
        $('#sgem_monthly_spending').val(monthly_retirement_spending);
      }
    
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

     

   // NaN & 100 Percentage cap validation 
      
      if (isNaN(you_will_have)){

          $('#sgem_you_will_have').text('00.00M'); 

      }else{

        $('#sgem_you_will_have').text(sgem_ConvertToInternationalCurrencySystem(you_will_have));
      }

      if (isNaN(you_will_need)){

          $('#sgem_you_will_need').text('00.00M'); 

      }else{

            $('#sgem_you_will_need').text(sgem_ConvertToInternationalCurrencySystem(you_will_need));
      }
  
      if (isNaN(percentage_result)){

          $('#sgem_goal_value').text('0%'); 

      }else if (percentage_result > 100) {

         $('#sgem_goal_value').text('100%'); 

      }else if (percentage_result < 0) {

         $('#sgem_goal_value').text('0%'); 

      }else{

         $('#sgem_goal_value').text(percentage_result + '%'); 
      }
  
  
     if (percentage_result > 100){

      $('.sgem-precentage-arrow').css("left", 100+"%");

    }else if (percentage_result >= 95){

         var percentage4 = ((percentage_result / 100)*100);
       var percentage5 = (1 * percentage4);
       $('.sgem-precentage-arrow').css("left", percentage5+"%");

     }else if ( percentage_result >= 80){

       var percentage1 = ((percentage_result / 95)*100);
       var percentage2 = (0.85 * percentage1);
       $('.sgem-precentage-arrow').css("left", percentage2+"%");
     
     }else if ( percentage_result >= 66){

         var percentage6 = ((percentage_result / 80)*100);
       var percentage7 = (0.65 * percentage6);
       $('.sgem-precentage-arrow').css("left", percentage7+"%");

     }else if(percentage_result <= 65){
             var percentage8 = ((percentage_result / 65)*100);
       var percentage9 = (0.38 * percentage8);
       $('.sgem-precentage-arrow').css("left", percentage9+"%");


     }


// *********************************** Color bar in percentage message ***********************************
   var mainmessage;

  
  if (percentage_result >= 95) {
          document.getElementById("mainmessage").style.color = '#4BCC8C';
  } 
  else if (percentage_result >= 80) {
         document.getElementById("mainmessage").style.color = '#1E96FC';
  } 
  else if (percentage_result >= 65) {
             document.getElementById("mainmessage").style.color = '#FFC12E';
  } 
  else {
          document.getElementById("mainmessage").style.color = '#FF5964';
  }

  var messageBox = document.getElementById('mainmessage');
  messageBox.innerHTML= mainmessage;
    
    var message;
    var messagetitle;
    var mainmessage;
  
  if (percentage_result >= 95) {
         messagetitle = "You're rocking it. Can you "; 
         mainmessage = "boost it even more?";
       message = "Could your future be any brighter? Let’s find out. Create an account to see opportunities to grow your savings, detect hidden fees and track your future wealth.";
  } 
  else if (percentage_result >= 80) {
         messagetitle = "You're close. Let's "; 
         mainmessage = "get you on track.";
       message = "Just a few finishing touches and you'll be on your way. Create an account to project your wealth and find opportunities to grow your dough.";
  } 
  else if (percentage_result >= 65) {
            messagetitle = "Solid start, but let's "; 
            mainmessage = "close the gap";
        message = "You’re off to the races, but have some catching up to do. Sign up for Retirement Investment to get a detailed forecast, a personalized plan and notifications to stay on top of your finances.";
  } 
  else {
         messagetitle = "Let's get Future You "; 
         mainmessage = "out of the red.";
       message = "There are a few steps you could take to jumpstart your retirement savings. Create an account to reduce your bills, eliminate debt and grow your money.";
  }
    
  var messageBox = document.getElementById('messagetitle');
  	messageBox.innerHTML= messagetitle;
  var messageBox = document.getElementById('mainmessage');
  	messageBox.innerHTML= mainmessage;
  //var messageBox = document.getElementById('message');
  	//messageBox.innerHTML= message;
  
}

     
