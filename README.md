# virtual-dom-lite
🚀virtual DOM

### 01-what is the Virtual DOM?
```
<!-- HTML -->
<div id="app">
    <span class="word">hello</span>
</div>
```

```
const vdom = {
    tag: 'div',
    data: { id: 'app' },
    chilren: [
        {
            tag: 'span',
            data: 'word',
            children: ['hello']
        }
    ]
};
```

### 02-How to create a Virtual DOM
file: 02-create-vdom

```
{
     "flag": "HTML",
     "tag": "div",
     "data": {
          "id": "app"
     },
     "children": [
          {
               "flag": "HTML",
               "tag": "span",
               "data": {
                    "class": "word"
               },
               "children": [
                    "hello"
               ],
               "childrenFlag": "MULTIPLE"
          }
     ],
     "childrenFlag": "MULTIPLE"
}
```


### 03-How to render a Virtual DOM


### 04-How to patch a Virtual DOM


### 05-Virtual DOM in Vue
