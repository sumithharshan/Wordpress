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
		'<label>Current savings I have <span class="sgem-tooltip tooltip" data-tippy-content="If you\’re married, include your spouse\’s income and total savings.">?</span></label>' +
		'<input type="text" class="inputmove inputnumber"  id="sgem_current_savings" value="30,000" min="0" max="50000000" onkeypress="return isNumber(event)"/>' +
			'<span class="sgem-err-msg-current"></span></div></div>'+
	'<div class="sgem-flex-container">'+
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">'+
	'<label>Every month I save <span class="sgem-tooltip tooltip" data-tippy-content="Count any matching dollars your employer provides. A good savings target: 10% to start, gradually building to 15% or more.">?</span></label>'+
	'<input type="text" class="inputmove inputnumber"  id="sgem_monthly_saving" value="500" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
	'<span class="sgem-percentage-note">10% of my monthly income</span></div>'+
	'<div class="sgem-form-group sgem-form-flex"> </div></div>'+
'<details class="sgem-input-more-details"><summary><div>'+
'<h3 class="sgem-collapsible-summary-title">Optional</h3></div></summary>'+
'<div class="collapsible-content">'+
	'<div class="sgem-flex-container">'+
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">'+
	'<label>Monthly spending <span class="sgem-tooltip tooltip" data-tippy-content="A common rule of thumb is living on 70% of current income (using savings, investments, Social Security and other sources, such as a pension).">?</span></label>'+
	'<input type="text" id="sgem_monthly_spending" class="inputnumber" value="2,550" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
'<span class="sgem-percentage-note">70% of pre-retirement income</span></div>'+
	'<div class="sgem-form-group sgem-form-flex sgem-currency-holder">'+
	'<label>Other expected income <span class="sgem-tooltip tooltip" data-tippy-content="Add any other expected retirement income (Social Security, pension, etc.). Need to estimate your Social Security benefits? See the link under "How we got here.">?</span></label>'+
'<input type="text" id="sgem_other_expected_income" class="inputnumber" value="0" min="0" max="100000" onkeypress="return isNumber(event)"/></div></div>'+
	'<div class="sgem-flex-container">'+
	' <div class="sgem-form-group sgem-form-flex">'+
	'<label>Life expectancy <span class="sgem-tooltip tooltip" data-tippy-content="People are living longer and healthier lives, so it\'s wise to plan for a long retirement.">?</span></label>'+
	'<input type="text" id="sgem_life_expectancy" class="inputnumber" value="95" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
	'<span class="sgem-err-msg-death"></span></div>'+
      '<div class="sgem-form-group sgem-form-flex">'+
      '<label>Investment rate of return <span class="sgem-tooltip tooltip" data-tippy-content="What do you expect your investments to earn between now and retirement? Our default of a 6% average annual return is a conservative estimate based on historic returns.">?</span></label>'+
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
        '<div id="message">There are a few steps you could take to jumpstart your retirement savings. Create an account to reduce your bills, eliminate debt and grow your money.</div>'+
     '<a href="#" class="sgem-getStart">GET STARTED</a></div></div>'+
      '<div class="sgem-logo-center">Retirement calculator by'+
        '<a class="sgem-logo-image" href="https://retirementinvestments.com/" target="_blank" rel="noopener">'+
      '<img src="/wp-content/plugins/sgem-investment-cal/assets/images/Retirement-Investments-8.png" alt="Retirement calculator Logo" /></a></div></div></div></div>';
     
  $('#sgem-retirement-cal-main-id').html(sgem_main_contents);

// colorbar tooltip
     
       tippy('.sgem-goal-tooltip', {
    animation: 'sacle',
    allowHTML: true,
    arrow: true,
    placement: 'top',
    size:'large',
    theme: 'sgem-goal',
     trigger: 'click',
  });
 

  

