/**
 * Created by 乐园 on 2017/10/11.
 */
$(document).on("pageinit","#pageone",function(){
    var tName = " ";
    $(".m_content").append("<iframe src='div/self.html'  frameborder=0 id='pdt' ></iframe>");
    ifs();
    $("#self").on("tap",function () {
        var that = $(this);
        getTName(that);
        changeifpage();
        ifs();

    })
    $("#production").on("tap",function () {
        var that = $(this);
        getTName(that);
        changeifpage();
        ifs();
    })
    $("#position").on("tap",function () {
        var that = $(this);
        getTName(that);
        changeifpage();
        ifs();
    })
    function ifs() {
        var m_width = $("body").width();
        var m_height = $("body").height();

        $("#pdt").css({width :m_width,height:m_height});
        $("#pdt").contents().find("body").css("zoom","0.4");
    }

    function getTName(that) {
        tName =that.attr("id")
    }
    function changeifpage() {
        $(".m_content").empty().prepend("<iframe src='div/"+ tName +".html'  frameborder=0 id='pdt' ></iframe>")
        console.log(tName)
    }

});