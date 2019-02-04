<template>
    <div class="container container-fluid">
    <div class="today col-8 m-auto" >
        <div class="temperature col-4 d-flex justify-content-center">
            <p class="count">4</p>
            <div class="degree d-flex flex-column  ml-3">
                <div class="degree-c "> &deg;C</div>
                <div class="degree-f active"> &deg;F</div>
            </div>
        </div>
        <div class="weather d-flex flex-column container-fluid p-0">
            <div class="weather-text  align-self-start">Cloudly</div>
            <div class="weataher-desc d-flex flex-wrap justify-content-around">
                <div class="weather-desc-item col-4">Fells like  1</div>
                <div class="weather-desc-item col-4">Wind &uarr; 3</div>
                <div class="weather-desc-item col-4">Pressure 3</div>
                <div class="weather-desc-item col-4">Humidity 3</div>
                <div class="weather-desc-item col-4">Visible 3</div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

</script>
<style lang="scss" scoped>
    @import "~bootstrap/scss/bootstrap";
    .today{
        display: flex;
    }
    .temperature{
        .count{
            font-size: 70px;
        }
    }
    .degree{
        &-c,
        &-f{
            font-size: 16px;
            text-align: center;
        }
        .active{
            font-size: 32px;
                order: -1;
        }
    }
    .weather{
        &-text{
            width: 100%;
            font-size: 32px;
        }
        &-desc-item{
            padding: 5px;
        }
    }
</style>