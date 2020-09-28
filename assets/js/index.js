// Nav hamburger

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

// End nav hamburger

// Preview Projects Coming Soon
/*
const openPreviewBtns = document.querySelectorAll("[data-preview-target]");
const closePreviewBtns = document.querySelectorAll("[data-close-btn]");
const overlay = document.getElementById("overlay");

openPreviewBtns.forEach(button => {
    button.addEventListener("click", () => {
        const preview = document.querySelector(button.dataset.previewTarget);
        openPreview(preview);
    });
});

overlay.addEventListener("click", () => {
    const previews = document.querySelectorAll(".preview.active");
    previews.forEach(perview => {
        closePreview(preview);
    });
});

closePreviewBtns.forEach(button => {
    button.addEventListener("click", () => {
        const preview = button.closest(".preview");
        closePreview(preview);
    });
});

function openPreview(preview) {
    if (preview == null) return
    preview.classList.add("active");
    overlay.classList.add("active");
}

function closePreview(preview) {
    if (preview == null) return
    preview.classList.remove("active");
    overlay.classList.remove("active");
}
*/
// End Preview Projects

// Footer 

const year = new Date().getFullYear();
const date = `&copy; Miguel Pedraza ${year}. All Rights Reserved.`;

document.getElementsByTagName("footer")[0].innerHTML = date;

// End footer