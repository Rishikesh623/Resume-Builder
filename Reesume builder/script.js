function addnew_wfield() 
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wfield");
    newNode.setAttribute("placeholder","Enter here")

    let w0b = document.getElementById("wexp");
    let wAddbutton0b = document.getElementById("wAddbutton");

    w0b.insertBefore(newNode, wAddbutton0b);

}


function addnew_aqfield() 
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.setAttribute("placeholder","Enter here")

    let aq0b = document.getElementById("aq");
    let aqAddbutton0b = document.getElementById("aqAddbutton");

    aq0b.insertBefore(newNode, aqAddbutton0b);

}

//Generate Resume
function generate()
{
    let name=document.getElementById("namefield");
    document.getElementById("name_left").innerHTML=name.value;
    document.getElementById("name_right").innerHTML=name.value;

    document.getElementById("contact").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("email").innerHTML=document.getElementById("emailfield").value;
    document.getElementById("add").innerHTML=document.getElementById("add_field").value;
    document.getElementById("fb").innerHTML=document.getElementById("fbfield").value;
    document.getElementById("insta").innerHTML=document.getElementById("Instafield").value;
    document.getElementById("linkedin").innerHTML=document.getElementById("L_field").value;

    document.getElementById("obj").innerHTML=document.getElementById("objfield").value;
    
    let workexp=document.getElementsByClassName("wfield");
    let str='';
    for (let i of workexp)
    {
        str=str+`<li>${i.value}</li>`;
    }
    document.getElementById("we").innerHTML=str;

    let academic_q=document.getElementsByClassName("aqfield");
    let str1='';
    for (let i of academic_q)
    {
        str1=str1+`<li>${i.value}</li>`;
    }
    document.getElementById("acdemic_Q").innerHTML=str1;

    let file=document.getElementById("imgfield").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById("image").src=reader.result};

    document.getElementById("Resume-form").style.display='none';
    document.getElementById("Resume-template").style.display='block';

}


