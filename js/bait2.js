function tienDien() {
    var name = document.getElementById("name").value;
    var KW = document.getElementById("KW").value;
    var money = 0;
    if (name == "") {
        document.getElementById("txtResult2").innerHTML = "Vui lòng nhập tên"
    } else {
        if (KW <= 0) {
            document.getElementById("txtResult2").innerHTML = "Vui lòng nhập số KW"
        } else {
            if (KW <= 50)
                money = KW * 500;
            else if (KW <= 100)
                money = 50 * 500 + (KW - 50) * 650;
            else if (KW <= 200)
                money = 50 * 500 + 50 * 650 + (KW - 100) * 850;
            else if (KW <= 350)
                money = 50 * 500 + 50 * 650 + 100 * 850 + (KW - 200) * 1100;
            else
                money = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (KW - 350) * 1300;
            }
            document.getElementById("txtResult2").innerHTML = "Tên: " + name + "<br> Số tiền thanh toán: " + money.toLocaleString() + "VNĐ";
        }
    }

