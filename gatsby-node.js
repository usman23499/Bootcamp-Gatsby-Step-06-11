var path=require('path'); // use node js for create a new path


exports.createPages=async  ({actions,graphql})=>{
    const {createPage}=actions;
    const result =await graphql( // form graph ql http://localhost:8000/___graphql
        `{
            allContentfulElectronic {
                nodes {
                  slug
                  title
                  description {
                    raw
                  }
                }
              } 
        }`
    )


console.log(JSON.stringify(result)); // beacuse data is not is json escepially texr area wala

result.data.allContentfulElectronic.nodes.forEach((obj)=>{
    createPage({
        path:`/products/${obj.slug}`, // page create according to name
        component:path.resolve('./src/template/product.tsx'),
        context:{
            itemDetails: obj
        }
    
    })
})

}