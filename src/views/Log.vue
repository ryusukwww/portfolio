<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/log.png" width="200" height="200" alt="">
            <p>学習の記録</p>
        </div>
        <!--追加ログ表示セクション-->
        <div v-for="log in logs" v-bind:key="log.content">
            <h3 class="uk-card-title">{{log.title}}</h3>
            <p>{{log.content}}</p>
            <hr>
        </div>
        <!--firebaseデータ表示セクション-->
        <div v-for="getlog in getlogs" v-bind:key="getlog.fields.today.stringValue">
            <h3 class="uk-card-title"> {{getlog.fields.addLogTitle.stringValue}}</h3>
            <p> {{getlog.fields.addLogContent.stringValue}}</p>
            <hr>
        </div>  
        <!--ログ入力フォーム-->
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
        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="createComment">記録する</button>
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
            date : '',
            today : '',
        
            //firebseからgetしたobjectを入れる配列
            getlogs : [] ,
        }
    },
    
    created(){
        //firebaseからobjectをgetする
        this.$axios.get('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs'
        )
        .then(response => {
            this.getlogs = response.data.documents;
            console.log(response.data.documents);
        })
    },

    methods: {

         //LOG記入時の日付を入れる
        showDate : function(){
            this.date = new Date();
            this.today = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate() + ' ' + this.date.getHours() + ':' + this.date.getMinutes();
        },

        //LOG記入 -> LOGページ内表示 && firebaseにデータpost
        createComment (){ 
            if(confirm('タイトル : "' + this.addLogTitle + '"\n' + '本文 : "'+ this.addLogContent + '"\n' + 'こちらでよろしいでしょうか。')){
                this.logs.push({title : this.addLogTitle , content : this.addLogContent , day : this.today}); //Logを追加した際に、logプロパティにコンテンツを追加 → v-modelで表示
                this.$axios.post('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs', //LOGに記入されたコンテンツを、axiosでfirebaseに送る
                {   
                    fields: {
                        addLogTitle: {
                            stringValue: this.addLogTitle
                            },
                        addLogContent: {
                            stringValue: this.addLogContent
                            },
                        today: {
                            stringValue: this.today
                            },
                        }
                    }
                )
                .then(response => {
                    console.log(response);
                })
                this.addLogTitle = "";
                this.addLogContent = ""; 
                this.today = ""; 
            }else{
                //何もしない
            }
        },

    } //methodsの締め
}
</script>