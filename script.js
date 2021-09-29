let changeName =() =>
{
 	$(document.getElementsByTagName('span')[0]).hide();

 	$(document.getElementsByClassName('details')[0]).append("<input type='text' id='makeTxt1'/>");
 	$(document.getElementsByTagName('button')[0]).hide();
 	$(document.getElementsByClassName('details')[0]).append("<input type='button' id='makeBtn1' class='btn btn-dark pull-right' value ='update'/>");


 	// $(document).on('click','#makeBtn1',()=>
 	// {
 	//  $(document.getElementsByTagName('span')[0]).text($('#makeBtn1').text());	
 	//  $(document.getElementsByTagName('span')[0]).show();
 	// });

 	$('#makeBtn1').click(()=>{
 		$(document.getElementsByTagName('span')[0]).text($('#makeTxt1').val());
 		$(document.getElementsByTagName('span')[0]).show();
 		$(document.getElementsByTagName('button')[0]).show();
 		$('#makeBtn1').remove();
 		$('#makeTxt1').remove();

 	})
 	
}

let changeSurname =() =>
{
 	$(document.getElementsByTagName('span')[1]).hide();

 	$(document.getElementsByClassName('details')[1]).append("<input type='text' id='makeTxt2'/>");
 	$(document.getElementsByTagName('button')[1]).hide();
 	$(document.getElementsByClassName('details')[1]).append("<input type='button' id='makeBtn2' class='btn btn-dark pull-right' value ='update'/>");


 	// $(document).on('click','#makeBtn1',()=>
 	// {
 	//  $(document.getElementsByTagName('span')[0]).text($('#makeBtn1').text());	
 	//  $(document.getElementsByTagName('span')[0]).show();
 	// });

 	$('#makeBtn2').click(()=>{
 		$(document.getElementsByTagName('span')[1]).text($('#makeTxt2').val());
 		$(document.getElementsByTagName('span')[1]).show();
 		$(document.getElementsByTagName('button')[1]).show();
 		$('#makeBtn2').remove();
 		$('#makeTxt2').remove();

 	})
 	
}

let changeEmail =() =>
{
 	$(document.getElementsByTagName('span')[2]).hide();

 	$(document.getElementsByClassName('details')[2]).append("<input type='text' id='makeTxt3'/>");
 	$(document.getElementsByTagName('button')[2]).hide();
 	$(document.getElementsByClassName('details')[2]).append("<input type='button' id='makeBtn3' class='btn btn-dark pull-right' value ='update'/>");


 	// $(document).on('click','#makeBtn1',()=>
 	// {
 	//  $(document.getElementsByTagName('span')[0]).text($('#makeBtn1').text());	
 	//  $(document.getElementsByTagName('span')[0]).show();
 	// });

 	$('#makeBtn3').click(()=>{
 		$(document.getElementsByTagName('span')[2]).text($('#makeTxt3').val());
 		$(document.getElementsByTagName('span')[2]).show();
 		$(document.getElementsByTagName('button')[2]).show();
 		$('#makeBtn3').remove();
 		$('#makeTxt3').remove();

 	})
 	
}

let changeDate =() =>
{
 	$(document.getElementsByTagName('span')[3]).hide();

 	$(document.getElementsByClassName('details')[3]).append("<input type='text' id='makeTxt4'/>");
 	$(document.getElementsByTagName('button')[3]).hide();
 	$(document.getElementsByClassName('details')[3]).append("<input type='button' id='makeBtn4' class='btn btn-dark pull-right' value ='update'/>");


 	// $(document).on('click','#makeBtn1',()=>
 	// {
 	//  $(document.getElementsByTagName('span')[0]).text($('#makeBtn1').text());	
 	//  $(document.getElementsByTagName('span')[0]).show();
 	// });

 	$('#makeBtn4').click(()=>{
 		$(document.getElementsByTagName('span')[3]).text($('#makeTxt4').val());
 		$(document.getElementsByTagName('span')[3]).show();
 		$(document.getElementsByTagName('button')[3]).show();
 		$('#makeBtn4').remove();
 		$('#makeTxt4').remove();

 	})
 	
}

