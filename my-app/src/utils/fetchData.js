fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json").then(response => {
    return response.json();
  }).then(data => {
    const ok = data.ok;
    console.log(ok);
   

  }).catch(error => {
    // Do something for an error here
    console.error(error)
});