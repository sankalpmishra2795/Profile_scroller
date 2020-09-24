const data = [
    {
        name: 'Sankalp Mishra',
        age : '27',
        email: 'sankalpmishra2795@gmail.com',
        occupation: 'Frontend Devloper',
        gender:'Male',
        image:"./san.jpeg",
        lookingfor: 'Female'
    },

    {
        name: 'Suyash Mishra',
        age : '20',
        email: 'suyashmishra143143@gmail.com',
        occupation: 'Fullstack Devloper',
        gender: 'Male',
        lookingfor: 'Female',
        image:"./suy.jpeg"
    },

    {
        name: 'Krishna Kant Sharama',
        age : '21',
        email: 'krishnakantsharama143@gmail.com',
        occupation: 'Fullstack devloper',
        gender: 'Male',
        image:"./kk.jpeg",
        lookingfor: 'Female'
    },

    {
        name: 'Deepanshu',
        age : '21',
        email: 'Deepanshu2795@gmail.com',
        occupation: 'Frontend Devloper',
        gender: 'Male',
        image:"./dips.jpeg",
        lookingfor: 'Female'
    } ,

    {
        name: 'Adiyta Shukala',
        age : '23',
        email: 'adiytashukala2795@gmail.com',
        occupation: 'Frontend Devloper',
        gender: 'Male',
        image:"./adi.jpeg",
        lookingfor: 'Female'
    },

    {
        name: 'Anjli Dubey',
        age : '12',
        email: 'anjlidubey2795@gmail.com',
        occupation: ' Study in B.com ',
        gender: 'Female',
        image:"./pari.jpeg",
        lookingfor: 'Male'
    }
];

const profiles = showProfile(data);
// call first profile
nextProfile ()

// addEventListener
document.getElementById('next').addEventListener('click',nextProfile);

// Next profile function
function nextProfile () {

    const currentprofile = profiles.next().value;
    if (currentprofile != undefined ) {
    document.getElementById('profiledisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name:${currentprofile.name}</li>
      <li class="list-group-item">Age:${currentprofile.age}</li>
      <li class="list-group-item">Email:${currentprofile.email}</li>
      <li class="list-group-item">Occupation:${currentprofile.occupation}</li>
      <li class="list-group-item">Gender:${currentprofile.gender}</li>
      <li class="list-group-item">LookingFor:${currentprofile.lookingfor}</li>
    </ul>
    `;
    document.getElementById('imgdisplay').innerHTML = `
    <img src="${currentprofile.image}" border-radius="50%" width="200px" hight="200px">
    `;
    } else{
        window.location.reload()
    }

};


// profile itretor
function showProfile (profiles) {
    let nextIndex = 0;
    return {
        next : function () {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false}:
            {done : true}
        }
    }

};