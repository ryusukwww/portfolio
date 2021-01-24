<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/work.png" width="200" height="200" alt="">
            <p>職務経歴</p>
        </div>
        <!--カード1-->
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/naraclub.png" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">株式会社 奈良クラブ</h3>
                    <p>勤続年数 : 2019年12月 - 現在</p>
                    <p>所属部署 : Web企画・制作</p>
                    <p>業務内容 : Web企画、デザイン、コーディング</p>
                    <p>株式会社奈良クラブ Web企画、デザイン、コーディング業務に従事。HTML/CSS、WordPressを軸とするITスキルと、プロジェクトマネジメントスキルを活かし、企業からのご協賛金額の増額やファンのエンゲージメント向上に貢献。</p>
                    <a href="http://naraclub.jp/" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
        <!--カード2-->
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="@/assets/toieelab.jpeg" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body" >
                    <h3 class="uk-card-title">北摂情報学研究所</h3>
                    <p>勤続年数 : 2015年12月 - 2019年8月</p>
                    <p>所属部署 : プロジェクトマネジャー、Webデザイン、Webコーディング</p>
                    <p>業務内容 : マネジメント、Webデザイン、コーディング</p>
                    <p>自社サービス販売システム構築、IT支援及びITのオンライン学習体験サービスの立ち上げに従事。HTML/CSS/CSSフレームワークを中心とするコーディング、WordPressを軸とした開発に携わりつつ教育事業ではチームマネジャーを担当する。</p>
                    <a href="https://toiee.jp/" class="uk-button uk-button-text" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>      
    </div>
</template>

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
</style>