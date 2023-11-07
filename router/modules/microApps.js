const MicroBox = () => import('../../src/views/lwl/MicroBox.vue')
const microApps = [
  {
    name: 'microBox',
    path: '/child-app/:page*',
    component: MicroBox
  }
]

export default microApps
