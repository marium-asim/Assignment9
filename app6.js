Chapter38-44
Task1

// var a=+prompt("Enter a number");
// var b=+prompt("Enter the power of " + a);
// var sum=1;
//  function power(a,b)
//  {
//          for(var i=0;i<b;i++)
//          {
//              sum=sum*a;
//          }
//         return sum;
//  }
//  var res=power(a,b);
// alert(a + " raised to " + b  + " is equal to " + res);


Task2
// var lyear=+prompt("Enter a year");
// function leapYear(year)
// {
//     if (year % 4 == 0 || year % 400==0 && (year % 100 !== 0))
//     {   
//         alert(year + " is a leap year");
//     }
//     else{
//         alert(year + " is not a leap year");
//     }        
// }
// leapYear(lyear);


Task3
// var a=+prompt("Enter the length of 1st side of triangle");
// var b=+prompt("Enter the length of 2nd side of triangle");
// var c=+prompt("Enter the length of 3rd side of triangle");
// var S,area;
// function calcS(a,b,c)
// {
//     S= (a+b+c)/2;
//     return S;
// }
// S=calcS(a,b,c);
// function calArea(S,a,b,c)
// {
//     area=S*(S-a)*(S-b)*(S-c);
//     return area;
// }
// var res=calArea(S,a,b,c);
// alert("Area of triangle= " + res);

Task4
// var marks1=+prompt("Enter your marks for first subject");
// var marks2=+prompt("Enter your marks for second subject");
// var marks3=+prompt("Enter your marks for third subject");
// var totalMarks=300;
// var sum;
// var result=main(marks1,marks2,marks3,totalMarks);

// function main(a,b,c,totalMarks)
// {   var obtainedMarks=a+b+c;
//     var avg=average(obtainedMarks);
//     var percent=percentage(totalMarks,obtainedMarks);
//     alert("Average Marks= " + avg);
//     alert("Percentage of Marks= " + percent + "%");
// }

// function average(marks)
// {   
//     var res=marks/3;
//     return res;   
// }

// function percentage(total,obtained)
// {
//     var  per=(obtained/total) * 100;
//     return per;
// }

Task5
// var name="Pakistan";
// function findIndex(name)
// {
//     for(var i=0;i<name.length;i++)
//     {
//         if(name[i]==='i')
//         {
//             alert("Index of i= " + i);
//             break;
//         }
//     }
// }
// findIndex(name);

Task6
// var sentence="Please read this application and give me gratuity";
// var ch=sentence.toLowerCase().split("");
// function calOccurrences(char)
// {
//     for(var i = 0; i < char.length; i++) 
//     {
//         if(char[i]==="a" || char[i]==="e" || char[i]==="i" || char[i]==="o" || char[i]==="u" )
//         {
//           char[i]="";
//         }
    
//     }
//     alert(char.join(""));
// }
// calOccurrences(ch);


Task7
// var sentence="Please read this application and give me gratuity";
// var ch=sentence.toLowerCase();
// var count=0;
// function calOccurrences(chars)
// {
//     for(var i = 0; i < chars.length - 1; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
        
//         if(isVowel(char) && isVowel(next)) {
//           count++
//         }
//       }
      
//       return count;
// }
// function isVowel(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var total = calOccurrences(ch);
//   alert("Occurrences of any two vowels in succession= " + total);



Task8
// var distance=+prompt("Enter the distance between any two cities in km");
// function calMetres(km)
// {   
//     var m=km*1000;
//     document.write("The distance between the two cities in metres= " + m + "m<br>"); 
// }
// function calFeet(km)
// {
//     var ft=km*3280.84;
//     document.write("The distance between the two cities in feet= " + ft + "ft<br>");
// }
// function calInches(km)
// {
//     var inches=km*39370.1;
//     document.write("The distance between the two cities in inches= " + inches + "in<br>");
// }
// function calCentimetres(km)
// {
//     var cm=km*100000;
//     document.write("The distance between the two cities in centimetres= " + cm + "cm<br>");
// }
// calMetres(distance);
// calFeet(distance);
// calInches(distance);
// calCentimetres(distance);

Task9
// var overTimeRate=12;
// var hours=+prompt("Enter total working hours");
// function overTimePay(otr,hrs)
// {
//     if(hrs>40)
//     {   
//         var pay=otr*(hrs-40)
//         alert("Overtime pay will be Rs " + pay);
//     }
// }
// overTimePay(overTimeRate,hours);

Task10
// var amount=+prompt("Enter amount to withdraw")
// function withdraw(amount)
// {
// var hundred=Math.floor(amount/100);
// var fifty=Math.floor((amount%100)/50);
// var ten=Math.floor(((amount%100)%50)/10);
// alert("You will need " + hundred + " hundred note(s), " + fifty + " fifty note(s) and " + ten + " ten note(s)" );

// }
// withdraw(amount);

Chapter43-48
Task1
//Done on html file, Solution: <a href="daraz.com.pk" onclick="alert('Welcome!')">Click here</a> 

Task2
//Done on html file

Task3
// function del(id)
// {
//     var row=document.getElementById(id);
//     var ind=row.rowIndex;
//     document.getElementById("myTable").deleteRow(ind);
//     var r=document.getElementsByTagName("tr");
//     for(var i=ind,j=ind-1;i<r.length;i++,j++)
//     r[i].childNodes[0].innerHTML=j;
// }

