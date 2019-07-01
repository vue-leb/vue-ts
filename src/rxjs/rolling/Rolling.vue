<template>
    <div>
        <transition-group name="list" tag="ul">
            <li :key="showNotice.title">
                <a :href="showNotice.htmlUrl" target="_blank">{{showNotice.title}}</a>
            </li>
        </transition-group>
    </div>
</template>

<script lang="ts" src="./Rolling.ts"></script>

<style>
    .list-leave-active,
    .list-enter-active {
        transition: 1s;
    }

    .list-enter-to {
        transform: translateY(-70px);
    }

    .list-leave-to {
        transform: translateY(-70px);
    }
</style>