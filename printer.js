
        function typed(list, time, el, fun) {
            let box = document.querySelector(el)
            box.append(document.createElement('span'))
            let strList = [];
            let index = 0;
            setInterval(() => {
                box.children[0].classList.toggle('showSpan')
            }, 300);
            if (typeof list[0] == 'object') {
                list.forEach((item,index) => {
                    for (let i = 0; i < item.length; i++) {
                        strList.push(item[i]);
                    }
                    if (index<list.length-1) {
                        strList.push('<br>')
                    }
                })

            } else {

            }
            console.log(strList)
            timeout(strList,box.children[0],time,index);
        }

        function timeout(list,el,time,index) {
            setTimeout(() => {
                if (list[index] == '<br/>') {
                    el.innerHTML += list[index];
                    index++
                }
                el.innerHTML += list[index];
                index++
                if (index >= list.length-1) {
                    return;
                }
                timeout(list,el,time,index)
            }, time);
        }