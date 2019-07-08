<template>
    <div>
        <h1>Rxjs</h1>
        <div class="container">
            <ul class="menu">
                <li>
                    <router-link to="/rxjs/infinity-scroll">infinity-scroll</router-link>
                </li>
                <li>
                    <router-link to="/rxjs/rolling">rolling</router-link>
                </li>
                <li>
                    <router-link to="/rxjs/timer">timer</router-link>
                </li>
                <li>
                    <router-link to="/rxjs/ch2-example1">ch2-example1</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script src="./RxjsLayout.ts"></script>

<style>
    .container {
        width: 940px;
        margin: 0px auto;
        padding: 20px;
        border: 1px solid #bcbcbc;
    }

    ul.menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul.menu li {
        margin: 0 0 0 0;
        padding: 0 2px 0 2px;
        border: 0;
        float: left;
    }

    ul.menu li a {
        text-decoration: none;
        color: #000000;
        display: block;
    }

    ul.menu li a:hover {
        text-decoration: none;
        color: #272033;
        background-color: #33B5E5;
    }
</style>