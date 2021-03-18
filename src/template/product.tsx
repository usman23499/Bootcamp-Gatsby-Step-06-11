import * as React from "react"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import Layout from "./../Components/layout"

const Products = ({pageContext}) => {

    console.log(pageContext)

            const itemDetails=pageContext.itemDetails
              var arrow='\a'
              arrow=arrow.replace('a','');
            var data=itemDetails.description.raw.replace(arrow,'');
            // console.log(data)
            data=JSON.parse(data);
            console.log(data)
            return (
      <Layout>
    <>

   <h1>Products Page</h1>
   <h2>
      {itemDetails.title}
   </h2>
   <p>
     {documentToReactComponents(data)}
        
      
   </p>
    </>

    </Layout>
  )
}

export default Products