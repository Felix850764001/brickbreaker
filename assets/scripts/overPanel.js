//游戏结束弹出的窗口脚本
cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel: cc.Label,
        scoreLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    //use this for init
    onLoad: function(){

    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    show(score, isWin){
        this.node.active = true;
        if(isWin){
            this.resultLabel.string = "YOU WIN!";
        } else{
            this.resultLabel.string = "YOU LOSE!";
        }
        this.scoreLabel.string = score;
    },

    onBtnRestart(){
        this.gameCtl.startGame();
    }
});
