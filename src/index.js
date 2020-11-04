import './index.css'
function getLodash() {
  return import(/* webpackChunkName:'loda_sh' */ 'lodash')
}

function getDayjs() {
  return import(
    /* webpackChunkName:'day_js' */
    /* webpackPrefetch: true */
    'dayjs'
  )
}
function getClickjs() {
  return import(
    /* webpackChunkName:'click_js' */
    /* webpackPrefetch: true */
    './click.js'
  )
}
async function getComdayjs() {
  const { default: day_js } = await getDayjs()
  return day_js().format('YYYY')
}
async function getComLodash() {
  const { default: loda_sh } = await getLodash()
  return loda_sh
}
async function getComClickjs() {
  const { default: click_js } = await getClickjs()
  return click_js
}
document.addEventListener('click', () => {
  getComdayjs().then(res => {
    console.log('res:', res);
  });
  getComClickjs().then(res => {
    console.log('res2:', res());

  })
})
