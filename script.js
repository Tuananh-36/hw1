// Hàm cập nhật ảnh phóng to và văn bản khi chuột di chuyển hoặc nhận focus từ bàn phím
function upDate(previewPic) {
    console.log("Sự kiện over/focus đã kích hoạt!");
    console.log("Nguồn ảnh: " + previewPic.src);
    console.log("Nội dung alt: " + previewPic.alt);

    let displayBox = document.getElementById("image-display");
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
    displayBox.innerText = previewPic.alt;
}

// Hàm khôi phục lại trạng thái ban đầu khi rời chuột hoặc mất focus bàn phím
function unDo() {
    console.log("Sự kiện leave/blur đã kích hoạt!");

    let displayBox = document.getElementById("image-display");
    displayBox.style.backgroundImage = "url('')";
    displayBox.innerText = "Rê chuột hoặc dùng phím Tab để chọn ảnh bên dưới.";
}

// Hàm tự động thêm thuộc tính tabindex vào tất cả các ảnh khi trang tải xong
function initializeGallery() {
    console.log("Trang web đã được tải xong (onload event). Bắt đầu thêm tabindex...");

    // Lấy tất cả các thẻ img có class "preview"
    let images = document.querySelectorAll(".preview");

    // Vòng lặp for duyệt qua từng phần tử
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex='0' cho ảnh vị trí index: " + i);
    }
}
