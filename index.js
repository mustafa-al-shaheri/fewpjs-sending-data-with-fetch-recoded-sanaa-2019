// Add your code here

    function submitData(name,email){

      let formData={
        name:name,
        email:email

      }

      let configObj={
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }
      return fetch("http://localhost:3000/users", configObj)
      .then (function(response){
        return response.json();
      })
      .then (function(object){
        console.log(object);
        return document.body.innerHTML=object.id
      })
      .catch(function(error){
        alert("Bad things! Ragnarok!");
        console.log(error.message);
        return document.body.innerHTML=error.message;
      })
    }

    submitData("mustafa", "mustafa.alshaheri@gmail.com");

  