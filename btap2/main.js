// TÍNH GIÁ TRỊ TRUNG BÌNH
/*
- Input: 5 số thực được người dùng nhập vào
- Process: 
+ B1: Xử lý để lấy dữ liệu người dùng nhập vào cụ thể là năm số thực bằng cách dùng .value, sau đó ép về kiểu số
+ B2: Tính toán: tổng 5 số thực / 5
- Output: Hiển thị trung bình 5 số thực ra trình duyệt web cho người dùng
*/
function nhanDeTinh () {
    
    var soThuc1 = document.getElementById("soThuc1").value * 1;
    var soThuc2 = document.getElementById("soThuc2").value * 1;
    var soThuc3 = document.getElementById("soThuc3").value * 1;
    var soThuc4 = document.getElementById("soThuc4").value * 1;
    var soThuc5 = document.getElementById("soThuc5").value * 1;
   
    var trungBinhTong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    document.getElementById("hienThiTrungBinhTong").classList.remove("d-none");
   
    document.getElementById("hienThiTrungBinhTong").innerHTML = "Trung bình tổng 5 số thực là: " + trungBinhTong;
    }
    document.getElementById("btnCalc2").addEventListener("click", nhanDeTinh);