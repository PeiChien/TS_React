import {Game} from './游戏对象';

window.onload = function () {
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
};