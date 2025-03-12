function loadCategories() {
  fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
      console.log(video)
    const videoDiv = document.createElement("div");
      videoDiv.innerHTML = `
    
            <div class="card bg-base-100 ">
            <figure class="relative">
              <img
                class = "w-full h-48 object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute right-2 bottom-2 rounded-md text-xs text-white bg-gray-700 p-1">3hrs 56 min ago</span>
            </figure>

            <div class="py-5 px-0 flex items-start gap-4">

              <div class="photo ">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>

              <div class="desc">
                <h2 class="text-base font-bold"> ${video.title}</h2>
                <p class="text-gray-400 text-base flex items-center gap-2 mt-1"> ${video.authors[0].profile_name} <img class="w-5 h-5" src="./assets/verified.png" alt=""></p>
                <p class="text-gray-400 text-base "> ${video.others.views} views </p>
              </div>
            </div>
          </div>


        `;
    videoContainer.append(videoDiv);
  });
};

loadCategories();
;
