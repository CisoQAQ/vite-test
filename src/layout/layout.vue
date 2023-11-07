<template>
  <div class="layout">
    <n-space vertical>
      <!--左侧导航-->
      <n-layout has-sider>
        <n-layout-sider
          bordered
          collapse-mode="width"
          :width="240"
        >
          <n-menu
              :options="menuOptions"
              accordion
          />
          </n-layout-sider>
          <n-layout>
              <router-view></router-view>
          </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>
<script >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import microApp, { EventCenterForMicroApp, getActiveApps } from '@micro-zoe/micro-app'

export default {
setup () {
  const router  = useRouter()
  window.eventCenterForChildApp = new EventCenterForMicroApp('child-app')
  const menuOptions = ref([])
  menuOptions.value = [
    {
      label: '基座应用',
      key: 'main-app',
      children: [
        {
          label: 'UI列表',
          key: 'HomeTestA',
          onClick:function(){
            router.push('/HomeTestA')
          }
        },
        {
          label: '拓扑图',
          key: 'DrawChart',
          onClick:function(){
            router.push('/DrawChart')
          }
        },
        {
          label: 'Table+Mock',
          key: 'HomeTestB',
          onClick:function(){
            router.push('/HomeTestB')
          }
        },{
          label: 'SVG.JS',
          key: 'SvgChart',
          onClick:function(){
            router.push('/SvgChart')
          }
        }]
    },
    {
      label: '子应用',
      key: 'child-app',
      children: [
        {
          label: 'home',
          key: 'home',
          onClick:function(){
            if(!getActiveApps().includes('child-app')) router.push('/child-app/#/home')
            else   microApp.setData('child-app', { path: 'home' })
          }
        },
        {
          label: 'test',
          key: 'test',
          onClick:function(){
            if(!getActiveApps().includes('child-app')) router.push('/child-app/#/test')
            else   microApp.setData('child-app', { path: 'test' })
          }
        },
      ]
    }
  ]
  return {
    menuOptions
  }
}
}
</script>
<style>
.n-layout{
height: 100vh;
background: #f9f8fb;
/*padding: 10px;*/
}
.n-layout-scroll-container::-webkit-scrollbar {
  display: none;
}

</style>

