
// Change logo Image 

fetch("https://pakapepe-admin-server.vercel.app/logoImg")
  .then((res) => res.json())
  .then((data) => displayLogoImage(data));

  const displayLogoImage = (logoImage) => {
    const lastImage = logoImage[logoImage.length - 1];
    const log = lastImage.logoImg;
    console.log(log)
    const displayLogo = document.getElementById("blah");
    displayLogo.src = log;
};
// banner Background  

  fetch("https://pakapepe-admin-server.vercel.app/bannerImg")
  .then((res) => res.json())
  .then((data) => displayBannerImage(data));

const displayBannerImage = (bannerImg) => {
  const bannerIMAGE = bannerImg[bannerImg.length -1];
  const bannerIMA = bannerIMAGE.bannerImg;
  console.log(bannerIMA)
    
    const banner = document.getElementById("bannerImg");
    banner.src = bannerIMA;
};





files.onchange = evt => {
  const [file] = files.files
  if (file) {
    blah.src = URL.createObjectURL(file)
  }
}
Banner.onchange = evt => {
  const [file] = Banner.files
  if (file) {
    bannerImg.src = URL.createObjectURL(file)
  }
}





//logo image
const FileSubmit = document.getElementById("FileSubmit");
FileSubmit.addEventListener("click", function () {
  // e.preventDefault()
  let logoImages;
  const logoImage = document.getElementById("files");
  console.log(logoImage.files);
  const formData = new FormData();
  formData.append("image", logoImage.files[0]);

  for (const obj of formData.entries()) {
    const img = obj;
    const url = "https://api.imgbb.com/1/upload?key=9f421b965d953a6b04039f9b09ad45b7";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        
        const logoImg = data.data.display_url;
        // Save the image to local storage
        localStorage.setItem('image', logoImg);

        // Display the image in the browse

        console.log(data.data.display_url);
        const url = "https://pakapepe-admin-server.vercel.app/logoImg";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ logoImg }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
              alert('logo Image has been Updated')
            }
          })
          .catch((error) => {
            const errors = error.message;
          });
        
      });
  }
});
// // display logo image 
// if(localStorage.getItem('image')){
//   const img = document.getElementById('blah')
//   const getImage = localStorage.getItem('image');
//   console.log(getImage)
//   img.src = getImage
//  }
 // display banner image 
// if(localStorage.getItem('image')){
//   const img = document.getElementById('bannerImg')
//   const getImage = localStorage.getItem('bannerImg');
//   console.log(getImage)
//   img.src = getImage
//  }

//banner image
const BannerSubmit = document.getElementById("BannerSubmit");
BannerSubmit.addEventListener("click", function () {
  // e.preventDefault()
  let BannerImg;
  const Banner = document.getElementById("Banner");
  console.log(Banner.files);
  const formData = new FormData();
  formData.append("image", Banner.files[0]);

  for (const obj of formData.entries()) {
    const img = obj;
    const url = "https://api.imgbb.com/1/upload?key=9f421b965d953a6b04039f9b09ad45b7";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const bannerImg = data.data.display_url;

        // Save the image to local storage
        localStorage.setItem('bannerImg', bannerImg);
        console.log(data.data.display_url);
        const url = "https://pakapepe-admin-server.vercel.app/bannerImg";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ bannerImg }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
              alert('Banner Image has been Updated')
            }
          })
          .catch((error) => {
            const errors = error.message;
          });

          
      });
  }
});

// color code /
const SubmitColor = document.getElementById("SubmitColor");
SubmitColor.addEventListener("click", function () {
  // e.preventDefault()
  let colors;
  const color = document.getElementById("color").value;
  const url = "https://pakapepe-admin-server.vercel.app/colorCode";
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ color }),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.acknowledged){
        alert('Background Color has been changed')
      }
    })
    .catch((error) => {
      const errors = error.message;
    });
});
