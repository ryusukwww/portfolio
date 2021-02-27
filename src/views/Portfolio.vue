<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/portfolio.png" width="200" height="200" alt="">
            <p>ポートフォリオ : タグのソートをjavascriptで作成しました。</p>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ all === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('all')">ALL</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ htmlcss === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('htmlcss')">HTML/CSS</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ javascript === true ? 'uk-sort-label' : 'uk-sort-click']"  @click ="sortCategory('javascript')">javascript</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ wordpress === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('wordpress')">WODRPRESS</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ cssfw === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('cssfw')">CSSFW</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ illustrator === true ? 'uk-sort-label' : 'uk-sort-click']"  @click ="sortCategory('illustrator')">Illustrator</button>
        </div>
        <!--portfolio-->
        <div v-if="wordpress && illustrator" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/portfolio-top.png" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">ポートフォリオサイト</h3>
                        <span class="uk-label uk-margin-small-right">javascript ★★☆☆☆</span>
                        <span class="uk-label uk-margin-small-right">CSSFW ★★★★☆</span>
                        <span class="uk-label uk-margin-small-right">HTML/CSS ★★★☆☆</span>
                    <p>JavascriptとVue.jsの勉強のためにポートフォリオサイトを作成しました。Vue.jsの基本文法を学びつつ、SPAサイトを作成。Portfolioページにタグソート機能、Logページには学習の記録機能を実装しました。学習の記録はログイン状態でしか記入できない仕様となっております。また、バージョン管理をGITを活用して行っています。</p>
                    <a href="/" class="uk-button uk-button-text"></a>
                </div>
            </div>
        </div>
        <!--39PROJECT-->
        <div v-if="javascript && cssfw" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/39project.png" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">#39PROJECT</h3>
                        <span class="uk-label uk-margin-small-right">WORDPRESS ★★★★☆</span>
                        <span class="uk-label uk-margin-small-right">HTML/CSS ★★★☆☆</span>
                        <span class="uk-label uk-margin-small-right">Illustrator ★★★☆☆</span>  
                        <p><strong>概要 : </strong>企画趣旨が伝わり、参加したくなるUIの立案・デザインとコーディング。コンテンツ収集のため営業担当の業務進捗管理を担当。</p>
                        <p><strong>規模 : </strong>6名(うちコピーラティング1人、動画作成1人,営業3名)</p>
                        <p><strong>ポイント : </strong>目標協賛企業数39社達成。企業、サポーターからの評判も高くプロジェクト当日も想定以上のステークホルダーさまにご参加いただく。</p>
                    <a href="http://naraclub.jp/homegame/39project/" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
        <!--N.GO-->
        <div v-if="javascript && cssfw" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/ngo.jpeg" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body" >
                    <h3 class="uk-card-title">N.GO</h3>
                        <span class="uk-label uk-margin-small-right">WORDPRESS ★★★★☆</span>
                        <span class="uk-label uk-margin-small-right">HTML/CSS ★★★☆☆</span>
                        <span class="uk-label uk-margin-small-right">Illustrator ★★★☆☆</span>
                        <p><strong>概要 : </strong>アプリの魅力が伝わるUIの立案とデザイン、コーディング、動画編集を担当。</p>
                        <p><strong>規模 : </strong>3名(うちコピーラティング1人、動画作成1人)</p>
                        <p><strong>ポイント : </strong>目標ダウンロード数の120%を獲得。</p>
                    <a href="http://naraclub.jp/homegame/n-go" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>    
         <!--kintaikanri-->
        <div v-if="wordpress && illustrator && cssfw && htmlcss" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/kintaikanri.jpg" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">#勤怠管理</h3>
                        <span class="uk-label uk-margin-small-right">javascript ★★☆☆☆</span>
                        <p><strong>概要 : </strong>Google Apps scriptを使って、Slack打刻 -> Spreadsheetに記録オリジナルの勤怠管理システムを作成。</p>
                        <p><strong>規模 : </strong>1名</p>
                        <p><strong>ポイント : </strong>新型コロナ期間のリモートワーク導入を促進。有料で導入予定だった予算削減に貢献。</p>
                    <a href="https://github.com/ryusukwww/attendance_management" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
         <!--ホームゲームイベント-->
        <div v-if="javascript && cssfw" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/homegamepage.png" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">#ホームゲームイベントLP</h3>
                        <span class="uk-label uk-margin-small-right">WORDPRESS ★★★★☆</span>
                        <span class="uk-label uk-margin-small-right">HTML/CSS ★★★☆☆</span>
                        <span class="uk-label uk-margin-small-right">Illustrator ★★★☆☆</span>
                        <p><strong>概要 : </strong>既存ファンのエンゲージメントアップと新規ファンのチケット販売促進のためのLPを作成。チームで定期更新するための雛形と更新業務オペレーションを構築。</p>
                        <p><strong>規模 : </strong>6名(うち1名ディレクション,営業4名)</p>
                        <p><strong>ポイント : </strong>目標の200パーセントのユーザー数を獲得し、企画のスポンサー獲得、満足に貢献。</p>
                    <a href="http://naraclub.jp/homegame/sec17" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>   
        <!--narajikan-->
        <div v-if="javascript && cssfw" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/narajikan.png" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">#ならじかん</h3>
                        <span class="uk-label uk-margin-small-right">WORDPRESS ★★★★☆</span>
                        <span class="uk-label uk-margin-small-right">HTML/CSS ★★★☆☆</span>
                        <span class="uk-label uk-margin-small-right">Illustrator ★★★☆☆</span>
                        <p><strong>概要 : </strong>新型コロナ期間にファンに楽しんでいただく企画の立案とデザイン、コーディング、コンテンツを収集するための業務進捗管理を行う。</p>
                        <p><strong>規模 : </strong>6名(うち1名ディレクション,うち4名営業)</p>
                        <p><strong>ポイント : </strong>プロボノ企画として実施した新型コロナウイルス渦における取り組みにより、スポンサー企業からの評価につながり、協賛金の増額に貢献。</p>
                    <a href="http://naraclub.jp/homegame/narajikan-project/" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            // PORTFOLIOページのタグソート機能Data
            wordpress : true,
            javascript : true,
            htmlcss : true,
            cssfw : true,
            illustrator : true, 
            all : true,
        }
    },

    methods : {

        //タグソートテスト : 引数のテキストをデータと勘違いさせて表示できるかテスト
        sortCategory: function(tag){
            if( tag == 'all'){
                this.all = !this.all ? true : false ;
                this.wordpress = true ; 
                this.javascript = true ; 
                this.htmlcss = true ; 
                this.cssfw = true ; 
                this.illustrator = true ; 
            }
            if( tag == 'wordpress'){
                this.wordpress = !this.wordpress ? true : false ; 
                this.all =  true;
                this.javascript = true;
                this.htmlcss = true;
                this.cssfw = true;
                this.illustrator = true;
                }
            if( tag == 'javascript'){
                this.javascript = !this.javascript ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.htmlcss = true;
                this.cssfw = true;
                this.illustrator = true;
            }
            if( tag == 'htmlcss'){
                this.htmlcss = !this.htmlcss ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.javascript = true;
                this.cssfw = true;
                this.illustrator = true;
            }
            if( tag == 'cssfw'){
                this.cssfw = !this.cssfw ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.javascript = true;
                this.htmlcss = true;
                this.illustrator = true;
            }
            if( tag == 'illustrator'){
                this.illustrator = !this.illustrator ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.javascript = true;
                this.htmlcss = true;
                this.cssfw = true;
            }
            else{
                //何もしない
            }
        },

    } //methodsの締め
}
</script>

<style scoped>

.uk-card {
    position: relative;
    z-index: 1; 
}

.uk-card:hover {
    filter:alpha(opacity=70);
    -ms-filter: "alpha(opacity=70)";
    -moz-opacity:0.9;
    -khtml-opacity: 0.9;
    opacity:0.9;
    zoom:1;
}
.uk-card a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2; 
}

.uk-sort-label{
    background: #fff;
    color: #1e87f0;
    border: solid 1px #1e87f0;
}

.uk-sort-label:hover{
    background: #1e87f0;
    color: #fff;
    border: solid 1px #1e87f0;
}

.uk-sort-click{
    background: #1e87f0;
    color: #fff;
    border: solid 1px #1e87f0;
}

</style>