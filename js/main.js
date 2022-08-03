let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;


btn.onclick = function(){ // check input value and adding notes 
    if(inp.value != ''){
        boxs[0].innerHTML += `

        <p class="item" draggable="true">${inp.value}</p>
        
        
        `
        inp.value = ''; 
    }

    dragItem();
}


// darg and drop items
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item =>{
        item.addEventListener('dragstart',function(){

            drag = item;
            item.style.opacity = '.5';
        })
        item.addEventListener('dragend',function(){
            drag = null;
            item.style.opacity = '1';
        })

        boxs.forEach(box =>{
           box.addEventListener('dragover', function(prevent){// prevent default method to enable droping

                prevent.preventDefault()
                this.style.background = '#395B64';
                this.style.color = '#fff';
            }) 

            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#395B64';
            })

            box.addEventListener('drop', function(){
                this.append(drag);
                this.style.background = '#fff';
                this.style.color = '#395B64';

            })
        })

       
    })
}


