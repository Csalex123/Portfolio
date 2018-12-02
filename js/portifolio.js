$( document ).ready(function() {
	$("#div_systemAcad").hide();
	$("#div_greenleaf").hide();
	$("#div_workfast").show();
	$(".web").hide();
	$(".photography").hide();

    $("#workfast").click(function() {
    	$("#div_workfast").show();
    	$(".web").hide();
    	$(".photography").hide();
    	$(".product").show();
    	$("#div_systemAcad").hide();
    	$("#div_greenleaf").hide();
    });

    $("#systemAcad").click(function() {
    	$("#div_systemAcad").show();
    	$("#div_greenleaf").hide();
    	$("#div_workfast").hide();
    	$(".product").hide();
    	$(".photography").hide();
    	$(".web").show();
    });

    $("#grennLeaf").click(function() {
    	$(".photography").show();
    	$(".web").hide();
    	$(".product").hide();
    	$("#div_workfast").hide();
    	$("#div_systemAcad").hide();
    	$("#div_greenleaf").show();
    });

});