<template>
    <div>
        rx example
        <button type="button" @click="emptyOnly">emptyOnly</button>
        <button type="button" @click="emptyTest">emptyTest</button>
        <button type="button" @click="emptyTest2">emptyTest2</button>
        <button type="button" @click="emptyTest3">emptyTest3</button>
        <button type="button" @click="emptyTest4">emptyTest4</button>
        <br/>
        <button type="button" @click="emitNext">emitNext</button>
        <button type="button" @click="emitEmpty">emitEmpty</button>
        <button type="button" @click="emitError">emitError</button>
        <button type="button" @click="emitNever">emitNever</button>
    </div>
</template>

<script lang="ts" src="./Empty.ts"></script>
