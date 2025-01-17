let electricity_gp = ["A","B","C"];
let time1 = ["0-1","5-9","17-21"];
let time2 = ["1-5","13-17"];
let time3 = ["1-5","9-13","21-24"];
let gpA_time = [time1,time2,time3];
let gpB_time = [time3,time1,time2];
let gpC_time = [time2,time3,time1];
let next_time;
let next_string;
let light_up;

let time_text = document.getElementById("time");
let light_condition_text = document.getElementById("light_condition");
let next_time_text = document.getElementById("next_time");


let choose_gp=gpA_time;
result();
function change_gp()
{
    let select_gp = document.getElementById("select").value;
    console.log(select_gp);
    if(select_gp==="A")
    {
        choose_gp = gpA_time;
    }
    else if(select_gp==="B")
    {
        choose_gp = gpB_time;
        
    }
    else if(select_gp==="C")
    {
        choose_gp = gpC_time;
    }
    result();
    

};


function result()
{


let d = new Date();
let month = d.getMonth()+1;


let date = d.getDate();
let time = d.getHours()+(d.getMinutes()/60);




console.log(time);
let start_date = 5;
let time_index = ((date - start_date)%3);
console.log("GpA electricity time "+gpA_time[time_index]);
console.log("GpB electricity time "+gpB_time[time_index]);
console.log("GpC electricity time "+gpC_time[time_index]);


let current_time = choose_gp[time_index];
for(let j=0; j<current_time.length; j++)
{
    let times = current_time[j].split("-");
    let smaller_times = times[0];
    let bigger_times = times[1];
    

    if(time >= smaller_times&& time<=bigger_times)
    {
        console.log(smaller_times);
        console.log(bigger_times);
        console.log("Light up");
        light_up =true;

        if(bigger_times==24)
        {
            next_time = 1;
            next_string = "မနက်ဖြန် မနက် "+next_time +" နာရီ";
        }
        else
        {
            next_time = bigger_times%12;
            next_string = next_time + " နာရီ";
        }

        
        break;
    }
    
    if(time > bigger_times)
    {
        
        if(j==2)
        {
            next_time = 1;
            next_string = "မနက်ဖြန် မနက် "+next_time +" နာရီ";
        }
        else
        {
            let temp = current_time[j+1].split("-");
            next_time = temp[0];
            next_string = (next_time%12)+" နာရီ";
        }
    }
    else if(time < smaller_times&&j==0)
    {
        next_time = 1;
        next_string = next_time +" နာရီ";
    }
    

    if(j===current_time.length-1)
    {
        console.log(smaller_times);
        console.log(bigger_times);
        // console.log("Light Down");
        light_up = false;
    }

}
time_text.innerText = "အချိန်နာရီ: " + d.getHours()%12+" နာရီ "+ d.getMinutes()+"မိနစ်";
if(light_up ==true)
{
    light_condition_text.innerText = "မီးလာနေပါသည်";
    // console.log("နောက်ထပ်မီးပျက်မည့်အချိန်မှာ-");
    if(next_time_text.classList.contains("alert-primary"))
        {
            next_time_text.classList.remove("alert-primary");
        }
        else if(next_time_text.classList.contains("alert-success"))
        {
            next_time_text.classList.remove("alert-success");
        }
    next_time_text.classList.add("alert-danger");
    next_time_text.innerText = next_string+" တွင်\nမီးပျက်ပါမည်";
}
else if(light_up == false)
{
    light_condition_text.innerText = "မီးပျက်နေပါသည်";
    // console.log("နောက်ထပ်မီးလာမည့်အချိန်မှာ-");
    if(next_time_text.classList.contains("alert-primary"))
    {
        next_time_text.classList.remove("alert-primary");
    }
    else if(next_time_text.classList.contains("alert-danger"))
    {
        next_time_text.classList.remove("alert-danger");
    }
    

    next_time_text.classList.add("alert-success");
    next_time_text.innerText = next_string+" တွင်\nမီးလာပါမည်";
}
};










