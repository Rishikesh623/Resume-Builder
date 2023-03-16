function addnew_wfield() 
{
    let newBox = document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("wfield");
    newBox.setAttribute("placeholder","Enter here")

    let w0b = document.getElementById("wexp");
    let wAddbutton0b = document.getElementById("wAddbutton");

    w0b.insertBefore(newBox, wAddbutton0b);

}


function addnew_aqfield() 
{
    let newBox = document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("aqfield");
    newBox.setAttribute("placeholder","Enter here")

    let aq0b = document.getElementById("aq");
    let aqAddbutton0b = document.getElementById("aqAddbutton");

    aq0b.insertBefore(newBox, aqAddbutton0b);

}


function addnew_skillfield() 
{
    let newBox = document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("skillfield");
    newBox.setAttribute("placeholder","Enter here");
    newBox.setAttribute("rows","1");

    let skill0b = document.getElementById("skill");
    let skillAddbutton0b = document.getElementById("skillAddbutton");

    skill0b.insertBefore(newBox, skillAddbutton0b);

}

function addnew_lngfield() 
{
    let newBox = document.createElement("textarea");
    newBox.classList.add("form-control");
    newBox.classList.add("lngfield");
    newBox.setAttribute("placeholder","Enter here")
    newBox.setAttribute("rows","1");
    
    let lng0b = document.getElementById("lng");
    let lngAddbutton0b = document.getElementById("lngAddbutton");

    lng0b.insertBefore(newBox, lngAddbutton0b);

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
    
    const skillinputs=document.querySelectorAll('.skillfield');
    const skillList=document.querySelector('.sk-list');
    let skills='';
    skillinputs.forEach(input=>{const skill=input.value.trim(); if (skill){skills +=`<li class="sk-item">${skill}</li>`}});
    skillList.innerHTML=skills;

    const lnginputs=document.querySelectorAll('.lngfield');
    const lngList=document.querySelector('.lng-list');
    let lngs='';
    lnginputs.forEach(input=>{const lng=input.value.trim(); if (lng){lngs +=`<li class="lng-item">${lng}</li>`}});
    lngList.innerHTML=lngs;
    
    
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


