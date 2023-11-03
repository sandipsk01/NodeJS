// Confirmation from user
function deleteProduct(id){
    const result = confirm("Do you want delete this Product?");
    if(result){
        fetch("/delete-product/"+id,{
            method: "POST"
        }).then(res=>{
            if(res.ok){
                // refresh page
                location.reload()
            }
        })
    }
}