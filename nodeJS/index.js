console.log('hello')

// const getProducts = async() => {
//     const result = await fetch('http://localhost:5000/this/is/my/route')
//     method: 'GET';
//     headers: {
//         'Content-Type': 'application/json',
//     },

// }

async function getProducts() {
    const response = await
    fetch('http://localhost:5000/this/is/my/route')
    const products = await response.json()
    console.log(products)
}

getProducts()


const getProducts2 = () => {
    fetch(`http://localhost:5000/this/is/my/route`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        return response.json();
      })
      .then((prod) => {
        console.log(prod);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
   
    //   console.log(result);
   
    //   const data = await result.json();
    //   console.log(data);
  };

getProducts2()