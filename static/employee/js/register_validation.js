
$(document).ready(function()
{
    $('#modal1').modal();
    $('#modal2').modal({dismissible: false});
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 20, // Creates a dropdown of 15 years to control year
        format:'dd/mm/yyyy',
        min: new Date(1990,1,1), // Start Date from
        max: true,              // Max date to today's date
        closeOnSelect: true,   // Close the datepicker when selected
        closeOnClear: true,    // close when select clear button
        onSet: function (ele) {
            if(ele.select){this.close();}
        },
        today:''                // Remove button today
    });
    $('#pic').change(function ()
    {
        // alert('This file size is: ' + this.files[0].size/1024 + "KB");
        if (this.files[0].size/1024> 2048){
            Materialize.toast("Please Upload Image less than 2 MB.",2200);
//            document.getElementById("modal1_text").innerHTML = "Please Upload Image less than 2 MB.";
//            $('#modal1').modal('open');
        }
        else {
            var img = $('#pic')[0].files[0];
            var reader = new FileReader();
            // console.log("--------1--------");
            reader.onloadend = function(evt)
            {
                $('#displayImg').attr('src',evt.target.result);
            };
            reader.readAsDataURL(img);
        }
    });

    $("#first_name").change(function ()
    {
        $('#first_name_error').hide();
    });
    $("#first_name").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#first_name_error').html("First Name should not be blank.");
            $("#first_name_error").show();
        }
    });
    $("#last_name").change(function ()
    {
        $('#last_name_error').hide();
    });
    $("#last_name").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#last_name_error').html("Last Name should not be blank.");
            $("#last_name_error").show();
        }
    });
    $("#fathers_name").change(function ()
    {
        $('#fathers_name_error').hide();
    });
    $("#fathers_name").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#fathers_name_error').html("Father's Name should not be blank.");
            $("#fathers_name_error").show();
        }
    });
    $("#mothers_name").change(function ()
    {
        $('#mothers_name_error').hide();
    });
    $("#mothers_name").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#mothers_name_error').html("Mother's Name should not be blank.");
            $("#mothers_name_error").show();
        }
    });
    $("#email").change(function ()
    {
        $('#email_error').hide();
    });





    $("#designation").change(function ()
    {
        $('#designation_name_error').hide();
    });
    $("#designation").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#designation_name_error').html("Mother's Name should not be blank.");
            $("#designation_name_error").show();
        }
    });

    $("#blood_group").change(function ()
    {
        $('#blood_group_error').hide();
    });
    $("#designation").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#blood_group_error').html("Mother's Name should not be blank.");
            $("#blood_group_error").show();
        }
    });



    $("#email").focusout(function () {
        var email_atpos = this.value.indexOf("@");
        var email_dotpos = this.value.lastIndexOf(".");
        if (this.value== null || this.value == "") {
            $('#email_error').html("Email should not be blank.");
            $("#email_error").show();
        }else if(1>email_atpos || email_atpos+2>email_dotpos || email_dotpos+2>=this.value.length){
            $('#email_error').html("Email a valid Email Address.");
            $("#email_error").show();
        }
    });
    $("#mobile").change(function ()
    {
        $('#mobile_error').hide();
    });
    $("#mobile").focusout(function () {
        if (this.value == null || this.value == "") {
            $('#mobile_error').html("Mobile number should not be blank.");
            $("#mobile_error").show();
        }else if(this.value.length!=10){
            $('#mobile_error').html("Enter valid Mobile number.");
            $("#mobile_error").show();
        }
        else if (! this.value.match("^[789][0-9]{9}$")){
            $('#mobile_error').html("Enter valid Mobile number...");
            $("#mobile_error").show();
        }
    });
    $("#gender").change(function ()
    {
        $('#gender_error').hide();
    });
    $("#gender").focusout(function ()
    {
        if (this.value == null || this.value == "") {
            $('#gender_error').html("Gender should not be blank.");
            $("#gender_error").show();
        }
    });

    $("#address").change(function ()
    {
        $('#address_error').hide();
    });
    $("#address").focusout(function ()
    {
        if (this.value == null || this.value == "") {
            $('#address_error').html("Address should not be blank.");
            $("#address_error").show();
        }
    });
    $("#dob").change(function ()
    {
        if (this.value == null || this.value == "") {
            $('#dob_error').html("DOB should not be blank.");
            $("#dob_error").show();
        }
        else $('#dob_error').hide();
    });
    $("#dob").focusout(function ()
    {
        if (this.value == null || this.value == "") {
            $('#dob_error').html("DOB should not be blank.");
            $("#dob_error").show();
        }
    });


    $("#joining_date").change(function ()
    {
        if (this.value == null || this.value == "") {
            $('#joining_date_error').html("joining_date should not be blank.");
            $("#joining_date_error").show();
        }
        else $('#joining_date_error').hide();
    });
    $("#joining_date").focusout(function ()
    {
        if (this.value == null || this.value == "") {
            $('#joining_date_error').html("Join-Date should not be blank.");
            $("#joining_date_error").show();
        }
    });

    // $("#dob").focus(function () {
    //     alert("focus on dob");
    // });

    $("#pic").change(function ()
    {
        $('#pic_error').hide();
    });

    $("#btnSubmit").click(function(e) {
        if(validate()==false){
        }
        else{
            document.getElementById("modal2_text").innerHTML = "Are you sure to want to register ?";
            $('#modal2').modal('open');
        }
    });
    $("#okRegisterData").click(function(e)
    {
        $.getScript("/static/employee/js/register_dataParsing.js", function () {
            getRegisterData();
        });
    });
});

