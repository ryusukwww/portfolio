<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/logform.png" width="200" height="200" alt="">
            <p>学習の記録を入力してください。</p>
        </div>
        <!--ログ入力フォーム-->
        <div>
            <form>
                <fieldset class="uk-fieldset">
                    <h3>記録する</h3>
                    <div class="uk-margin">
                        <input id="logHeader" class="uk-input" type="text" placeholder="タイトルを入力" v-model="addLogTitle">
                    </div>
                    <div class="uk-margin">
                        <textarea id="logText" class="uk-textarea" rows="5" placeholder="学んだことを入力しましょう。" v-model="addLogContent"></textarea>
                    </div>
                </fieldset>
            </form>
        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="addLog">記録する</button>
        </div>
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

            today : new Date,
            year : '',
            month : '',
            day : '',
            date : '',

            logID : '',
        }
    },
    
    created(){
        //firebaseからobjectをgetする
        this.$axios.get('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs'
        )
        .then(response => {
            this.getlogs = response.data.documents;
            console.log(this.getlogs);
        })
    },

    computed : {
        idToken(){
            return this.$store.getters.idToken;
        }
    },

    methods: {

        addLog (){ 

            //表記(YYYY/MM/DDDD)を作成
            this.year = this.today.getFullYear();
            this.month = this.today.getMonth();
            this.day = this.today.getDate();
            this.date = this.year + '/' + this.month + '/' + this.day ; 

            //firebaseのdocumentの配列数をlogIDとして格納
            this.logID = String(this.getlogs.length + 1);

             //LOG記入 -> LOGページ内表示 && firebaseにデータpost
            if(confirm('タイトル : "' + this.addLogTitle + '"\n' + '本文 : "'+ this.addLogContent + '"\n' + '日時 : "' + this.date + '"\n' + this.logID + '\n' + 'こちらでよろしいでしょうか。')){
                this.logs.push({title : this.addLogTitle , content : this.addLogContent , date : this.date , logID : this.logID}); //Logを追加した際に、logプロパティにコンテンツを追加 
                this.$axios.post('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs', //LOGに記入されたコンテンツを、axiosでfirebaseに送る
                {   
                    fields: {
                        addLogTitle: {
                            stringValue: this.addLogTitle
                            },
                        addLogContent: {
                            stringValue: this.addLogContent
                            },
                        date: {
                            stringValue: this.date
                            },
                        logID: {
                            stringValue: this.logID
                            },
                        }
                    }
                )
                .then(response => {
                    console.log(response);
                })
                this.addLogTitle = "";
                this.addLogContent = ""; 
                this.date = ""; 
                this.logID ="";
            }else{
                //何もしない
            }

            location.href = "/log";
        },

    } //methodsの締め
}
</script>