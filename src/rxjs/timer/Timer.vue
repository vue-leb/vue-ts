<template>
    <div>
        <button v-stream:click="start$">start</button>
        <button v-stream:click="stop$">stop</button>
        <button v-stream:click="reset$">reset</button>

        <div class="container">
            <div class="wheel">
                <div class="pointer"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Timer.ts"></script>

<style>
    .container .wheel {
        background-size: cover;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        position: relative;
    }

    .container .wheel .pointer {
        width: 4px;
        height: 90px;
        background-color: black;
        position: absolute;
        left: 98px;
        top: 10px;
        transform-origin: bottom;
    }
</style>