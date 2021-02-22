<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <div class="uk-text-center">
            <!--タイトル-->
            <img src="@/assets/calender.png" width="200" height="200" alt="">
            <p>年と月を記入するとカレンダーが表示されます。</p>
            <!--カレンダー-->
            <div v-show="showCalenderBtn">
                <h2> {{currentYear}} / {{currentMonth}}</h2>
                <table class="calendar-table">
                    <thead>
                        <tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>
                    </thead>
                    <tbody v-html="tableBody"></tbody>
                </table>
            </div>
            <!--ボタン-->
            <div class="forms uk-container uk-container-xsmall uk-margin-top">
                <div class="uk-margin" >
                    <input id="year" class="uk-input" placeholder="年(西暦)を入力してください" v-model="currentYear">
                </div>
            <div class="uk-margin" >
                <input id="month" class="uk-input" placeholder="月を入力してください" v-model="currentMonth">
            </div>
            <div class="forms uk-container uk-container-xsmall">
                <button v-show="show" @click="calendarBody" type="submit" class="uk-button uk-button-primary uk-width-1-1 uk-margin-top">カレンダー表示</button>
                <button v-show="reload" @click="doReload" type="submit" class="uk-button uk-button-primary uk-width-1-1 uk-margin-top">リセットする</button>
            </div>
        </div>
    </div>
        
    </div>
</template>
<script>
export default {
    data : function(){
        return {
            
            //カレンダー用data
            currentYear : '',
            currentMonth : '',
            startDate : '',
            endDate : '',
            startDay : '',
            endDay : '',
            textSkip : true, //日にちを埋める用のフラグ
            today : new Date(), //本日の情報を取得
            textDate : 1, // 日付(これがカウントアップされます)
            tableBody : '', // テーブルのHTMLを格納する変数

            //カレンダー表示 初期値
            showCalenderBtn : false,

            //ボタン表示 初期値
            show : true,
            reload : false,
        }
    },

    methods : {

        // カレンダーを表示 ボタン機能
        calendarBody : function(){

            //ボタンの表示切り替え
            this.show == true ? this.show = false : this.show = true
            this.reload == false ? this.reload = true : this.reload = false

            //カレンダーの表示切り替え
            this.showCalenderBtn = true;

            //カレンダー表示 各種設定
            this.todayYMFlag = this.today.getFullYear() === this.currentYear && this.today.getMonth() === this.currentMonth ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
            this.startDate = new Date(this.currentYear, this.currentMonth -1, 1); // その月の最初の日の情報を取得 
            this.endDate  = new Date(this.currentYear, this.currentMonth, 0); // その月の最後の日の情報を取得 
            this.startDay = this.startDate.getDay();// その月の最初の日の曜日を取得 (日:0,月:1,火:2,水:3,木:4,金:5,土:6)
            this.endDay = this.endDate.getDate();// その月の最後の日を取得

            //カレンダー 値インプット -> html生成
            for (let row = 0; row < 6; row++){
                this.tr = '<tr>';

                for (let col = 0; col < 7; col++) {
                
                    if (row === 0 && this.startDay === col){
                        this.textSkip = false;
                    }
                    if (this.textDate > this.endDay) {
                        this.textSkip = true;
                    }
                this.textTd = this.textSkip ? ' ' : this.textDate++;
                this.td = '<td>'+ this.textTd+'</td>';
                this.tr += this.td;
                }
                this.tr += '</tr>';
                this.tableBody += this.tr;
            }
        }, //calendarBody 閉じ

        //「リセット」ボタン機能
        doReload : function(){
            window.location.reload();
        },

    },//method 閉じ
}
</script>

<style scoped>
    .calendar-table {
        margin: 0 auto;
        }
</style>