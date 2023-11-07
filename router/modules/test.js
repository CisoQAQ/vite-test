const HomeTestA = () => import('../../src/components/HelloWorld.vue')
const HomeTestB = () => import('../../src/components/index.vue')
const SvgChart = () => import('../../src/views/lwl/SvgChart.vue')
const DrawChart = () => import('../../src/views/lwl/DrawChart.vue')
const test = [
  {
    name: 'HomeTestA',
    path: '/HomeTestA',
    component: HomeTestA
  },
  {
    name: 'HomeTestB',
    path: '/HomeTestB',
    component: HomeTestB
  },
  {
    name: 'SvgChart',
    path: '/SvgChart',
    component: SvgChart
  },
  {
    name: 'DrawChart',
    path: '/drawChart',
    component: DrawChart
  },
]

export default test
