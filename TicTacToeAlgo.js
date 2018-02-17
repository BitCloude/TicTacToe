

//Function to check winner
//takes a 3x3 array
    var checkResult = function(arr){
        
        for(var i = 0; i<3;i++){
            var rowSum = 0;
            for(var j = 0; j<3;j++){
                rowSum += arr[i][j];
            }
            if(rowSum === 3)
                console.log("Circle WIN!");
            else if(rowSum === -3)
                console.log("Cross WIN!");
        }
        
        for(var i = 0; i<3;i++){
            var colSum = 0;
            for(var j = 0; j<3;j++){
                colSum += arr[j][i];
            }
            if(colSum === 3)
                console.log("Circle WIN!");
            else if(colSum === -3)
                console.log("Cross WIN!");
        }
        
        if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
            console.log("Circle WIN!");
        else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
            console.log("Cross WIN!");
        
        if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
            console.log("Circle WIN!");
        else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
            console.log("Cross WIN!");
    };

  //To test 
    var arr =new Array(3)
        for (i=0; i <3; i++)
            arr[i]=new Array(3)

    arr[0][0]=-1;
    arr[0][1]=-1;
    arr[0][2]=-1;
    arr[1][0]=0;
    arr[1][1]=0;
    arr[1][2]=0;
    arr[2][0]=0;
    arr[2][1]=0;
    arr[2][2]=0;

    checkResult(arr);