function validate() {
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var fathers_name = $("#fathers_name").val();
    var mothers_name = $("#mothers_name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var address = $("#address").val();
    var gender = $("#gender").val();
    var dob=$("#dob").val();
    var joining_date=$("#joining_date").val();
    var blood_group=$("#blood_group").val();
    var desi=$("#designation").val();
    var pic=$("#pic").val();
    if (first_name == null || first_name == "") {
        document.getElementById("first_name").focus();
        $('#first_name_error').html("First Name should not be blank.");
        $("#first_name_error").show();
        return false;
    }else { $("#first_name_error").hide();}

    if (last_name == null || last_name == "") {
        document.getElementById("last_name").focus();
        $('#last_name_error').html("Last Name should not be blank.");
        $("#last_name_error").show();
        return false;
    }else { $("#last_name_error").hide();}

    if (fathers_name == null || fathers_name == "") {
        document.getElementById("fathers_name").focus();
        $('#fathers_name_error').html("Father's Name should not be blank.");
        $("#fathers_name_error").show();
        return false;
    }else { $("#fathers_name_error").hide();}

    if (mothers_name == null || mothers_name == "") {
        document.getElementById("mothers_name").focus();
        $('#mothers_name_error').html("Mother's Name should not be blank.");
        $("#mothers_name_error").show();
        return false;
    }else { $("#mothers_name_error").hide();}
    var email_atpos = email.indexOf("@");
    var email_dotpos = email.lastIndexOf(".");
    if (email== null || email == "") {
        document.getElementById("email").focus();
        $('#email_error').html("Email should not be blank.");
        $("#email_error").show();
        return false;
    }else if(1>email_atpos || email_atpos+2>email_dotpos || email_dotpos+2>=email.length){
        document.getElementById("email").focus();
        $('#email_error').html("Email a valid Email Address.");
        $("#email_error").show();
        return false;
    }else{ $("#email_error").hide();}
    if (mobile == null || mobile == "") {
        document.getElementById("mobile").focus();
        $('#mobile_error').html("Mobile number should not be blank.");
        $("#mobile_error").show();
        return false;
    }else if(mobile.length!=10){
        document.getElementById("mobile").focus();
        $('#mobile_error').html("Enter valid Mobile number.");
        $("#mobile_error").show();
        return false;
    }else { $("#mobile_error").hide();}
    if (gender == null || gender == "") {
        $('#gender_div').focus();
        $('#gender_error').html("Gender should not be blank.");
        $("#gender_error").show();
        return false;
    }else { $("#gender_error").hide();}




    if (address == null || address == "") {
        document.getElementById("address").focus();
        $('#address_error').html("Address should not be blank.");
        $("#address_error").show();
        return false;
    }else if(5>address.length){
        document.getElementById("address").focus();
        $('#address_error').html("Enter valid Address.");
        $("#address_error").show();
        return false;
    }else { $("#address_error").hide();}
    if (dob.length!=10) {
        document.getElementById("dob").focus();
        $('#dob_error').html("Select Valid Date of Birth");
        $("#dob_error").show();
        return false;
    }else{ $("#dob_error").hide();}

    if (joining_date.length!=10) {
        document.getElementById("joining_date").focus();
        $('#joining_date_error').html("Select Valid Date of Join");
        $("#joining_date_error").show();
        return false;
    }else{ $("#jd_error").hide();}


    if (desi == null || desi == "") {
        document.getElementById("designation").focus();
        $('#designation_name_error').html("Designation should not be blank.");
        $("#designation_name_error").show();
        return false;
    }else { $("#designation_name_error").hide();}

    if (blood_group == null || blood_group == "") {
        document.getElementById("blood_group").focus();
        $('#blood_group_error').html("Blood Group should not be blank.");
        $("#blood_group_error_name_error").show();
        return false;
    }else { $("#blood_group_error").hide();}





    if (pic == null || pic=="") {
        Materialize.toast("Please Upload Image",2200);

        $('#pic_error').html("Upload Image.");
        $("#pic_error").show();
        return false;
    }else { $("#pic_error").hide();}
    if ($('#pic')[0].files[0].size/1024 > 2048)
    {
        Materialize.toast("Please Upload Image less than 2 MB.",2200);
        return false;
    }
    return true;
}
