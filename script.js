function fetchData(){
    fetch("https://reqres.in/api/users?delay=3")
    .then(response => { 
        if (!response.ok){
            throw Error("something is wrong with the request");
        }
        return response.json();
        
    })
    .then(data => {
        console.log(data.data);
        let html = data.data
        .map(user =>{
            return `
            <div class="content">
            <div><image src="${user.avatar}"></image>
            <p> Id: ${user.id}</p>
            <p> Name: ${user.first_name} ${user.last_name}</p>
            <p> Email: ${user.email}</p></div>
            </div>`;
        })
        .join("");
         console.log(html);
        
        // document.querySelector('#api')
        // .insertAdjacentHTML('afterbegin', html);
        document.getElementById("api").innerHTML = html;
        hideloader(); 
    })
    .catch(err =>{
        console.log(err);
    });
}
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
fetchData();
