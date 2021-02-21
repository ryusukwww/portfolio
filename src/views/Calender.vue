<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <div class="uk-text-center">
            <!--タイトル-->
            <img src="@/assets/calender.png" width="200" height="200" alt="">
            <p>年と月を記入するとカレンダーが表示されます。</p>
            <!--カレンダー表示-->
            <h2 class="calendar-title"><span id="js-year"></span>年 <span id="js-month"></span>月</h2>
            <table class="calendar-table">
                <thead>
                    <tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>
                    {{tableBody}}
                </thead>
                <tbody id="js-calendar-body"></tbody>
            </table>
            <!--ボタン-->
            <div class="forms uk-container uk-container-xsmall">
                <div class="uk-margin" >
                    <input id="year" class="uk-input" placeholder="西暦(年)を入力してください" v-model="currentYear">
                </div>
            <div class="uk-margin" >
                <input id="month" class="uk-input" placeholder="月を入力してください" v-model="currentMonth">
            </div>
            <div class="forms uk-container uk-container-xsmall">
                <button @click="calendarBody" type="submit" class="uk-button uk-button-primary uk-width-1-1 uk-margin-top">決定</button>
            </div>
        </div>
    </div>
        
    </div>
</template>
<script>
export default {
    data : function(){
        return {
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
            row : '',
            col : '',
            tr : '<tr>',
            addClass : '',
            todayYMFlag : '',
            textTd : '',
            td:'',
            tbody : '',
        }
    },

    methods : {
        
        calendarBody : function(){
            this.todayYMFlag = this.today.getFullYear() === this.currentYear && this.today.getMonth() === this.currentMonth ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
            this.startDate = new Date(this.currentYear, this.currentMonth -1, 1); // その月の最初の日の情報を取得
            this.endDate  = new Date(this.currentYear, this.currentMonth -1, 0); // その月の最後の日の情報を取得
            this.startDay = this.startDate.getDay();// その月の最初の日の曜日を取得 
            this.endDay = this.endDate.getDate();// その月の最後の日の曜日を取得 

            for (var row = 0; row < 6; row++){

                for (var col = 0; col < 7; col++) {
                
                    if (row === 0 && this.startDay === col){
                        this.textSkip = false;
                    }
                    if (this.textDate > this.endDay) {
                        this.textSkip = true;
                    }
                
                this.addClass = this.todayYMFlag && this.textDate === this.today.getDate() ? 'is-today' : '';
                this.textTd = this.textSkip ? ' ' : this.textDate++;
                this.td = '<td class="'+ this.addClass+'">'+ this.textTd+'</td>';
                this.tr += this.td;
                }
                this.tr += '</tr>';
                this.tableBody += this.tr;
            }
        }
    },//method閉じ
}
</script>

<style scoped>
    .forms{
        text-align: center;
    }
    .calendar-title {
        text-align: center;
        font-family: 'Sriracha', cursive;
        color: #666666;
        }
    .calendar-table {
        margin: 0 auto;
        }
    td {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        line-height: 65px;
        font-size: 50px;
        font-family: 'Sriracha', cursive;
        }
    .is-today {
        color: red;
        }
</style>