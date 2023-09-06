<template>
    <n-space vertical :size="24">
        <n-button type="primary" @click="showModal = true">新增用户</n-button>
        <n-data-table :columns="columns" :data="testData.value" :pagination="pagination" :bordered="false"/>
        <n-modal v-model:show="showModal">
            <n-card
                style="width: 600px"
                title="新增用户"
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true">
                <n-form
                    ref="formRef"
                    :model="formValue"
                    :rules="rules"
                    :size="size">
                    <n-form-item label="姓名" path="user.name">
                        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
                    </n-form-item>
                    <n-form-item label="年龄" path="user.age">
                        <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
                    </n-form-item>
                    <n-form-item label="性别" path="user.sex">
                        <n-radio-group v-model:value="formValue.user.sex" >
                            <n-space>
                                <n-radio value="0">男</n-radio>
                                <n-radio value="1">女</n-radio>
                            </n-space>
                        </n-radio-group>
                    </n-form-item>
                    <n-form-item label="住址" path="user.address">
                        <n-input v-model:value="formValue.user.address" placeholder="请输入地址" />
                    </n-form-item>
                    <n-form-item>
                        <n-button attr-type="button" @click="handleValidateClick">验证</n-button>
                    </n-form-item>
                </n-form>
            </n-card>
        </n-modal>
    </n-space>

</template>
<script lang="ts">
import { reactive,ref } from '@vue/reactivity'
import { getCurrentInstance } from "vue";
import {NButton,useMessage} from "naive-ui";
import { h } from 'vue'
import {FormInst} from "naive-ui/lib";
export default{
    name:'App',
    components:{
        NButton,
    },
    setup() {
        const showModal = ref(false)
        const testData = reactive([]);
        const addParams = reactive({})
        const message = useMessage()
        const columns = [
            {
                title: '名称',
                key: 'name'
            },
            {
                title: '年龄',
                key: 'age'
            },
            {
                title: '性别',
                key: 'sexCol'
            },
            {
                title: '住址',
                key: 'address'
            }, {
                title: '操作',
                key: 'action',
                render(row) {
                    return h(NButton, {
                            size: 'small',
                            onClick: () => deleteRow(row)
                        }, {default: () => '删除'}
                    )
                }
            }]
        const {proxy} = getCurrentInstance();
        const formRef = ref<FormInst | null>(null)
        const formValue= ref({
            user:{
                name:'',
                age:'',
                sex:'',
                address:''
            }
        })
        const rules = {
            user:{
                name:{
                    required:true,
                    message:'请输入姓名',
                    trigger:'blur'
                },
                age: {
                    required: true,
                    message: '请输入年龄',
                    trigger: ['blur']
                },
                sex: {
                    required: true,
                    message: '请选择性别',
                    trigger: ['blur']
                },
                address: {
                    required: true,
                    message: '请输入地址',
                    trigger: ['input', 'blur']
                }
            }
        }
        /*获取用户列表*/
        const getData = function () {
            proxy.$axios({
                url: '/getData',
                method: 'get'
            }).then((res) => {
                res.data.data.forEach(item=>{
                    item.sexCol = item.sex==0?'男':'女'
                })
                testData.value = res.data.data;
            });
        }
        getData()
        /*验证表单*/
        const handleValidateClick = function (e){
            e.preventDefault()
            formRef.value?.validate((errors) => {
                if (!errors) {
                    showModal.value = false
                    addUser(formValue.value.user)
                } else {
                    console.log(errors)
                    message.error('Invalid')
                }
            })        }

        /*删除*/
        const deleteRow = function (row) {
            proxy.$axios({
                url: '/deleteData',
                method: 'post',
                data: row
            }).then((res) => {
                testData.value = res.data.data;
            });
        }
        /* 新增*/
        const addUser = function (params) {
            proxy.$axios({
                url: '/addData',
                method: 'post',
                data: params
            }).then((res) => {
                testData.value = res.data.data;
            });
        }
        return {
            testData,
            columns,
            formRef,
            showModal,
            getData,
            addUser,
            formValue,
            rules,
            deleteRow,
            handleValidateClick
        }
    },

}
</script>
<style>
#app{
    width: 100%;
    max-width: unset;
    text-align: left;
}
</style>
