console.log("siteFilter has run")
let listings = document.getElementsByClassName('postlisting');
let disallowedIndices = [];

for(let i = 0; i < listings.length; i++){
    if (listings[i].getElementsByClassName('title')[0].outerText.toLowerCase().includes('paid')){
        disallowedIndices.push(i)    
    }
}

let toRemove = []

disallowedIndices.forEach(el => {
    toRemove.push(listings[el])
})

toRemove.forEach(listing => listing.remove())