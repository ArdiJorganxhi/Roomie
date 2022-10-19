




  const data =  require('../assets/data.json')
  const result = data;


var cities = []
var districts = []
var neighbourhoods = []

var count = 0;



  result.forEach(element => {
    if (count == 0) {
       cities.push('City')
     }
   cities.push(element.name)    
   count++;
    
 });







  result[28]['towns'].forEach(element => {

    if (count == 0) {
             districts.push('District')
            }
            districts.push(element.name)
            count++;

            
 
    
    
});










  result[28].towns[13].districts.forEach(element => {

    element.quarters.forEach(element1 => {

        if (count == 0) {
            neighbourhoods.push('Neighbourhood')
          }
          
          neighbourhoods.push(element1.name)
          count++;
        
    });

    
});








  console.log(neighbourhoods)

 






















