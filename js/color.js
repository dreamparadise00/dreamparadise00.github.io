/**
 * Created by 乐园 on 2017/10/14.
 */
$ (function () {
    $(".iscolor").on("click",function () {
        $(".mycolor").toggle();
    })
    $("#m_skin li").on("click",function () {
        var skin = $(this).attr("id");
        $.cookie("skin",skin,{expires:30});
        $("#cssfile").attr("href","css/skin/"+ skin +".css");
        $("#"+skin).empty().append("<img src='img/selected_y.svg' width='30px' height='22px'/>").siblings().find("img").remove()

    })
    $("#n_skin li").on("click",function () {
        var skin = $(this).attr("id");
        $.cookie("skin",skin,{expires:30});
        $("#cssfile").attr("href","css/skin/"+ skin +".css");
        $("#"+skin).empty().append("<img src='img/selected_y.svg' width='30px' height='22px'/>").siblings().find("img").remove()

    })

})

