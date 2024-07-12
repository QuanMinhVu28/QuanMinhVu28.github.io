"use strict";

// Elements

const job_info_sections = document.querySelectorAll(".job-info-sections"),
    expand_btn = document.querySelectorAll(".view-more"),
    job_info = document.querySelectorAll(".job-info-details"),
    hobbies = document.querySelector(".hobbies"),
    email = document.getElementById("email-input"),
    feedback = document.querySelector(".invalid-feedback"),
    submit_btn = document.querySelector(".submit"),
    form = document.querySelector(".personal-info-form"),
    personal_info = document.querySelector("ul.info"),
    personal_info_icons = document.querySelector(".personal-info-icons");

// Variables

let width = window.innerWidth;

// Hide and show view more button

for (let i = 0; i < job_info_sections.length; i++) {
    if (width >= 992) {
        job_info_sections[i].addEventListener("mouseover", function () {
            expand_btn[i].classList.remove("hidden");
        });

        job_info_sections[i].addEventListener("mouseout", function () {
            expand_btn[i].classList.add("hidden");
        });
    }
}

// Hide and show job info details

for (let j = 0; j < expand_btn.length; j++) {
    expand_btn[j].addEventListener("click", function () {
        if (job_info[j].classList.contains("hidden")) {
            job_info[j].classList.remove("hidden");
            expand_btn[j].textContent = "🔼 View less";
        } else {
            job_info[j].classList.add("hidden");
            expand_btn[j].textContent = "🔽 View more";
        }
    });
}

// Personal info form

email.addEventListener("keyup", function () {
    console.log(feedback.textContent);
    if (
        !email.value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        email.classList.add("is-invalid");
        feedback.textContent = "Vui lòng nhập email hợp lệ";
        submit_btn.disabled = true;
    } else {
        feedback.textContent = "";
        email.classList.remove("is-invalid");
        submit_btn.disabled = false;
    }
});

submit_btn.addEventListener("click", function () {
    form.classList.add("hidden");
    personal_info.classList.remove("hidden");
    personal_info_icons.classList.remove("hidden");
});
