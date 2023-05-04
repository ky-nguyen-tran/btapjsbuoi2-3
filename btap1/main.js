// input:
// lương 1 ngày: 100.000đ
// số ngày nhân viên làm 
// xử lý: lương 1 ngày * số ngày làm 
// output: tiền lương nhân viên

function  tinhTienLuong () {
    var soNgay = document.getElementById("soNgay").value;
   
    var tienLuongMotNgay = 100000;
    var tongLuong = soNgay * tienLuongMotNgay
    
    document.getElementById("hienThiTienLuong").innerHTML=`${tongLuong.toLocaleString("vi-VN")}đ`;

}
