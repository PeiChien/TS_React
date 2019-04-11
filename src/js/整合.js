import $ from 'jquery';
import { Game } from './贪吃蛇/游戏对象';

let all = function () {

    //点击跳转
    (function () {
        let fulla = $("#Home").offset().top;
        let fullb = $("#About").offset().top;
        let fullc = $("#Contact").offset().top;

        function scr(index) {
            $(".nav>li").removeClass("active").eq(index).addClass("active")
        }

        $(window).scroll(function () {
            let scrTop = $(window).scrollTop() + fulla;
            if (scrTop >= fulla && scrTop < fullb) {
                scr(0);
            } else if (scrTop > fullb && scrTop < fullc) {
                scr(1);
            } else {
                scr(2);
            }
        })

        $("a[href^='#']").click(function () {
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 700);
            return false;//这个很重要！！！防止默认点击跳转生效
        });
    })();



    //贪吃蛇-难度选择
    (function () {
        let buttonList = document.getElementsByTagName('button');
        let contactElement = document.getElementById("Contact");
        let speed = [150, 100, 25];
        for (let i = 0; i < buttonList.length; i++) {
            buttonList[i].onclick = function () {
                for (let j = 0; j < buttonList.length; j++) {
                    buttonList[j].disabled = true;
                }
                //初始化游戏对象
                let gm = new Game(contactElement, speed[i]);

                //开始游戏
                gm.init();
            };
        }
    })()

};

export { all };