Task4
// function changeImg(id,src)
// {
//     var img=document.getElementById(id);
//     img.src=src;
// }

Task5
// function inc()
// {
//     var count=document.getElementById("counter");
//     var incr=count.getAttribute("value");
//     var i=parseInt(incr);
//     count.setAttribute('value', i+1);
// }

// function dec()
// { 
//     var count=document.getElementById("counter");
//     var incr=count.getAttribute("value");
//     var i=parseInt(incr);
//     count.setAttribute('value', i-1);

// }

Chapter49-52
Task1
// function info()
// {
//     var d=document.getElementById("main");
//     d.hidden=true;
//     var fname=document.getElementById("fname");
//     var lname=document.getElementById("lname");
//     var mail=document.getElementById("mail");
//     var pw=document.getElementById("pw");
//     document.write("First Name: " + fname.value + "<br>");
//     document.write("Last Name: " + lname.value + "<br>");
//     document.write("Email Address: " + mail.value + "<br>");
//     document.write("Password: " + pw.value + "<br>");
// }

Task2
// function show()
// {
//     var d=document.getElementById("info");
//     d.innerHTML="Huawei P30 Pro is the latest flagship from the Chinese telecommunications giant. Huawei's P-series is all about photography.The optical zoom, ultra-wide camera, and incredible extreme low-light performance give you powerful tools for creative shots. Portrait mode is very good. The Huawei Mate 30 Pro is a great phone, with a versatile camera system, stunning waterfall display and fantastic battery life. It features Quad cameras at the back along with 32 MP selfie-shooter."
// }

Task3
// function sub()
// { 
//     var sname=document.getElementById("sname");
//     var marks=document.getElementById("obmarks");
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(-1);
//     var i=row.rowIndex;
//     var index=i-1;
//    var cell=document.createElement('td');
//    var cell1=document.createElement('td');
//    var cell2=document.createElement('td');
//    var cell3=document.createElement('td');
//    var cell4=document.createElement('td');
//    row.appendChild(cell);
//    row.appendChild(cell1);
//    row.appendChild(cell2);
//    row.appendChild(cell3);
//    row.appendChild(cell4);
//     cell.innerHTML=index;
//  cell1.innerHTML=sname.value;
//   cell2.innerHTML=marks.value;
//     var button=document.createElement('button');
//     var btxt=document.createTextNode('Delete');
//     button.appendChild(btxt);
//     cell3.appendChild(button);
//     row.setAttribute('id',i);
//     button.onclick=function()
//     {
//        del(i);
//     };
//     var button2=document.createElement('button');
//     var btxt2=document.createTextNode('Edit');
//     button2.appendChild(btxt2);
//     cell4.appendChild(button2);
//     button2.onclick=function()
//     {
//         edit(this);
//     };
// }
// function del(id)
// {   var row=document.getElementById(id);
//     var ind=row.rowIndex;
//     document.getElementById("myTable").deleteRow(ind);
//     var r=document.getElementsByTagName("tr");
//     for(var i=ind,j=ind-1;i<r.length;i++,j++)
//     r[i].childNodes[0].innerHTML=j;
// }
// function edit(r)
// {
//     var update=prompt("Enter name",r.parentNode.parentNode.firstChild.nextSibling.innerHTML)
//     var updateMarks=prompt("Enter name",r.parentNode.parentNode.childNodes[2].innerHTML)
//     r.parentNode.parentNode.firstChild.nextSibling.innerHTML=update;
//     r.parentNode.parentNode.childNodes[2].innerHTML=updateMarks;
    
// }


Chapter53-57
Task1
// function box(id,src)
// {   var modal = document.getElementById("myModal");
//     var img = document.getElementById(id);
//     var modalImg = document.getElementById("myImg");
//     var caption = document.getElementById("caption");
//     modal.style.display = "block";
//     modalImg.src = src;
//     caption.innerHTML = img.alt;

//     var span = document.getElementsByClassName("close")[0];
//     span.onclick = function() {
//         modal.style.display = "none";
//       }
// }


Task2
// function zoomIn() {
//         txt = document.getElementById('para');
//         fSize = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//         currentSize = parseFloat(fSize);
//         txt.style.fontSize = (currentSize + 10) + 'px';
//   }

// function zoomOut()
// {
//     txt = document.getElementById('para');
//     fSize = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(fSize);
//     txt.style.fontSize = (currentSize - 10) + 'px';
// }


Chapter58-67
Task1
// var main=document.getElementById("main-content");

// console.log(main.childNodes);

// var render=document.getElementsByClassName("render");
// for(var i=0; i < render.length; i++)
// document.write(render[i].innerHTML + "<br>")

// var input=document.getElementById("first-name")
// input.value="Alex";
 
// var input=document.getElementById("last-name")
// input.value="Bank";
// var input=document.getElementById("email")
// input.value="alexbank@example.com";


Task2
// var form=document.getElementById("form-content")
// console.log(form.nodeType)

// var lastName=document.getElementById("lastName");
// console.log(lastName.nodeType);
// console.log(lastName.childNodes);

// var update= lastName;
// update.innerHTML="Last Name: Max";

// var mainContent=document.getElementById("main-content")
// console.log(mainContent.childNodes[0]);
// console.log(mainContent.lastChild);

// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);

// var email=document.getElementById("email")
// console.log(email.parentNode);
// console.log(email.nodeType);