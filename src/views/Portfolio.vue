<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/portfolio.png" width="200" height="200" alt="">
            <p>ポートフォリオ</p>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ all === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('all')">ALL</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ wordpress === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('wordpress')">WODRPRESS</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ vuejs === true ? 'uk-sort-label' : 'uk-sort-click']"  @click ="sortCategory('vuejs')">vue.js</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ htmlcss === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('htmlcss')">HTML/CSS</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ uikit === true ? 'uk-sort-label' : 'uk-sort-click']" @click ="sortCategory('uikit')">UIKIT</button>
            <button class="uk-margin-small-right uk-margin-samll-bottom uk-label uk-button" :class="[ illustrator === true ? 'uk-sort-label' : 'uk-sort-click']"  @click ="sortCategory('illustrator')">Illustrator</button>
        </div>
        <!--カード1-->
        <div v-if="wordpress && illustrator" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/portfolio-top.png" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">ポートフォリオサイト</h3>
                        <span class="uk-label uk-margin-small-right">VUE.JS ★★☆☆☆</span>
                        <span class="uk-label uk-margin-small-right">UIKIT ★★★★☆</span>
                        <span class="uk-label uk-margin-small-right">HTML/CSS ★★★☆☆</span>
                    <p>JavascriptとVue.jsの勉強のためにポートフォリオサイトを作成しました。Vue.jsの基本文法を学びつつ、SPAサイトを作成しました。また、バージョン管理をGITを活用して行いました。</p>
                    <a href="/" class="uk-button uk-button-text"></a>
                </div>
            </div>
        </div>
        <!--カード2-->
        <div v-if="vuejs && uikit" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
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
                    <p>新型コロナウイルス禍でもファン、スークホルダーとコミュニケーションを行う事を目的にWeb企画を立案。奈良の企業様と共に、コロナ禍でもオンラインで体験できるコンテンツをコーティングいたしました。</p>
                    <a href="http://naraclub.jp/homegame/narajikan-project/" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
        <!--カード3-->
        <div v-if="vuejs && uikit" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
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
                    <p>5G時代の全く新しい観戦体験アプリケーション「N.GO」の特設サイトです。</p>
                    <a href="http://naraclub.jp/homegame/n-go" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
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
            vuejs : true,
            htmlcss : true,
            uikit : true,
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
                this.vuejs = true ; 
                this.htmlcss = true ; 
                this.uikit = true ; 
                this.illustrator = true ; 
            }
            if( tag == 'wordpress'){
                this.wordpress = !this.wordpress ? true : false ; 
                this.all =  true;
                this.vuejs = true;
                this.htmlcss = true;
                this.uikit = true;
                this.illustrator = true;
                }
            if( tag == 'vuejs'){
                this.vuejs = !this.vuejs ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.htmlcss = true;
                this.uikit = true;
                this.illustrator = true;
            }
            if( tag == 'htmlcss'){
                this.htmlcss = !this.htmlcss ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.vuejs = true;
                this.uikit = true;
                this.illustrator = true;
            }
            if( tag == 'uikit'){
                this.uikit = !this.uikit ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.vuejs = true;
                this.htmlcss = true;
                this.illustrator = true;
            }
            if( tag == 'illustrator'){
                this.illustrator = !this.illustrator ? true : false ; 
                this.uikit = !this.uikit ? true : false ; 
                this.all =  true;
                this.wordpress = true;
                this.vuejs = true;
                this.htmlcss = true;
                this.uikit = true;
            }
            else{
                //何もしない
            }
        },

    } //methodsの締め
}
</script>

<style>

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