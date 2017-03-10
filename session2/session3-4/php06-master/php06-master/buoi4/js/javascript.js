var a;

function NhapSo(number) {
    if (number == 0) {
        alert("Số này không phải là chẵn hay lẻ")
    } else if (number % 2 == 0) {
        alert("So nay chia het cho 2");
    } else if (number % 3 == 0) {
        alert("Số này chia hết cho 3");
    } else alert("Số này là số nguyên tô");

}

function thongbao() {
    var min = null;
    var max = null;
    var value = "";
    while (value != null) {
        value = prompt("Nhập số, dừng thì không nhập gì");
        if (value != null) {
            if (min == null) {
                min = max = value;
            } else {
                if (min <= value) {
                    min = value;
                } else {
                    max = value;
                }
            }
        }
    }

}