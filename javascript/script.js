function luas(){
    var ss = document.getElementById('sisi').value;
    var Luas = ss*ss;
    document.getElementById('hasil').innerText = 'Luas Persegi: '+Luas;
}
function keliling(){
    var Sisi = document.getElementById('sisi').value;
    if (Sisi === "" || isNaN(Sisi)){
        alert("Silahkan masukkan angka lagi");
        return;
    }
    var kel = 4*parseInt(ss);
    var Hasil = document.getElementById('hasil');
    Hasil.innerText = 'Keliling Persegi: '+ kel;
}
function rst(){
    document.getElementById('sisi').value = '';
    document.getElementById('hasil').innerText = '';
}
