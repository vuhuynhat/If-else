
function BMI(){
    debugger
    let weight = +document.getElementById("cannang").value ;
    let height = +document.getElementById("chieucao").value ;
    var bmi = weight /(height*height);
    
    if( bmi< 16){
        result = "gay do 3";
    }else if ( bmi<=17){
        result="gay do 2";
    }else if(bmi < 18.5){
        result="gay do 1";
    }
    else if(bmi<25){
        result="Binh thuong";
    }
    else if(bmi<30){
        result="thua can";
    }
    else if(bmi<35){
        result="beo phi do 1";
    }
    else if(bmi<40){
        result="beo phi do 2";
    }
    else {
        result="beo phi do 3";
    }
    
 document.getElementById("result").innerHTML=result
}