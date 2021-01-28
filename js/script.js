dict={"img": ['../images/desktop-image-hero-1.jpg', '../images/desktop-image-hero-2.jpg', '../images/desktop-image-hero-3.jpg'],
    "heading": ["Discover innovative ways to decorate", 
                "We are available all across the globe",
                "Manufactured with the best materials"],
    "content": ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]
}

var slide_no=0


function slider_image(){
    var slides = document.getElementById("image-slide")
    var l_btn = document.getElementById("left-button")
    var r_btn = document.getElementById("right-button")
    var heading = document.getElementById("heading")
    var content = document.getElementById("content")

    l_btn.addEventListener("click", () => {
        console.log(slide_no)
        if(slide_no != 0){
            slide_no = left_button(slide_no)
            slides.src = dict['img'][slide_no]
            heading.innerHTML = dict['heading'][slide_no]
            content.innerHTML = dict['content'][slide_no]
        }
    })
    r_btn.addEventListener("click", () => {
        if(slide_no != dict.img.length - 1){
            slide_no = right_button(slide_no)
            slides.src = dict['img'][slide_no]
            heading.innerHTML = dict['heading'][slide_no]
            content.innerHTML = dict['content'][slide_no]
        }
        console.log(slide_no)

    })
}

function left_button(n){
    n = n-1
    return n;
}

function right_button(n){
    n = n+1
    return n;
}