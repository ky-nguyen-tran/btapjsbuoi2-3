// input: số có 2 chữ số 
// xử lí: tính tổng 2 ký số vừa nhập
//output: kết quả và hiển thị tổng 


function tong2KySo (){
    var soNhap = document.getElementById("soNhap").value;
    if (soNhap >= 10 && soNhap <=99) {
     var soHangChuc = Math.floor( soNhap / 10);
     var soHangDonVi = soNhap % 10;
     var tong = soHangChuc + soHangDonVi;
     document.getElementById("tong2KySo").innerHTML = tong;
    }
    else {
        document.getElementById("tong2KySo").innerHTML = "Số bạn nhập không phải là số có 2 chữ số"
    }
}