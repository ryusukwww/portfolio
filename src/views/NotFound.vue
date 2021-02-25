<template>
   <div class="background">
        <!--タイトル-->
        <div class="uk-container uk-container-expand">
            <div uk-height-viewport="expand: true" class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light " uk-img>
                <div class="animated fadeInUp uk-text-center">
                    <p><img src="@/assets/404.png" width="300" alt="" uk-img></p>
                    <p>ページが存在しません。</p>
                    <p>今年は富士山に登りたいです。</p>
                    <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" onclick="location.href='/'">トップに戻る</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped> 

    .background {
    max-width: none;
    background-image: url("../assets/404_background.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    }

</style>