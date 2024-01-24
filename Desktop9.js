const Iemail = document.getElementById("email");
const Iname = document.getElementById("name");
const Icontact = document.getElementById("contact");
const Iarea = document.getElementById("area");
const Itown = document.getElementById("town");
const Italuka = document.getElementById("taluka");
const Idistrict = document.getElementById("district");
const Istate = document.getElementById("state");
const Igst = document.getElementById("gst");
const Iadhar = document.getElementById("adhar");
const IopeningBalance = document.getElementById("openingBalance");
const IinterestType = document.getElementById("interestType");
const Iinterest = document.getElementById("interestRate");
const Itype = document.getElementById("type");
const Istatus = document.getElementById("status");
const Iform = document.getElementById("form");

let name = "";
let email = "";
let contact = "";
let area = "";
let town = "";
let taluka = "";
let district = "";
let state = "";
let gst = "";
let openingBalance = "";
let interestType = "";
let interest = "";
let type = "";
let status = "";

Iemail.addEventListener("change", (e) => {
    email = e.target.value;
});
Iname.addEventListener("change", (e) => {
    name = e.target.value;
});
Icontact.addEventListener("change", (e) => {
    contact = e.target.value;
});
Iarea.addEventListener("change", (e) => {
    area = e.target.value;
});
Itown.addEventListener("change", (e) => {
    town = e.target.value;
});
Italuka.addEventListener("change", (e) => {
    taluka = e.target.value;
});
Idistrict.addEventListener("change", (e) => {
    district = e.target.value;
});
Istate.addEventListener("change", (e) => {
    state = e.target.value;
});
Igst.addEventListener("change", (e) => {
    gst = e.target.value;
});
Iadhar.addEventListener("change", (e) => {
    adhar = e.target.value;
});
IopeningBalance.addEventListener("change", (e) => {
    openingBalance = e.target.value;
});
IinterestType.addEventListener("change", (e) => {
    interestType = e.target.value;
});
Iinterest.addEventListener("change", (e) => {
    interest = e.target.value;
});
Itype.addEventListener("change", (e) => {
    type = e.target.value;
});
Istatus.addEventListener("change", (e) => {
    status = e.target.value;
});

const Isave = document.getElementById("save");
const IsaveAndNew = document.getElementById("saveAndNew");
const Inew = document.getElementById("new");
const Icancel = document.getElementById("cancel");

Isave.addEventListener("click", (e) => {
    // post request
});

IsaveAndNew.addEventListener("click", (e) => {
    // post req and navigate
    window.location.href = "";
});

Inew.addEventListener("click", (e) => {
    // navigate to desired location
    window.location.href = "";
});

Icancel.addEventListener("click", (e) => {
    Iform.reset();
});
