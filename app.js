$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});













// fetch(`https://newsapi.org/v2/everything?q=palestine&from=2024-03-22&sortBy=publishedAt&apiKey=330c21926ee641a784c841b3312654ed`)
//     .then(data => data.json())
//     // .then(data =>console.log(data))
//     .then(data => {


//         for (let i = 0; i < 4; i++) {
//             const letest = document.querySelector('.letest')
//             // console.log(data.articles[i])
//             letest.innerHTML += `
//             <div class="row row-cols-1 row-cols-md-1  g-4">
                      
//                       <div class="col">
//                       <div class="card">
//                           <img src="${ data.articles[i].urlToImage } " class="card-img-top" alt="...">
//                           <div class="card-body">
//                               <h5 class="card-title">${data.articles[i].title}</h5>
//                               <p class="card-text">${data.articles[i].description}</p>
                              
            
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               </div>    
                      
                      
                      
                      
//                       `

//         }
//     }

//     )
//     .catch((err) => console.log(err))

