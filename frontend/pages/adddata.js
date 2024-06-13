document.getElementById("frm").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data =new FormData(e.target)
    console.log(data);
    const res=await fetch("http://localhost:3000/api/add",{
        method:"POST",
        body:data
    })
    console.log(res);
})