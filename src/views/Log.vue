<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/log.png" width="200" height="200" alt="">
            <p>学習の記録 : firebaseとapi通信して学習の記録を残します。</p>
        </div>
        <!--firebaseデータ表示セクション-->
        <div v-for="getlog in getlogs" v-bind:key="getlog.updateTime">
            <h3 class="uk-card-title"> {{getlog.fields.addLogTitle.stringValue}}</h3>
            <p> {{getlog.fields.addLogContent.stringValue}}</p>
            <p> 記入日 : {{getlog.fields.date.stringValue}}</p>
            <hr>
        </div>  
        <!--パスワード認証フォーム-->
        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" onclick="location.href='/logadmin'">記録する</button>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            //LOG追加機能
            logs : [],
            addLogTitle : '',
            addLogContent : '',
        
            //firebseからgetしたobjectを入れる配列
            getlogs : [] ,
            getids : [],

            today : new Date,
            year : '',
            month : '',
            day : '',
            date : '',

            //パスワード用変数
            UserInput : '',

        }
    },
    
    created(){
        //firebaseからobjectをgetする
        this.$axios.get('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs'
        )
        .then(response => {
            this.getlogs = response.data.documents;
            this.getlogs.sort(function(a,b){
                if( a.updateTime < b.updateTime ) return 1;
                if( a.updateTime > b.updateTime ) return -1;
                return 0;
        });
            console.log(this.getlogs);
        })

    },

    methods: {

        logIn : function gate() {
            this.UserInput = prompt("パスワードを入力して下さい(「logadmin」です。):","");
            location.href = this.UserInput;
        },

    } //methodsの締め
}
</script>