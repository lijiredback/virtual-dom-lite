import h from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'

const vApp = h('div', {
    props: {
        id: 'app'
    },
    children: [
        h('h1', {
            props: {
                id: 'title'
            },
            children: ['hello world!']
        })
    ]
})

const $app = render(vApp)
console.log($app)

mount($app, document.getElementById('root'))