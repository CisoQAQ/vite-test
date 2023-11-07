
<template>
    <div class="box">
        <div class="c">
            <n-collapse :default-expanded-names="['1','2', '3','4']">
                <n-collapse-item title="系统配置" name="1">
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设标识码">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                </n-collapse-item>
                <n-collapse-item title="人员配置" name="2">
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-select  />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-date-picker  type="date" />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-select  />
                    </n-form-item>
                    <n-form-item path="age" label="生产日期" class="time">
                        <n-date-picker  type="date" />
                    </n-form-item>
                </n-collapse-item>
                <n-collapse-item title="参数配置" name="3">
                    <n-form-item path="age" label="x" class="x">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="y"   class="y">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="z"  class="z">
                        <n-input />
                    </n-form-item>
                </n-collapse-item>
                <n-collapse-item title="其他配置" name="4">
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-select  />
                    </n-form-item>
                    <n-form-item path="age" label="生产日期" class="time">
                        <n-date-picker  type="date" />
                    </n-form-item>
                    <n-form-item path="age" label="生产日期" class="time">
                        <n-date-picker  type="date" />
                    </n-form-item>
                </n-collapse-item>
            </n-collapse>
        </div>
        <div class="b">
            <n-form ref="formRef" >
                <n-divider >
                    系统配置
                </n-divider>
                <n-form-item path="age" label="设备类型名称">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="设标识码">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-input />
                </n-form-item>
                <n-divider >
                    人员配置
                </n-divider>
                <n-form-item path="age" label="设备类型名称">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-select  />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-date-picker  type="date" />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-select  />
                </n-form-item>
                <n-form-item path="age" label="生产日期" class="time">
                    <n-date-picker  type="date" />
                </n-form-item>
                <n-divider >
                    参数配置
                </n-divider>
                <n-form-item path="age" label="x" class="x">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="y"   class="y">
                    <n-input />
                </n-form-item>
                <n-form-item path="age" label="z"  class="z">
                    <n-input />
                </n-form-item>
                <n-divider >
                    其他配置
                </n-divider>
                <n-form-item path="age" label="设备类型名称">
                    <n-date-picker  type="date" />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-select  />
                </n-form-item>
                <n-form-item path="age" label="生产日期" class="time">
                    <n-date-picker  type="date" />
                </n-form-item>
                <n-form-item path="age" label="设备类型名称">
                    <n-select  />
                </n-form-item>
                <n-form-item path="age" label="生产日期" class="time">
                    <n-date-picker  type="date" />
                </n-form-item>
            </n-form>
        </div>
        <div class="aBox">
            <div class="a">
                <n-form ref="formRef" >
                    <h2>系统信息</h2>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设标识码">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-select  />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-date-picker  type="date" />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-select  />
                    </n-form-item>
                    <n-form-item path="age" label="生产日期" class="time">
                        <n-date-picker  type="date" />
                    </n-form-item>
                </n-form>
            </div>
            <div class="a">
                <n-form ref="formRef" >
                    <h2>参数信息</h2>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <br>
                    <n-form-item path="age" label="x" class="x">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="y"   class="y">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="z"  class="z">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="生产日期" class="time">
                        <n-date-picker  type="date" />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                    <n-form-item path="age" label="设备类型名称">
                        <n-input />
                    </n-form-item>
                </n-form>
            </div>
        </div>

    </div>

</template>
<script>
import { onMounted } from 'vue'

export default {
    setup () {

    },
}
</script>
<style scoped>
.aBox{
    flex: 1;
    margin:0 60px;
    display: inline-block;
    vertical-align: top;
}
.a{
    background-color: #fff;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, .05);
    -webkit-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, .05);
    padding: 10px 30px;

}
.n-input{
    border-radius: 10px;

}
::v-deep .n-input__input-el{
    height: 43px;
    padding: 10px;
}
::v-deep .n-base-selection .n-base-selection-label{
    height: 43px;
    padding: 10px;
    border-radius: 10px;
}
::v-deep .n-base-selection__border{
    border-radius: 10px;
}
::v-deep .n-input{
    border-radius: 10px;
}

.n-form-item{
    width: 46%;
    margin-left: 4%;
    vertical-align: bottom;
    display: inline-block;
}

.x,.y,.z{
    width: 30%!important;
    display: inline-block;
}
.y,.z{
    margin-left: 3%!important;
}
.b{
    flex: 1;
    margin-left: 60px;
    display: inline-block;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, .05);
    -webkit-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, .05);
    padding: 10px 30px;
    vertical-align: top;
}
.c{
    flex: 1;
    margin-left: 60px;
    display: inline-block;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, .05);
    -webkit-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, .05);
    padding: 10px 30px;
}

::v-deep .n-collapse-item__header-main{
    font-weight: bold!important;
    height: 45px!important;
}
.box{
    display: flex;
}
</style>
