
 
 $(document).ready(function() {

//on click of input select the value
 	$('input').click(function() {
  $(this).select();
});
	 
	     $('.copy-description').zclip({
        path:'js/ZeroClipboard.swf',
		 copy:function(){return $('.css_preview').text();},
		beforeCopy:function(){
            $('.css').css('color','red');
        },
		afterCopy:function(){
            $('.css').css('color','black');
        }
    });
	 
	 $('.download').click(function() {
	 var colcount=$('.numcolum').val();
	 var colgap=$('.colgap').val();
	 var colgappix =$('.colrule').val();
	 var dataString = 'colcount=' + colcount + '&colgap=' + colgap + '&colgappix=' + colgappix;
	 window.location.href = 'http://www.aaronlumsden.com/multicol/text.php?'+dataString;
	 return false;
});
 

});
 


$(function() 
{
$(".numcolum").keyup(function() 
{
var colcount=$(this).val();
$(".colcount").html(colcount);
$(".columns").css({"-moz-column-count":colcount,"-webkit-column-count":colcount,"column-count":colcount});
return false;
});

$(".colgap").keyup(function() 
{
var colgap=$(this).val();
var colgappix = colgap+'px';
$(".colgap").html(colgap);
$(".columns").css({"-moz-column-gap":colgappix,"-webkit-column-gap":colgappix,"column-gap":colgappix});
return false;
});

$(".colgap").keyup(function() 
{
var colgap=$(this).val();
var colgappix = colgap+'px';
$(".colgap").html(colgap);
$(".columns").css({"-moz-column-gap":colgappix,"-webkit-column-gap":colgappix,"column-gap":colgappix});
return false;
});

$(".colrule").keyup(function() 
{
var colrule=$(this).val();
var colrulepix = colrule+'px';
$(".colrulepix").html(colrule);
$(".columns").css({"-moz-column-rule-width":colrulepix,"-webkit-column-rule-width":colrulepix,"column-rule-width":colrulepix});
return false;
});

});