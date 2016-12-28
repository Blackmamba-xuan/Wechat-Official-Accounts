/**
 * Created by kobe on 2016/12/11.
 */
$(document).ready(function(){
    $("#mytitle").focus(function () {
        $(".frm_counter").css("display","block");
    });
    $("#mytitle").blur(function(){
        $(".frm_counter").css("display","none");
    });
    $("#mytitle").on('input',function(e){
        var title=$("#mytitle").val();
        $(".frm_counter").text(title.length+"/64");
    });
});