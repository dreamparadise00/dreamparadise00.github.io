/**
 * Created by 乐园 on 2017/10/8.
 */
$(function () {
        $( document ).ready(function() {
            var isMobile = false;//默认是pc端
            if( $('#some-element').css('display')=='none') {
                is_mobile = true;
            }
            if (isMobile == true) {
                $("#container #div2").css("display","block")
            }
        });
        var flag = true;
        var Name = " ";
        /*var index = e.target.index;*/

        $('.self div ').prepend("<img src='img/my-w.svg'/>");
        $('.production div ').prepend("<img src='img/p-w.svg'>");
        $('.position div ').prepend("<img src='img/i-w.svg'/>");
        $('.main').after('<div class="rightself"></div>');


        $('.self a').on('click',function (e) {
            var that = $(this);
            getThisName(that);
            changeifpage();
            clearUp();
            chosclick();


        });
        $(".production a").on("click",function (e) {
            var that = $(this);
            getThisName(that);
            changeifpage();
            clearUp();
            chosclick();






        });
        $(".position a").on("click",function (e) {
            var that = $(this);
            getThisName(that);
            changeifpage();
            clearUp();
            chosclick();
        });
        if(flag){
            $(".return").hide();
        }


        $(".return").on("click",function () {
            re();
        })



        function mainclick() {
            var main = $('.main');
            main.addClass('lefttranslate').animate({
                opacity:0.75,
                width:"-=200"

            })
            $('.main .photo').hide();

            setInterval(function () {
                $('.rightself').css('display','block').css('transform',"translate(-70%,-50%)")
                $('.right').css("display","block")
            },500)


        }
        function chosclick() {
            if(flag){
                mainclick();
                flag = false;
                setInterval(function () {
                    $(".return").show();
                },1500)
            }
        }
        function getThisName(that) {
            Name =that.parent().attr("class")
        }
        function changeifpage() {
            $(".rightself").prepend("<div class='ifpage'><iframe src='div/"+ Name +".html' style='width: 500px;height: 570px ' frameborder=0 ></iframe> </div>")

        }
        function clearUp() {
            if(flag === false){
                $(".rightself .ifpage:last-child").remove()
            }
        }
        function re() {
            window.location.reload()

        }
       $(".self").mouseover(function () {
           var that = $(this);
           var thatd = $(".self div");
           /*var thatdA = $(".self div a");*/
           var Name = "my-b";
           mouseChangeA(that,thatd,Name);
           /*$(this).css("background-color","orange")
           $(".self div").css("background-color","#ffffff")
           $(".self div a").empty().prepend("<img src='img/my-b.svg'>")*/
       });
        $(".self").mouseout(function () {
            var that = $(this);
            var thatd = $(".self div");
           /* var thatdA = $(".self div a");*/
            var Name = "my-w";
            mouseChangB(that,thatd,Name);
            /*$(this).css("background-color","rgb(59,89,152)")
            $(".self div").css("background-color","#000")
            $(".self div a").empty().prepend("<img src='img/my-w.svg'>")*/
        });
        $(".production").mouseover(function () {
            var that = $(this);
            var thatd = $(".production div");
            /*var thatdA = $(".production div a");*/
            var Name = "p-b";
            mouseChangeA(that,thatd,Name);
        })
        $(".production").mouseout(function () {
            var that = $(this);
            var thatd = $(".production div");
            /*var thatdA = $(".production div a");*/
            var Name = "p-w";
            mouseChangB(that,thatd,Name);
        });
        $(".position").mouseover(function () {
            var that = $(this);
            var thatd = $(".position div");
            /*var thatdA = $(".position div a");*/
            var Name = "i-b";
            mouseChangeA(that,thatd,Name);
        });
        $(".position").mouseout(function () {
            var that = $(this);
            var thatd = $(".position div");
            /*var thatdA = $(".position div a");*/
            var Name = "i-w";
            mouseChangB(that,thatd,Name);
        })


        function mouseChangeA(that ,thatd ,Name) {
            that.css("background-color","orange")
            thatd.css("background-color","#ffffff")
            thatd.empty().prepend("<img src='img/"+ Name +".svg'>")
        }
        function mouseChangB(that,thatd,Name) {
            that.css("background-color","rgb(59,89,152)")
            thatd.css("background-color","#000")
            thatd.empty().prepend("<img src='img/" + Name  +".svg'>")

        }

        $(".nav div").focus(function () {
            $(this).css("background-color","#000")
        })









    }
)