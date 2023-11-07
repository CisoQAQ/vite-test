<template>
    <n-space vertical :size="24">
        <n-spance style="text-align: center">
            <span>查询:</span>
            <n-input v-model:value="searchValue" placeholder="检索" style="width: 280px;margin-left: 20px" />
            <span style="margin-left: 20px"> 性别：</span>
            <n-select v-model:value="selectSex" :options="options" style="width: 180px;margin-left: 10px;display: inline-block;line-height: 32px" />
            <n-button type="info" @click="searchInputValue" style="width: 120px;margin-left: 20px" >查询</n-button>
            <n-button type="default" @click="showModalCol"  style="width: 120px;margin-left: 20px">新增用户</n-button>
        </n-spance>
        <n-data-table :columns="columns" :data="testData"  :bordered="false"/>
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
                    >
                    <n-form-item label="姓名" path="user.name">
                        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
                    </n-form-item>
                    <n-form-item label="年龄">
                        <n-input-number v-model:value="formValue.user.age" style="width: 100%"  placeholder="输入年龄"/>
                    </n-form-item>
                    <n-form-item label="性别" path="user.sex">
                        <n-radio-group v-model:value="formValue.user.sex" >
                            <n-space>
                                <n-radio value='0'>男</n-radio>
                                <n-radio value='1'>女</n-radio>
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
    name:'Test',
    components:{
        NButton,
    },
    setup() {
        const  modalShowType = ref('')
        const searchValue = ref('')
        const selectSex = ref('')
        const showModal = ref(false)
        let testData = ref([])
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
                    return [
                        h(NButton, {
                            size: 'small',
                            onClick: () => openUpdate(row)
                        }, {default: () => '编辑'}),
                        h(NButton, {
                            size: 'small',
                            onClick: () => deleteRow(row)
                        }, {default: () => '删除'})
                    ]
                }
            }]
        const {proxy} = getCurrentInstance();
        const formRef = ref<FormInst | null>(null)
        let formValue= reactive({
            user:{
                name:'',
                age: 0,
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
                    required: false,
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
        const options = [
            {
                label:'全部',
                value:'',
            },{
                label:'男',
                value:'0'
            }, {
                label:'女',
                value: '1'
            }

        ]
        /*获取用户列表*/
        const getData = function () {
            proxy.$axios({
                url: '/getData',
                method: 'get'
            }).then((res) => {
                res.data.data.forEach(item=>{
                    item.sexCol = item.sex==0?'男':'女'
                })
                testData.value = res.data.data
            });
        }
        getData()
        /*验证表单*/
        const handleValidateClick = function (e){
            e.preventDefault()
            formRef.value?.validate((errors) => {
                if (!errors) {
                    if(modalShowType.value == 'add') {
                        addUser(formValue.user)
                    }else if(modalShowType.value == 'update') {

                        updateUser(formValue.user)
                    }
                    showModal.value = false
                } else {
                    message.error('Invalid')
                }
            })
        }
        const showModalCol = function (){
            showModal.value = true
            modalShowType.value = 'add'
        }
        const openUpdate = function (row) {
            showModal.value = true
            modalShowType.value = 'update'
            formValue.user = row
            formValue.user.sex = formValue.user.sex.toString()
        }
        /*删除*/
        const deleteRow = function (row) {
            proxy.$axios({
                url: '/deleteData',
                method: 'post',
                data: row
            }).then((res) => {
                testData.value = res.data.data;
                res.data.data.forEach(item=>{
                    item.sexCol = item.sex==0?'男':'女'
                })
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
                res.data.data.forEach(item=>{
                    item.sexCol = item.sex==0?'男':'女'
                })
                searchValue.value = ''
                selectSex.value = ''
                formValue.user.name = ''
                formValue.user.age = 0
                formValue.user.sex = ''
                formValue.user.address = ''
            });
        }
        const updateUser = function (params) {
            proxy.$axios({
                url: '/updateData',
                method: 'post',
                data: params
            }).then((res) => {
                testData.value = res.data.data;
                res.data.data.forEach(item=>{
                    item.sexCol = item.sex==0?'男':'女'
                })
                searchValue.value = ''
                selectSex.value = ''
                formValue.user.name = ''
                formValue.user.age = 0
                formValue.user.sex = ''
                formValue.user.address = ''
            });
        }

        const searchInputValue = function (){
            let params = {
                searchValue:searchValue.value,
                sex:selectSex.value
            }
            proxy.$axios({
                url: '/searchData',
                method: 'post',
                data: params
            }).then((res) => {
                testData.value = res.data.data;
                res.data.data.forEach(item=>{
                    item.sexCol = item.sex==0?'男':'女'
                })
            });
        }
        return {
            testData,
            searchValue,
            columns,
            formRef,
            showModal,
            formValue,
            rules,
            selectSex,
            options,
            modalShowType,
            searchInputValue,
            getData,
            deleteRow,
            addUser,
            handleValidateClick,
            showModalCol
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
