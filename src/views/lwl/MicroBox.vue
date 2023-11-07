<template>
    <div id="microBox">
        <micro-app name="child-app" :url= urlConfig inline disableSandbox />
    </div>
   
</template>

<script>
import config from "@/micro/config.js"
import {onMounted,ref} from 'vue'
export default {
    setup() {
        let urlConfig = ref(`${config['child-app']}/child-app/`)
        return {
            urlConfig
        }
    }
}
</script>
