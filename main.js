function toggleMobileMenu(){
    const button = document.querySelector(".hamburger")
    const hamburger1 = document.querySelector(".hamburger-1")
    const hamburger2 = document.querySelector(".hamburger-2")
    const hamburger3 = document.querySelector(".hamburger-3")
    const mobileMenu = document.querySelector(".nav-link-responsive-nonaktif")

    if (button.classList.contains("hamburger-active")) {
        button.classList.remove("hamburger-active")
        hamburger2.classList.remove("hamburger-2-active")
        hamburger1.classList.remove("hamburger-1-active")
        hamburger3.classList.remove("hamburger-3-active")
        mobileMenu.classList.remove("nav-link-responsive-aktif")
    } else {
        button.classList.add("hamburger-active")
        hamburger1.classList.add("hamburger-1-active")
        hamburger2.classList.add("hamburger-2-active")
        hamburger3.classList.add("hamburger-3-active")
        mobileMenu.classList.add("nav-link-responsive-aktif")
    }
}
