var informationApi =
  "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/info/get";

function start() {
  getInformation(renderInformation);
}

start();

function getInformation(callback) {
  fetch(informationApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderInformation(infor) {
  // Render Overview
  var overviewText = document.querySelector("#overviewText");
  var overviewImg = document.querySelector("#overviewImg");
  overviewText.innerHTML = infor.overview.description[0];
  overviewImg.src = infor.overview.images[0];

  // Render Architecture
  var architectureText = document.querySelector("#architectureText");
  var architectureImg = document.querySelector("#architectureImg");
  architectureText.innerHTML = infor.architecture.description[0];
  architectureImg.src = infor.architecture.images[0];

  // Render Floor
  var floorText = document.querySelector("#floorText");
  var floorImg = document.querySelector("#floorImg");
  var floor1Text1 = document.querySelector(".floor1Text-1");
  var floor1Img1 = document.querySelector("#floor1Img-1");
  var floor1Text2 = document.querySelector(".floor1Text-2");
  var floor1Img2 = document.querySelector("#floor1Img-2");
  var floor1Text3 = document.querySelector(".floor1Text-3");
  var floor1Img3 = document.querySelector("#floor1Img-3");

  var floor2Text1 = document.querySelector(".floor2Text-1");
  var floor2Img1 = document.querySelector("#floor2Img-1");
  var floor2Text2 = document.querySelector(".floor2Text-2");
  var floor2Img2 = document.querySelector("#floor2Img-2");

  var floor3Text = document.querySelector(".floor3Text");
  var floor3Img = document.querySelector("#floor3Img");

  floorText.innerHTML = infor.floor[0].description[0];
  floorImg.src = infor.floor[0].images[0];

  floor1Text1.innerHTML = infor.floor[1].description[0];
  floor1Img1.src = infor.floor[1].images[0];
  floor1Text2.innerHTML = infor.floor[1].description[1];
  floor1Img2.src = infor.floor[1].images[1];
  floor1Text3.innerHTML = infor.floor[1].description[2];
  floor1Img3.src = infor.floor[1].images[2];

  floor2Text1.innerHTML = infor.floor[2].description[0];
  floor2Img1.src = infor.floor[2].images[0];
  floor2Text2.innerHTML = infor.floor[2].description[1];
  floor2Img2.src = infor.floor[2].images[1];

  floor3Text.innerHTML = infor.floor[3].description[0];
  floor3Img.src = infor.floor[3].images[0];

  //Render Site
  var site1Text = document.querySelector(".site1Text");
  var site1text1 = document.querySelector(".site1-text1");
  var site1text2 = document.querySelector(".site1-text2");
  var site1text3 = document.querySelector(".site1-text3");
  var site1text4 = document.querySelector(".site1-text4");
  var site1text5 = document.querySelector(".site1-text5");
  var site2Text = document.querySelector(".site2Text");
  var site3Text = document.querySelector(".site3Text");

  var site1img1 = document.querySelector("#site1-img1");
  var site1img2 = document.querySelector("#site1-img2");
  var site1img3 = document.querySelector("#site1-img3");
  var site1img4 = document.querySelector("#site1-img4");
  var site1img5 = document.querySelector("#site1-img5");
  var site2Img = document.querySelector("#site2Img");
  var site3Img = document.querySelector("#site3Img");

  site1Text.innerHTML = infor.site[0].description[0];
  site1text1.innerHTML = infor.site[0].description[1];
  site1text2.innerHTML = infor.site[0].description[2];
  site1text3.innerHTML = infor.site[0].description[3];
  site1text4.innerHTML = infor.site[0].description[4];
  site1text5.innerHTML = infor.site[0].description[5];
  site2Text.innerHTML = infor.site[1].description[0];
  site3Text.innerHTML = infor.site[2].description[0];

  site1img1.src = infor.site[0].images[1];
  site1img2.src = infor.site[0].images[2];
  site1img3.src = infor.site[0].images[3];
  site1img4.src = infor.site[0].images[4];
  site1img5.src = infor.site[0].images[5];
  site2Img.src = infor.site[1].images[0];
  site3Img.src = infor.site[2].images[0];

  // Cancel loader
  var loader = document.querySelector(".loader-bg");
  if (loader) loader.style.display = "none";
}

function updateInfor(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(
    "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/info/update",
    options
  )
    .then(function (response) {
      response.json;
    })
    .then(callback);
}

var handleConfirmOver = function () {
  swal({
    title: "Bạn có chắc chắn muốn thay đổi?",
    text: "Khi đã xác nhận, bạn sẽ không thể khôi phục lại dữ liệu hiện tại!",
    icon: "warning",
    buttons: ["Hủy bỏ", "Xác nhận"],
    dangerMode: true,
  }).then((value) => {
    if (value) {
      handleUpdateOver().then(function () {
        swal("Thành công, dữ liệu của bạn đã thay đổi", {
          icon: "success",
        });
      });
    } else {
      swal("Dữ liệu của bạn không đổi!");
    }
  });
};

async function handleUpdateOver() {
  var loader = document.querySelector(".loader-bg");
  if (loader) loader.style.display = "flex";
  const formData = new FormData();
  var images = [document.getElementById("overviewImg").src];
  const cloudName = "dtu8kyhxq";
  const cloudURL = "https://api.cloudinary.com/v1_1/dtu8kyhxq/auto/upload";
  const uploadPreset = "uw_test";

  const file = document.getElementById("file1").files[0];

  if (file != undefined) {
    formData.append("file", file);
    formData.append("cloud_name", cloudName);
    formData.append("upload_preset", uploadPreset);

    await fetch(cloudURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        images[0] = data.url;
      });
  }

  var des = document.querySelector("#overviewText").innerHTML;
  var array = [];
  array.push(des);

  var formdata = {
    keyword: "overview",
    data: {
      name: "Thông tin giới thiệu về Dinh Độc Lập",
      description: array,
      images: images,
    },
  };

  updateInfor(formdata, function () {
    getInformation(renderInformation);
  });
}

var handleConfirmArchi = function () {
  swal({
    title: "Bạn có chắc chắn muốn thay đổi?",
    text: "Khi đã xác nhận, bạn sẽ không thể khôi phục lại dữ liệu hiện tại!",
    icon: "warning",
    buttons: ["Hủy bỏ", "Xác nhận"],
    dangerMode: true,
  }).then((value) => {
    if (value) {
      handleUpdateArchitecture().then(function () {
        swal("Thành công, dữ liệu của bạn đã thay đổi", {
          icon: "success",
        });
      });
    } else {
      swal("Dữ liệu của bạn không đổi!");
    }
  });
};

async function handleUpdateArchitecture() {
  var loader = document.querySelector(".loader-bg");
  if (loader) loader.style.display = "flex";
  const formData = new FormData();
  var images = [document.getElementById("architectureImg").src];
  const cloudName = "dtu8kyhxq";
  const cloudURL = "https://api.cloudinary.com/v1_1/dtu8kyhxq/auto/upload";
  const uploadPreset = "uw_test";

  const file = document.getElementById("file2").files[0];

  if (file != undefined) {
    formData.append("file", file);
    formData.append("cloud_name", cloudName);
    formData.append("upload_preset", uploadPreset);

    await fetch(cloudURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        images[0] = data.url;
      });
  }

  var des = document.querySelector("#architectureText").innerHTML;
  var array = [];
  array.push(des);

  var formdata = {
    keyword: "architecture",
    data: {
      id: 1,
      name: "Thông tin về kiến trúc Dinh Độc Lập",
      description: array,
      images: images,
    },
  };

  updateInfor(formdata, function () {
    getInformation(renderInformation);
  });
  // };
}

