function num_to_name()
{
    var day_num = document.querySelector("#weekdays_number").value;

    if(weekdays_number.value=="1")
    {
        document.querySelector(".result_text").innerHTML="Monday";
    }

    else if(weekdays_number.value=="2")
    {
        document.querySelector(".result_text").innerHTML="Tuesday";
    }

    else if(weekdays_number.value=="3")
    {
        document.querySelector(".result_text").innerHTML="Wednesday";
    }

    else if(weekdays_number.value=="4")
    {
        document.querySelector(".result_text").innerHTML="Thursday";
    }

    else if(weekdays_number.value=="5")
    {
        document.querySelector(".result_text").innerHTML="Friday";
    }

    else if(weekdays_number.value=="6")
    {
        document.querySelector(".result_text").innerHTML="Saturday";
    }

    else if(weekdays_number.value=="7")
    {
        document.querySelector(".result_text").innerHTML="Sunday";
    }

    else
    {
        alert("Please select day number");
    }
}

function name_to_num()
{
    var day_name = document.querySelector("#weekdays_name").value;

    if(weekdays_name.value=="monday")
    {
        document.querySelector(".result_text2").innerHTML="1";
    }

    else if(weekdays_name.value=="2")
    {
        document.querySelector(".result_text2").innerHTML="2";
    }

    else if(weekdays_name.value=="3")
    {
        document.querySelector(".result_text2").innerHTML="3";
    }

    else if(weekdays_name.value=="4")
    {
        document.querySelector(".result_text2").innerHTML="4";
    }

    else if(weekdays_name.value=="5")
    {
        document.querySelector(".result_text2").innerHTML="5";
    }

    else if(weekdays_name.value=="6")
    {
        document.querySelector(".result_text2").innerHTML="6";
    }

    else if(weekdays_name.value=="7")
    {
        document.querySelector(".result_text2").innerHTML="7";
    }

    else
    {
        alert("Please select day name");
    }
}

function Clean1(){
    document.querySelector(".result_text").innerHTML="";
}

function Clean2(){
document.querySelector(".result_text2").innerHTML="";
}