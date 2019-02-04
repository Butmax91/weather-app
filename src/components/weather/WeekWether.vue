<template>
    <div class="container container-fluid">
        <div class="week col-8 d-flex flex-row p-0">
            <div class="week-item col-3 d-flex justify-content-around flex-column align-items-center"  v-for="item in 7" >
                <div class="day">Mon 4</div>
                <div class="icon">(*_*)</div>
                <div class="temereture">
                    <span class="min">1&deg;C</span>
                    <span class="max">16&deg;C</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
<style lang="scss" scoped>
    @import "~bootstrap/scss/bootstrap";
    .week{
        margin: auto;
        overflow-x: hidden ;
        &-item{
            height: 100px;
            border:1px solid black;
            margin: 0;
        }
    }
</style>