var handleConfirmFloor = function () {
  swal({
    title: "Bạn có chắc chắn muốn thay đổi?",
    text: "Khi đã xác nhận, bạn sẽ không thể khôi phục lại dữ liệu hiện tại!",
    icon: "warning",
    buttons: ["Hủy bỏ", "Xác nhận"],
    dangerMode: true,
  }).then((value) => {
    if (value) {
      handleUpdateFloor().then(function () {
        swal("Thành công, dữ liệu của bạn đã thay đổi", {
          icon: "success",
        });
      });
    } else {
      swal("Dữ liệu của bạn không đổi!");
    }
  });
};

async function handleUpdateFloor() {
  var loader = document.querySelector(".loader-bg");
  if (loader) loader.style.display = "flex";
  const formData = new FormData();
  var images1 = {
    image1: document.querySelector("#floorImg").src,
    image2: document.querySelector("#floor1Img-1").src,
    image3: document.querySelector("#floor1Img-2").src,
    image4: document.querySelector("#floor1Img-3").src,
    image5: document.querySelector("#floor2Img-1").src,
    image6: document.querySelector("#floor2Img-2").src,
    image7: document.querySelector("#floor3Img").src,
  };
  var images2 = {};

  const cloudName = "dtu8kyhxq";
  const cloudURL = "https://api.cloudinary.com/v1_1/dtu8kyhxq/auto/upload";
  const uploadPreset = "uw_test";

  for (let i = 1; i <= 7; i++) {
    var temp = `file${2 + i}`;
    const file = document.getElementById(temp).files[0];
    if (file != undefined) {
      formData.append("file", file);
      formData.append("cloud_name", cloudName);
      formData.append("upload_preset", uploadPreset);

      var temp2 = "image" + i;

      await fetch(cloudURL, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          images2[temp2] = data.url;
        });
    }
  }

  var des = document.querySelector("#floorText").innerHTML;
  var des11 = document.querySelector(".floor1Text-1").innerHTML;
  var des12 = document.querySelector(".floor1Text-2").innerHTML;
  var des13 = document.querySelector(".floor1Text-3").innerHTML;
  var des21 = document.querySelector(".floor2Text-1").innerHTML;
  var des22 = document.querySelector(".floor2Text-2").innerHTML;
  var des3 = document.querySelector(".floor3Text").innerHTML;

  var array = [];
  array.push(des, des11, des12, des13, des21, des22, des3);

  var temp = {
    ...images1,
    ...images2,
  };

  var images = Object.values(temp);

  var formdata = {
    keyword: "floor",
    data: [
      {
        id: 1,
        name: "Tổng quan về các tầng",
        description: [des],
        images: [images[0]],
      },
      {
        id: 2,
        name: "Thông tin tầng 1",
        description: [des11, des12, des13],
        images: [images[1], images[2], images[3]],
      },
      {
        id: 3,
        name: "Thông tin tầng 2",
        description: [des21, des22],
        images: [images[4], images[5]],
      },
      {
        id: 4,
        name: "Thông tin tầng 3",
        description: [des3],
        images: [images[6]],
      },
    ],
  };

  updateInfor(formdata, function () {
    getInformation(renderInformation);
  });
}

