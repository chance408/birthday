// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "致：",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "断罪之皇女",  // 同上...
        "月生·冯·那菲多特",
        "吾之挚友哟",
        "在这命定之日",
        "于你闪耀之刻",
        "以大幻梦森罗万象狂气断罪眼",
        "赐我僭越之罚",
        "解封后再补礼物",
        "大概是本书",
        "搞这种东西还是太闲了",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "月生": "./imgs/xiaokeai.png",
        // "生日快乐": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "cake？",
        light_candle: "candle？",
        wish_message: "Happy Birthday！",
        story: "A MESSAGE FOR YOU",
    }
};
