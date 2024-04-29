<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <!--@是v-on的简写，一般表示监听事件、点击、拖拽、键盘等-->
                <TodoHeader @add-todo-item="addTodo"></TodoHeader>
            </el-header>
            <el-main>
                <!--：是v-bind的简写，-->
                <!--[change-state] | [del-todo-item] | [change-all] | [del-all-done]均为自定义事件-->
                <!--自定义事件后跟随function，做数据处理的逻辑-->
                <!--
                    父组件 -> 子组件传递数据：
                    在父组件中使用v-bind(:)绑定该数据，然后在子组件中使用defineProps()接收父组件传递来的数据
                    子组件 -> 父组件传递数据：
                    在子组件中使用defineEmits()自定义事件并触发这个事件，然后在父组件中通过v-on(@)监听子组件发送的自定义事件，并根据传递来的数据进行逻辑处理
                -->
                <TodoMain :todo-lists="todoLists" @change-state="updateTodo" @del-todo-item="delTodo"></TodoMain>
            </el-main>
            <el-footer>
                <TodoFooter :todo-lists="todoLists" @change-all="changeAllTodo" @del-all-done="delDoneTodo"></TodoFooter>
            </el-footer>
        </el-container>
    </div>

</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { TodoItems } from '../types/TodoItems';
import TodoHeader from '../components/todoHeader.vue'
import TodoMain from '../components/todoMain.vue'
import TodoFooter from '../components/todoFooter.vue'
import { readTodoList, saveTodoList } from '../utils/localStorage';
// 定义数据，并初始化数据，从localstorage读取数据
let todoLists = reactive<Array<TodoItems>>([]);
JSON.parse(readTodoList()).forEach((element: any) => {
    todoLists.push(element)
});

const addTodo = (item: TodoItems) => todoLists.push(item);
const updateTodo = (todo: TodoItems, tododone: boolean) => {
    console.log(todo);
    if (todo?.id !== -1 && todo !== undefined) {
        todo.done = tododone;
    }
}
const delTodo = (todoid: number) => {
    const index = todoLists.findIndex(item => item.id === todoid)
    if (index !== -1) {
        todoLists.splice(index, 1);
    }
}
const changeAllTodo = (tododone: boolean) => {
    //console.log(tododone);
    todoLists.forEach(item => {
        item.done = tododone;
        //console.log(item.id,item.done,item.content);
    });
}
const delDoneTodo = () => {
    // todoLists = todoLists.filter(item => !item.done)
    // 上述表达式无法同步至视图内，不知为何原因
    const todolists: Array<TodoItems> = todoLists.filter(item => item.done);
    todolists.forEach(element => {
        const index = todoLists.findIndex(todo => todo.id === element.id);
        todoLists.splice(index, 1);
    });
    //console.log(todoLists);

    // 强制刷新视图的方法一：
    // let obj = JSON.parse(JSON.stringify(todoLists));
    // obj = todoLists.filter(item => item.done !== true);
    // todoLists = obj;
    // console.log(todoLists);

    // 强制刷新视图的方法二：
    // const instance = getCurrentInstance();
    // instance?.appContext.config.globalProperties.$forceUpdate();
    // const instance = getCurrentInstance();
    // instance?.proxy?.$forceUpdate();
}

//强制刷新视图的方法三：
watch(todoLists, saveTodoList ,{ deep: true })
</script>

<style lang="scss" scoped>
.el-header {
    height: 20%;
}
</style>