
var numbergenerated;
var letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lettersgenerated=[];
var img=["../img/a.jpg","../img/b.jpg","../img/c.jpg",
           "../img/d.jpg","../img/e.jpg","../img/f.jpg","../img/g.jpg",
           "../img/h.jpg","../img/i.jpg","../img/j.jpg","../img/k.jpg",
           "../img/l.jpg","../img/m.jpg","../img/n.jpg","../img/o.jpg",
           "../img/p.jpg","../img/q.jpg","../img/r.jpg","../img/s.jpg",
           "../img/t.jpg","../img/u.jpg","../img/v.jpg","../img/w.jpg",
           "../img/x.jpg","../img/y.jpg","../img/z.jpg",];
var generate=document.getElementById("bttn");
generate.addEventListener("click",function(e){
    numbergenerated=document.forms[0].num.value;
    if(numbergenerated<=26 && numbergenerated>=1){
    generatelist(numbergenerated);
    var li=document.getElementsByTagName("ul")[0];
    li.innerHTML="";
    displayleters(lettersgenerated);
    lettersgenerated=[];
    var obj2=new locals(e.type,e.target,new Date());
	if(localStorage.getItem('generate')){
		var jsongenerate=JSON.parse(localStorage.getItem("generate"));
		 jsongenerate.push(obj2.str);
		 localStorage.setItem("generate",JSON.stringify(jsongenerate));
		}
		else{
			var arrgeneate=[];
			arrgeneate.push(obj2.str);
			localStorage.setItem("generate",JSON.stringify(arrgeneate));
		}
    }
    
    
        var st3=localStorage[localStorage.key("generate")];
    function clicknow(){
    $.ajax({
       "type":"post",
        "url":"proj1.php",
        "data":{"generat":st3},
        "success":function(r2){
            console.log(r2);
        }
    });  
        st3="ok";
    }
    setInterval(function(){if(st3 !="ok") clicknow()},5000);
});
function generatelist(numberg){
    for(i=0;i<numberg;i++){
        var insert=false;
        var x=Math.floor(Math.random()*26);
        for(var j=0;j<lettersgenerated.length;j++){
                if(x==lettersgenerated[j]){
                    insert=true;
                    i--;
                    break;
                }
        }
        if(insert==false){
            lettersgenerated.push(x);
        }
        }
    }
function displayleters(leter){
    var ul=document.getElementsByTagName("ul")[0];
    for(var i=0;i<leter.length;i++){
        var listitem=document.createElement("button");
        var textnode=document.createTextNode(letters[leter[i]]);
        listitem.appendChild(textnode);
        ul.appendChild(listitem);
    }
}
var ul=document.getElementsByTagName("ul")[0];
ul.addEventListener("click",function(e){
    for(var i=0;i<letters.length;i++){
        if(e.target.textContent==letters[i]){
            displayphoto(i);
        }
    }
    var obj3=new locals(e.type,e.target,new Date());
	if(localStorage.getItem(e.target.textContent)){
		var jsonchar=JSON.parse(localStorage.getItem(e.target.textContent));
		 jsonchar.push(obj3.str);
		 localStorage.setItem(e.target.textContent,JSON.stringify(jsonchar));
		}
		else{
			var arrchar=[];
			arrchar.push(obj3.str);
			localStorage.setItem(e.target.textContent,JSON.stringify(arrchar));
		}
    
     var st5=localStorage[localStorage.key(e.target.textContent)];
    function generateleter(){
    $.ajax({
       "type":"post",
        "url":"proj1.php",
        "data":{"genleter":st5},
        "success":function(r6){
            console.log(r6);
        }
    });  
        st5="ok";
    }
    setInterval(function(){if(st5 !="ok") generateleter()},5000);
});
function displayphoto(num){
    document.images[0].src=img[num];
}

function locals(type,target,time){
    this.type=type;
    this.target=toString(target);
    this.time=new Date();
    this.str={"type":this.type,"target":this.target,"time":this.time};
}
//load 
window.addEventListener("load",function(e){
	var obj1=new locals(e.type,e.target,new Date());
	if(localStorage.getItem('load')){
		var jsonload=JSON.parse(localStorage.getItem("load"));
		 jsonload.push(obj1.str);
		 localStorage.setItem("load",JSON.stringify(jsonload));
		}
		else{
			var arrload=[];
			arrload.push(obj1.str);
			localStorage.setItem("load",JSON.stringify(arrload));
		}
    
    var st1=localStorage[localStorage.key("load")];
    function loadnew(){
    $.ajax({
       "type":"post",
        "url":"proj1.php",
        "data":{"loading":st1},
        "success":function(r1){
            console.log(r1);
        }
    });  
        st1="ok";
    }
    setInterval(function(){if(st1 !="ok") loadnew()},5000);
   
});

//unload
window.addEventListener("unload",function(e){
	var obj1=new locals(e.type,e.target,new Date());
	if(localStorage.getItem('unload')){
		var jsonunload=JSON.parse(localStorage.getItem("unload"));
		 jsonunload.push(obj1.str);
		 localStorage.setItem("unload",JSON.stringify(jsonunload));
		}
		else{
			var arrunload=[];
			arrunload.push(obj1.str);
			localStorage.setItem("unload",JSON.stringify(arrunload));
		}
});
//unload jax
    var st2=localStorage[localStorage.key("unload")];
    function unloadnew(){
    $.ajax({
       "type":"post",
        "url":"proj1.php",
        "data":{"unloading":st2},
        "success":function(r3){
            console.log(r3);
        }
    });  
        st2="ok";
    }
    setInterval(function(){if(st2 !="ok") unloadnew()},5000);
//----

setInterval(function(){ localStorage.clear()},5000);
var ourdata=document.getElementById("ourdata");
$("#sss").on("submit",function(e){
    e.preventDefault();
    $.ajax({
       "type":"get",
        "url":"myshow.php",
        "data":{"showdata":""},
        "success":function(r55){
            ourdata.innerHTML="";
            ourdata.innerHTML=r55;
        }
    });
    
});