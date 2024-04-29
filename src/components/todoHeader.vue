<template>
    <h1>ToDo Lists</h1>
    <div class="input">
        <el-input class="el-input" v-model="input" placeholder="请输入内容，回车确认/点击添加" @keyup.enter="addFunc" />
        <el-button type="primary" @click="addFunc">添加</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TodoItems } from '../types/TodoItems';
const input = ref('')

// defineEmits 自定义事件
const emit = defineEmits<{
    addTodoItem: [newTodoItem: TodoItems]
}>()

// 添加数据方法
const addFunc = () => {
    // 判断输入的数据是否为空
    if (input.value.length !== 0 && input.value.length !== undefined) {
        const params = {
            id: new Date().getTime(),
            done: false,
            content: input.value.trim()
        };
        emit('addTodoItem', params);
        input.value = "";
    } else {
        alert("请输入内容！");
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font: '../../public/font/JetBrainsMono-SemiBold.ttf';
    font-size: 48px;
    color: pink;
    text-align: center;
}

.input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100px;

    .el-input {
        width: 1000px;
        height: 50px;
    }

    .el-button {
        margin-left: 10px;
        width: 150px;
        height: 50px;
    }

    // v-deep深度选择器，当使用了scoped时，可以修改组件内的样式
    // 但需要确定好层级才能成功修改
    // ::v-deep(.el-input .el-input__inner) {
    //     width: 1000px;
    //     height: 50px !important;
    // }
}
</style>