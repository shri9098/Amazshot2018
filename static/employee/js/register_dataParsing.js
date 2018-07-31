
//Function to send to DJango
function getRegisterData()
{
    $('#btnSubmit').attr('disabled','disabled');
    $("#Preloader").show();
    var first_name=titleCase(document.getElementById("first_name").value);
    var last_name=titleCase(document.getElementById("last_name").value);
    var father_name=titleCase(document.getElementById("fathers_name").value);
    var mother_name=titleCase(document.getElementById("mothers_name").value);
    var designation=document.getElementById("designation").value;
    var blood_group=document.getElementById("blood_group").value;
    var joining_date=document.getElementById("joining_date").value;
    var email=(document.getElementById("email").value).toLowerCase();
    var number=document.getElementById("mobile").value;
    var gender=document.getElementById("gender").value;


    var address=titleCase(document.getElementById("address").value);
    var dob=document.getElementById("dob").value;

    var pic=$('#pic')[0].value;

    var image=pic.split('\\').pop();
    image = image.split(' ').join('_');
    var register_data={};
    register_data['first_name']=first_name;
    register_data["last_name"]=last_name;
    register_data["father_name"]=father_name;
    register_data["mother_name"]=mother_name;
    register_data["blood_group"]=blood_group;
    register_data["email"]=email;
    register_data["number"]=number;
    register_data["gender"]=gender;
    register_data["designation"]=designation;
    register_data["joining_date"]=joining_date;
    register_data["address"]=address;
    register_data["dob"]=dob;


    // Get the html uploaded file
    var data = new FormData();
    var img = $('#pic')[0].files[0];
    data.append('img', img);
    data.append('employee-data',JSON.stringify(register_data));
    // alert(JSON.stringify(register_data));
    data.append('img_path', image.toString());
    $.ajax({
        url : "/register/",
        method : "POST",
        data : data,
        processData: false,
        contentType: false,
        success:function(json_data)
        {
            if(json_data.response==='success'){
                // setTimeout(function(){
                //     $("#content").hide();
                //     $("#loader").show();
                // },3000);
                document.getElementById("modal1_text").innerHTML = "Registration Successful.";
                $('#modal1').modal('open');
                setTimeout(function() {
                    location.reload();
                }, 3000);
            }
            else{
                document.getElementById("modal1_text").innerHTML = "Registration Failed.\nSomething went wrong.";
                $('#modal1').modal('open');
            }
        },
        complete: function(){
            // $("#Preloader").hide();
             setTimeout(function() {
                    location.reload();
                }, 3000);
        }
    });

}
function titleCase(str)
{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}