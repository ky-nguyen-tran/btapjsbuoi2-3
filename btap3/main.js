// input: giá usd:23.500đ
// người dùng nhập vào số tiền 
//xử lý: lấy số tiền giá usd hiện tại * số usd người dùng nhập
//output: xuất ra số tiền sau khi quy đổi VND 

function quyDoiTien() {
var soUSD = document.getElementById("soUSD").value;

var quyDoi = 1 * soUSD * 23500;
document.getElementById("hienThiVND").innerHTML = `${quyDoi.toLocaleString("vi-VN")}đ`
}