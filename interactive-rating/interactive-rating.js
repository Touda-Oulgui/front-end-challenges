let btnValue=null
const chooseRate = (button) => {
    const buttons=document.querySelectorAll(".rate-btn")
    buttons.forEach(btn => btn.classList.remove("active"))
    button.classList.add("active")
    btnValue=button.innerHTML
}
console.log(btnValue)
const showThanks = () => {
    if (btnValue!==null) {
        document.getElementById('rates').style.display="none"
        document.getElementById('rateValue').innerHTML=btnValue
        document.getElementById('thanks').style.display="block"
    } else {
        alert('Please rate us!!')
    }
}