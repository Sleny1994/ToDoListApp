<template>
    <el-card class="footer">
        <label>
            <el-checkbox v-model="checkAll"/>
            <el-text>全选 / 取消全选</el-text>
        </label>
        <el-button type="danger" @click="clearAllDone">
            删除所有已完成
        </el-button>
    </el-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { TodoItems } from '../types/TodoItems';

const props = defineProps<{todoLists: Array<TodoItems>}>();
const emit = defineEmits<{
    delAllDone : any;
    changeAll : any;
}>()

const checkAll = computed({
    get(){
        return props.todoLists.length > 0 && props.todoLists.every(x => x.done);
    },
    set(newVal:boolean){
        emit('changeAll',newVal);
    }
})

const clearAllDone = () => {
    if (confirm("确认删除？")) {
        //const todolists : Array<TodoItems> = props.todoLists.filter(item => !item.done)
        emit("delAllDone");
        //console.log(todolists);
    }
}
</script>

<style lang="scss" scoped>
.footer {
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
        margin-right: 20%;
        float: right;
    }
}
</style>