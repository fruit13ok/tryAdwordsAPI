console.log("Sanity Check: JS is working!");
// let backendRoute = new URL("http://localhost:8000/api");
let backendRoute = new URL("http://138.68.234.14:8000/api3");

const getScrape = async (backendRoute, formObj) => {
    try {
        const response = await fetch(backendRoute, {
            method: 'POST',
            body: JSON.stringify(formObj),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        let json = await response.json();
        console.log('json',json);
        let mList = document.getElementById('result-list');
        mList.innerHTML = '';

        let pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(json, null, 4);
        mList.appendChild(pre);
    }catch (error) {
        console.log(error);
    }
};

$(document).ready(function(){
    $("#button1").click(function(){
        let formArr = $("#form1").serializeArray();
        let formObj = formArr.reduce((map, obj) => {
            map[obj.name] = obj.value;
            return map;
        }, {});
        document.getElementById('result-list').innerHTML = 
        '<p style="color:blue;font-size:46px;"><strong> ... Find related searchs please wait ... </strong></p>';
	    console.log('formObj',formObj);
        getScrape(backendRoute, formObj);
    });
});