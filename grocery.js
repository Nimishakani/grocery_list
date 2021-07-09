function tableform(){
    var imag = document.getElementById("image");
    imag.style.display = 'none';
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            
            var response = JSON.parse(this.response);
            var Jgrocery = response.grocery;
            var output = "";
            output+=`<tr> 
                            <th style="width : 100px"> Sl No </th>
                            <th style = "width: 180"> Name </th>
                            <th style= "width : 150"> Quantity </th>
                            <th style = "width: 100"> Unit</th>
                            <th syle= "width: 150"> Department</th>
                            <th style = "width: 180"> Notes </th>`
            for(let i=0; i<Jgrocery.length;i++){
                output +=  `<tr>
                                <td style="width :100px">${Jgrocery[i].SlNo}</td>
                                <td style="width :180px">${Jgrocery[i].Name}</td>
                                <td style="width :150px">${Jgrocery[i].Quantity}</td>
                                <td style="width :100px">${Jgrocery[i].Unit}</td>
                                <td style="width :150px">${Jgrocery[i].Department}</td>
                                <td style="width :180px" >${Jgrocery[i].Notes}</td>
                            </tr>`;
            }
            document.getElementById("table").innerHTML = output;
        }
    };
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}