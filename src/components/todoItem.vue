<template>
    <div class="todoitem">
        <li>
            <label>
                <!--通过click监听用户的点击事件，并将其传递给父组件-->
                <el-checkbox v-model="item.done" @click="doneFunc" />
                <!--{{ 双大括号表示插值表达式，可以将数据动态的绑定到DOM上并实现数据的渲染 }}-->
                <el-text>{{ item.content }}</el-text>
            </label>
            <el-button type="danger" @click="delFunc">删除</el-button>
        </li>
    </div>
</template>

<script lang="ts" setup>
import { TodoItems } from '../types/TodoItems'

// 接受父组件todoMain.vue的item的数据
const props = defineProps<{ item: TodoItems }>();

const emit = defineEmits<{
    delTodoItem: any;
    changestate: any;
}>();

const doneFunc = () => {
    emit('changestate', props.item.id, props.item.done);
};

const delFunc = () => {
    if (confirm("确认删除？")) {
        emit('delTodoItem', props.item.id);
    }
};
</script>

<style lang="scss" scoped>
.todoitem {
    li {
        list-style: none;
        margin-bottom: 1%;

        label {
            .el-checkbox {
                margin-left: 20%;
            }

            .el-text {
                font-size: large;
                margin-left: 1%;
            }
        }

        .el-button {
            margin-right: 21%;
            float: right;
        }
    }
}
</style>