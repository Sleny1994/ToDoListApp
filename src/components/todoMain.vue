<template>
    <el-card>
        <TodoItem v-for="item in todoLists" :key="item.id" :item="item" @changestate="updateFunc"
            @del-todo-item="delFunc"/>
    </el-card>
</template>

<script lang="ts" setup>
import TodoItem from './todoItem.vue'
import { TodoItems } from '../types/TodoItems';
//import { watch } from 'vue';

// 从父组件中获取数据
defineProps<{ todoLists: Array<TodoItems> }>();
//watch(props.todoLists,(newVal,oldVal)=>{console.log("Main中的变化："+newVal,oldVal)}, {deep:true})

const emit = defineEmits<{
    delTodoItem: any;
    changestate: any;
}>();

const updateFunc = (todo:TodoItems, done: boolean) => {
    emit('changestate', todo, done);
}

const delFunc = (id: number) => {
    emit('delTodoItem', id);
}
// const todoLists = ref<TodoItems[]>([
//     { id: 1, done: false, content: "吃饭" },
//     { id: 2, done: false, content: "睡觉" },
//     { id: 3, done: false, content: "游戏" },
//     { id: 4, done: false, content: "挣钱" },
//     { id: 5, done: true, content: "打豆豆" }
// ]);
</script>

<style lang="scss">
.el-card {
    margin-left: 20%;
    margin-right: 20%;
}
</style>