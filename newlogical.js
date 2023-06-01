// import * as d3 from "./package/dist/d3";

const nor1 = document.getElementById("nor1");
const nor2 = document.getElementById("nor2");
const xor1 = document.getElementById("xor1");
const xor2 = document.getElementById("xor2");
const not1 = document.getElementById("not1");

function norOut(){
    let val1 = norin1.value;
    let val2 = norin2.value;
    let val3 = "";
    let greater;
    if(val1.length<=val2.length){
        greater = val1.length;
    }
    else{
        greater = val2.length
    }
    let i=0;
    let total = greater;
    while(greater--){
        let temp = (parseInt(val1[i])+parseInt(val2[i]));
        if(temp>=1){
            val3+="0";
        }else{
            val3+="1";
        }
        i++;
    }
    document.getElementById("norOut").value = val3;

    var chartdata=[];
    i=0;
    greater = val3.length;
    while(greater--){
        let temp = parseInt(val3[i]);
        chartdata[i]=temp;
        i++;
    }

    document.getElementById('svgNor').innerHTML = " ";

   var svg = d3.select("#svgNor").selectAll("rect")
   .data(chartdata)
   .enter().append("rect")
   .attr("height",function(d, i) {if(chartdata[i]==1){return d*50}else{return 0}})
         .attr("width","40")
         .attr("x",function (d, i){ return (i*60)+10;})
         .attr("y",function(d, i) {if(chartdata[i]==1){return 100 -50*d}else{return 0}});
//    svg.selectAll("rect")
//     .data(chartdata)
//     .enter().append("rect")
//     .attr("height","250")
//           .attr("width","40")
//           .attr("x",function (d, i){ return (i*60)+10;})
//           .attr("y",function(d, i) {if(chartdata[i]==1){return d}});
}

function xorOut(){
    let val1 = xor1.value;
    let val2 = xor2.value;
    let val3="";
    let greater;
    if(val1.length>=val2.length){
        greater = val1.length;
    }
    else{
        greater = val2.length
    }
    let i=0;
    while(greater--){
        let temp = (parseInt(val1[i])+parseInt(val2[i]));
        if(temp==1){
            val3+="1";
        }else{
            val3+="0";
        }
        i++;
    }
    document.getElementById("xorOut").value = val3;

    var chartdata=[];
    i=0;
    greater = val3.length;
    while(greater--){
        let temp = parseInt(val3[i]);
        chartdata[i]=temp;
        i++;
    }

    document.getElementById('svgNor').innerHTML = " ";

   var svg = d3.select("#svgXor").selectAll("rect")
   .data(chartdata)
   .enter().append("rect")
   .attr("height",function(d, i) {if(chartdata[i]==1){return d*50}else{return 0}})
         .attr("width","40")
         .attr("x",function (d, i){ return (i*60)+10;})
         .attr("y",function(d, i) {if(chartdata[i]==1){return 100 -50*d}else{return 0}});
}

function notOut(){
    let val1 = not1.value;
    let val2="";
    let len = val1.length;
    let i=0;
    while(len--){
        if(val1[i]==0){
            val2+="1";
        }else{
            val2+="0";
        }
        i++;
    }
    document.getElementById("notOut").value = val2;

    var chartdata=[];
    i=0;
    greater = val2.length;
    while(greater--){
        let temp = parseInt(val2[i]);
        chartdata[i]=temp;
        i++;
    }

    document.getElementById('svgNor').innerHTML = " ";

   var svg = d3.select("#svgNot").selectAll("rect")
   .data(chartdata)
   .enter().append("rect")
   .attr("height",function(d, i) {if(chartdata[i]==1){return d*50}else{return 0}})
         .attr("width","40")
         .attr("x",function (d, i){ return (i*60)+10;})
         .attr("y",function(d, i) {if(chartdata[i]==1){return 100 -50*d}else{return 0}});
}