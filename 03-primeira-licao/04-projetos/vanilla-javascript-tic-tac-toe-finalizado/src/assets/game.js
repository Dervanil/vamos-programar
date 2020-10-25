
    const blocks = document.querySelector("board");
    const reset = document.querySelector("button");

    let selected = [];
    let player = '';


    blocks.addEventListener('click', (e)=> {
        let id = e.target.id;
        alert(id);
    });

    reset.addEventListener('click',()=>{
      selected.forEach(x => output(x,''));
      selected = [];
    })

    function output(id, val) {
      player = val;
      document.getElementById(id).innerHTML = val;
    }