var handleConfirmSite = function () {
  swal({
    title: "Bạn có chắc chắn muốn thay đổi?",
    text: "Khi đã xác nhận, bạn sẽ không thể khôi phục lại dữ liệu hiện tại!",
    icon: "warning",
    buttons: ["Hủy bỏ", "Xác nhận"],
    dangerMode: true,
  }).then((value) => {
    if (value) {
      handleUpdateSite().then(function () {
        swal("Thành công, dữ liệu của bạn đã thay đổi", {
          icon: "success",
        });
      });
    } else {
      swal("Dữ liệu của bạn không đổi!");
    }
  });
};

async function handleUpdateSite() {
  var loader = document.querySelector(".loader-bg");
  if (loader) loader.style.display = "flex";
  const formData = new FormData();
  var images1 = {
    image1: document.querySelector("#site1-img1").src,
    image2: document.querySelector("#site1-img2").src,
    image3: document.querySelector("#site1-img3").src,
    image4: document.querySelector("#site1-img4").src,
    image5: document.querySelector("#site1-img5").src,
    image6: document.querySelector("#site2Img").src,
    image7: document.querySelector("#site3Img").src,
  };
  var images2 = {};

  const cloudName = "dtu8kyhxq";
  const cloudURL = "https://api.cloudinary.com/v1_1/dtu8kyhxq/auto/upload";
  const uploadPreset = "uw_test";

  for (let i = 1; i <= 7; i++) {
    var temp = `file${9 + i}`;
    const file = document.getElementById(temp).files[0];
    if (file != undefined) {
      formData.append("file", file);
      formData.append("cloud_name", cloudName);
      formData.append("upload_preset", uploadPreset);

      var temp2 = "image" + i;

      await fetch(cloudURL, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          images2[temp2] = data.url;
        });
    }
  }

  var des1 = document.querySelector(".site1Text").innerHTML;
  var des11 = document.querySelector(".site1-text1").innerHTML;
  var des12 = document.querySelector(".site1-text2").innerHTML;
  var des13 = document.querySelector(".site1-text3").innerHTML;
  var des14 = document.querySelector(".site1-text4").innerHTML;
  var des15 = document.querySelector(".site1-text5").innerHTML;
  var des2 = document.querySelector(".site2Text").innerHTML;
  var des3 = document.querySelector(".site3Text").innerHTML;

  var temp = {
    ...images1,
    ...images2,
  };

  var images = Object.values(temp);

  var formdata = {
    keyword: "site",
    data: [
      {
        id: 1,
        name: "Khu cố định",
        description: [des1, des11, des12, des13, des14, des15],
        images: ["", images[0], images[1], images[2], images[3], images[4]],
      },
      {
        id: 2,
        name: "Khu chuyên đề",
        description: [des2],
        images: [images[5]],
      },
      {
        id: 3,
        name: "Khu cố định",
        description: [des3],
        images: [images[6]],
      },
    ],
  };

  updateInfor(formdata, function () {
    getInformation(renderInformation);
  });
}
