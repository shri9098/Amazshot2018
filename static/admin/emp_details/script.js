
//this method used to send data from user to client <td>'+ response_json.employee_id+ '</td>\n' +
var emp_id;
function GetDetail(employee_id){
    var x = document.getElementById("main_content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    emp_id = employee_id;
    console.log(emp_id);
    $.ajax({
        url: '/get_emp_detail/',
        method: 'GET',
        data:{'emp_id':emp_id} ,
        success: function (response_json){
            console.log(response_json);
            // $('#openEmpDetail').modal('open');
            var html_data='';
html_data +=    '   <div class="col s8" style="padding-top: 10px;!important;">\n' +
                '          <table class="centered">\n' +
                '            <thead style="background-color: #ffd84e"><tr>\n' +
                '                <th>Name</th>\n' +
                '                <th>Designation</th>\n' +
                '                <th>Joining Date</th>\n' +
                '            </tr>\n' +
                '            </thead>\n' +
                '            <tbody>\n' +
                '            <tr>\n' +
                '                <td>'+ response_json.first_name+ ''+ response_json.last_name+ '</td>\n' +
                '                <td>'+ response_json.designation+ '</td>\n' +
                '                <td>'+ response_json.joining_date + '</td>\n' +
                '            </tr>\n' +
                '            </tbody>\n' +
                '            <thead style="background-color: #ffd84e">\n' +
                '            <tr>\n' +
                '                <th>Mobile</th>\n' +
                '                <th>Email Id</th>\n' +
                '                <th>Address</th>\n' +
                '            </tr>\n' +
                '            </thead>\n' +
                '            <tbody>\n' +
                '            <tr>\n' +
                '                <td>\'+ response_json.joining_date + \'</td>\n' +
                '                <td>response_json </td>\n' +
                '                <td>response_json </td>\n' +
                '            </tr>\n' +
                '            </tbody>\n' +
                '            <thead style="background-color: #ffd84e">\n' +
                '            <tr>\n' +
                '                <th>Father Name</th>\n' +
                '                <th>Mother Name</th>\n' +
                '                <th>Dob</th>\n' +
                '            </tr>\n' +
                '            </thead>\n' +
                '            <tbody>\n' +
                '            <tr>\n' +
                '                <td>response_json </td>\n' +
                '                <td>response_json </td>\n' +
                '                <td>response_json </td>\n' +
                '            </tr>\n' +
                '            </tbody>\n' +
                '            <thead style="background-color: #ffd84e">\n' +
                '            <tr>\n' +
                '                <th>Gender</th>\n' +
                '                <th>Blood Group</th>\n' +
                '                <th>Type</th>\n' +
                '            </tr>\n' +
                '            </thead>\n' +
                '            <tbody>\n' +
                '            <tr>\n' +
                '                <td>response_json </td>\n' +
                '                <td>response_json </td>\n' +
                '                <td>response_json </td>\n' +
                '            </tr>\n' +
                '            </tbody>\n' +
                '        </table>\n' +
                '              <div class="center" style="padding-top:5px;"><button class="btn waves-effect waves-yellow" onclick="go_back()" name="action">Go Back</button>\n' +
                '            </div>' +
                '    </div>\n' +
                '    <div class="col s4">\n' +
                '        <div class="row">\n' +
                '            <div class="col s12 m8">\n' +
                '                <div class="card-image right">\n' +
                '                        <img src="/static/media/'+ response_json.image+ '" height="175px" width="150px"/>\n' +
                '                </div>\n' +
                '                <div class="card-content right">\n' +
                '                      <h5 style="color: #ffaa2a;text-align: center">Attendance </h5>\n' +
                '                     <table class="highlight">\n' +
                '                        <tr>\n' +
                '                            <td id="attend" style="background-color:#ffaa2a;padding: 5px;!important">Total Working Days</td>\n' +
                '                            <td id="attend" style="background-color:#ffaa2a;padding: 5px;!important">21</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <td style="padding: 5px;!important;">Total Present</td>\n' +
                '                            <td style="padding: 5px;!important;">19</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <td style="background-color:#ffaa2a;padding: 5px;!important">Total Absent</td>\n' +
                '                            <td style="background-color:#ffaa2a;padding: 5px;!important">1</td>\n' +
                '                        </tr>\n' +
                '                        <tr>\n' +
                '                            <td style="padding: 5px;!important;">Total Leaves</td>\n' +
                '                            <td style="padding: 5px;!important;">0</td>\n' +
                '                        </tr>\n' +
                '                    </table>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '   </div>' ;

            $('#openEmpDetail').append(html_data);
            // $('#main_content').html(html_data);
        }


    });

}


function go_back() {
        window.location.reload();

}

// function GetDetail() {
//     var x = document.getElementById("main_content");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }