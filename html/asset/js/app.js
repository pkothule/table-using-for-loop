var cl = console.log;

var stdArray = [{
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H"
},
{
    name: "Helium",
    weight: 4.0026,
    symbol: "He"    
},
{
    name: "Lithium",
    weight: 6.941,
    symbol: "Li"    
},
{
    name: "Beryllium",
    weight: 9.0122,
    symbol: "BE"    
},
{
    name: "Boron",
    weight:10.811,
    symbol:"B"
},
{
    name: "Carbon",
    weight: 12.0107,
    symbol:"C"
},
{
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N"
},
{
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O"
},
{
    name: "Fluorine",
    weight: 18.9984,
    symbol:"F"
},
{
    name:"Neon",
    weight:20.1797,
    symbol: "N"
}
]

var stdInfoContainer=document.getElementById('stdInfoContainer')
var result =' ';
for(var i=0; i<stdArray.length; i++){
  result +="<tr>"
  result +="<td>" + (i+1) +"</td>"
  result +="<td>"+ stdArray[i].name +"</td>"
  result +="<td>"+ stdArray[i].weight +"</td>"
  result +="<td>"+ stdArray[i].symbol +"</td>"
  result +="</tr>"
}
cl(result);
stdInfoContainer.innerHTML=result; 
   