function bukaPesan() {
    const musik = document.getElementById("musik");

    musik.volume = 0.5;

    musik.play().catch(error => {
        console.log("Musik belum bisa diputar:", error);
    });
}
const musik = document.getElementById("musik");

musik.volume = 1;
musik.play().catch(error => {
    console.log("Gagal memutar musik:", error);
});