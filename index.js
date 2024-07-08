
//Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched s
//uccessfully" after a delay of 2 
//seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.  



function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("successfully");
            
        }, 2000); 
    });
}


fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });


//Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data".
// Modify your test to handle this rejection using .catch(). 

    function fetchData() {
        return new Promise((resolve, reject) => {
       
          const shouldFail = Math.random() < 0.5; 
      
          setTimeout(() => {
            if (shouldFail) {
              reject("Failed ");
            } else {
              resolve("successfully");
            }
          }, 2000); 
        });
      }
      
 
      fetchData()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error('Error occurred:', error); 
        });



// Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle errors using try and catch




        function fetchData() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const shouldFail = Math.random() < 0.5;
                if (shouldFail) {
                  reject("Failed");
                } else {
                  resolve("successfully");
                }
              }, 2000); 
            });
          }
          
          
          async function fetchDataAsync() {
            try {
              const result = await fetchData();
              return result;
            } catch (error) {
              throw error;
            }
          }
          
          async function testFetchData() {
            try {
              const result = await fetchDataAsync();
              console.log(result);
            } catch (error) {
              console.error('Error occurred:', error); 
            }
          }
          
     
          testFetchData();


//Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ".
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data
 // on the web page. Make sure to handle any errors that might occur during the fetch
 //operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

function printer (content) {
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
      res('completed')
    },2000)
  })
}


async function abc(){
  const result = await printer('data to be printed')
  console.log({result});
  console.log('hai'); 
}
abc()



function getcountryData(){
  fetch ('https://restcountries.com/v3.1/all')
.then((result)=>{
 return result.json()
})
.then((result)=>{
  console.log(result);
  for(let i=0; i < result.length; i++){
    const imageContainer=document.createElement('div');

    const heading=document.createElement('h2');
    heading.innerText= (i+1) + '.' + result[i].name.common;

    imageContainer.appendChild(heading);

   const image= document.createElement('img');
   image.src=result[i].flags.png;
   image.className='flags';

   imageContainer.appendChild(image);
   
   document.getElementById('container').appendChild(imageContainer);
  }
})
}

      