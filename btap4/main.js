// input: chiều dài và chiều rộng 
//xử lí: - S = Dài * rộng; Chu vi = (dài + rộng) * 2
//output: kết qả và hiển thị S; chu vi 



function dienTichVaChuVi(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    
    var donVi = document.getElementById("donVi").value;
    document.getElementById("dienTich").innerHTML = `${chieuDai * chieuRong} ${donVi}<sup>2</sup>`;
    document.getElementById("chuVi").innerHTML = `${((chieuDai*1 +  chieuRong*1) * 2)} ${donVi}`;
   


}
