app.controller("myctrl",($scope,myfactory)=>{
   
    $scope.submitform = ()=>{
    
        var obj = {};
        
        obj.FirstName=$scope.firstname;
        obj.username= $scope.mobilenumber;
        
         
        console.log(obj)
       
          var promise = myfactory.callserver(obj);
          promise.then((data)=>
          {
          console.log(data);
          if(data.key){
              $window.location.href="https://www.halanx.com/halanx-final/new1big-kfc/frontpage/forgotpass.html";
          }
          },(err)=>{
          alert("error");
          })
       
    }
})