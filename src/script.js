function changeImage(anything) {
    document.getElementById('slider').src = anything
}

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle')
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}