getMap()



async function getMap(){

const data = await require('../assets/data.json')
const result = data;


var cities = []
var districts = []
var neighbourhoods = []

var count = 0;
//   result.forEach(element => {
//     if (count == 0) {
//         cities.push('City');
//       }
//       cities.push(element['name']);
//       count++;
    
// });

result[0].towns.forEach(element => {

    if (count == 0) {
             districts.push('District');
            }
            districts.push(element['name']);
            count++;
    
    
    
});

for (var element1 in result[0].towns
    [0].districts) {

  for (var element in element1.quarters) {
    if (count == 0) {
      neighbourhoods.push('Neighbourhood');
    }
    
    neighbourhoods.push(element.name);
    count++;
  }
}

result[0].towns[0].districts.forEach(element => {

    element.quarters.forEach(element1 => {

        if (count == 0) {
            neighbourhoods.push('Neighbourhood');
          }
          
          neighbourhoods.push(element1.name);
          count++;
        
    });

    
});


  console.log(neighbourhoods)


}




