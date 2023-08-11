let btn = document.querySelector('button');
let collegeName = document.querySelector('#college-name');
let collegeLinks = document.querySelector('#college-links');


let url = "http://universities.hipolabs.com/search?name="

async function getCollege(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e) {
        return 'no data';
    }
}

btn.addEventListener('click', async () => {
    collegeName.innerHTML = '';
    collegeLinks.innerHTML = ' ';

    let inp = document.querySelector('input');
    let country = inp.value;

    let colleges = await getCollege(country);
    console.log(colleges);

    if(colleges.length == 0) {
        console.log("Wrong country name!"); 
        return;
    }

    for(clg of colleges) {
        let li = document.createElement('li');
        li.innerText  = clg.name;
        collegeName.appendChild(li);

        let li2 = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.innerText = clg.web_pages;
        anchor.href = clg.web_pages;
        li2.appendChild(anchor);
        collegeLinks.appendChild(li2);
    }
})