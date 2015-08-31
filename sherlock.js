//Input Example

_INPUT = 0;
wAB = [];//vector for squares
wR = [];//vector for results of square

//Expected Output
/*
2	
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

//Create by Eduardo Pérez Tlaxca   on   08/30/15

//Constraints
//1<=T<=100
//1<=A<=B<=10^9

	B = Math.floor((Math.random()*1000000000)+1);
//create a random value between 1 and 10^9
	
	A = Math.floor((Math.random()*B)+1);
//create a random value between 1 and B	


function isFloat(n)
{	return n%1!=0;		} 

j=1; 
k=1; 

for(i=A;i<=B;i++)
{						
	e = Math.sqrt(i);
	w = isFloat(e); 
	
	if(w==false) 
	{	
		wAB[j]=e;
		wR[k]=i;

		j++;
		k++;
		_INPUT++;		
		
		if (_INPUT>=100)
		{	break;
		}
	}
}
T=_INPUT;

console.log("\n\tW:Watson");
console.log("\n\tS:Sherlock");
console.log("\nW: Hi! Shelock, Can you tell me how many numbers of square are between\n"+A+" and "+B+" but only I want minimum 100 cases");

switch(_INPUT)
{
	case 0:
	console.log("\nS:Of Course, I'll give you cases about numbers of square\nbetween "+A+" and "+B);
	
	break;
	
	case 1:	
	console.log("\nS:Of Course, I'll give you only cases about numbers of square\nbetween "+A+" and "+B);	
	
	break;
	
	default:	
	console.log("\nS:Of Course, I'll give you only "+T+" cases about numbers of square\nbetween "+A+" and "+B);	
	
	break;
}
switch(T)
{
	case 0:
		console.log("\nS: There are not cases about numbers of squares between "+A+" and "+B);
	break;
		
	case 1:
		console.log("\nS: Only there "+_INPUT+" case about numbers of square between "+A+" and "+B+"\nand it is next:\n");

	for(i in wAB)
	console.log(i+"\t"+wAB[i]+" * "+wAB[i]+" = "+wR[i]);		
	break;
	
	default:
	console.log("\nS: The numbers of cases about numbers of square between "+A+" and "+B+"\nare "+_INPUT+" and they are next:\n");
	for(i in wAB)
	console.log(i+"\t"+wAB[i]+" * "+wAB[i]+" = "+wR[i]);
			
	break;
}
