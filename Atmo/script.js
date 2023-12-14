// window.addEventListener("load", () => {
//   let loadingDiv = document.querySelector(".text-rotate");
//   loadingDiv.style.filter = "blur(2px)";
//   setTimeout(() => {
//     loadingDiv.style.filter = "blur(0px)";
//   }, 1000);
// });

// let canvas = document.querySelector("#plane");
// canvas.addEventListener("click", () => console.log("click"));

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function canvasOne() {
  const canvas = document.querySelector("#mainPage>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./00001.jpg
    ./00002.jpg
    ./00003.jpg
    ./00004.jpg
    ./00005.jpg
    ./00006.jpg
    ./00007.jpg
    ./00008.jpg
    ./00009.jpg
    ./00010.jpg
    ./00011.jpg
    ./00012.jpg
    ./00013.jpg
    ./00014.jpg
    ./00015.jpg
    ./00016.jpg
    ./00017.jpg
    ./00018.jpg
    ./00019.jpg
    ./00020.jpg
    ./00021.jpg
    ./00022.jpg
    ./00023.jpg
    ./00024.jpg
    ./00025.jpg
    ./00026.jpg
    ./00027.jpg
    ./00028.jpg
    ./00029.jpg
    ./00030.jpg
    ./00031.jpg
    ./00032.jpg
    ./00033.jpg
    ./00034.jpg
    ./00035.jpg
    ./00036.jpg
    ./00037.jpg
    ./00038.jpg
    ./00039.jpg
    ./00040.jpg
    ./00041.jpg
    ./00042.jpg
    ./00043.jpg
    ./00044.jpg
    ./00045.jpg
    ./00046.jpg
    ./00047.jpg
    ./00048.jpg
    ./00049.jpg
    ./00050.jpg
    ./00051.jpg
    ./00052.jpg
    ./00053.jpg
    ./00054.jpg
    ./00055.jpg
    ./00056.jpg
    ./00057.jpg
    ./00058.jpg
    ./00059.jpg
    ./00060.jpg
    ./00061.jpg
    ./00062.jpg
    ./00063.jpg
    ./00064.jpg
    ./00065.jpg
    ./00066.jpg
    ./00067.jpg
    ./00068.jpg
    ./00069.jpg
    ./00070.jpg
    ./00071.jpg
    ./00072.jpg
    ./00073.jpg
    ./00074.jpg
    ./00075.jpg
    ./00076.jpg
    ./00077.jpg
    ./00078.jpg
    ./00079.jpg
    ./00080.jpg
    ./00081.jpg
    ./00082.jpg
    ./00083.jpg
    ./00084.jpg
    ./00085.jpg
    ./00086.jpg
    ./00087.jpg
    ./00088.jpg
    ./00089.jpg
    ./00090.jpg
    ./00091.jpg
    ./00092.jpg
    ./00093.jpg
    ./00094.jpg
    ./00095.jpg
    ./00096.jpg
    ./00097.jpg
    ./00098.jpg
    ./00099.jpg
    ./00100.jpg
    ./00101.jpg
    ./00102.jpg
    ./00103.jpg
    ./00104.jpg
    ./00105.jpg
    ./00106.jpg
    ./00107.jpg
    ./00108.jpg
    ./00109.jpg
    ./00110.jpg
    ./00111.jpg
    ./00112.jpg
    ./00113.jpg
    ./00114.jpg
    ./00115.jpg
    ./00116.jpg
    ./00117.jpg
    ./00118.jpg
    ./00119.jpg
    ./00120.jpg
    ./00121.jpg
    ./00122.jpg
    ./00123.jpg
    ./00124.jpg
    ./00125.jpg
    ./00126.jpg
    ./00127.jpg
    ./00128.jpg
    ./00129.jpg
    ./00130.jpg
    ./00131.jpg
    ./00132.jpg
    ./00133.jpg
    ./00134.jpg
    ./00135.jpg
    ./00136.jpg
    ./00137.jpg
    ./00138.jpg
    ./00139.jpg
    ./00140.jpg
    ./00141.jpg
    ./00142.jpg
    ./00143.jpg
    ./00144.jpg
    ./00145.jpg
    ./00146.jpg
    ./00147.jpg
    ./00148.jpg
    ./00149.jpg
    ./00150.jpg
    ./00151.jpg
    ./00152.jpg
    ./00153.jpg
    ./00154.jpg
    ./00155.jpg
    ./00156.jpg
    ./00157.jpg
    ./00158.jpg
    ./00159.jpg
    ./00160.jpg
    ./00161.jpg
    ./00162.jpg
    ./00163.jpg
    ./00164.jpg
    ./00165.jpg
    ./00166.jpg
    ./00167.jpg
    ./00168.jpg
    ./00169.jpg
    ./00170.jpg
    ./00171.jpg
    ./00172.jpg
    ./00173.jpg
    ./00174.jpg
    ./00175.jpg
    ./00176.jpg
    ./00177.jpg
    ./00178.jpg
    ./00179.jpg
    ./00180.jpg
    ./00181.jpg
    ./00182.jpg
    ./00183.jpg
    ./00184.jpg
    ./00185.jpg
    ./00186.jpg
    ./00187.jpg
    ./00188.jpg
    ./00189.jpg
    ./00190.jpg
    ./00191.jpg
    ./00192.jpg
    ./00193.jpg
    ./00194.jpg
    ./00195.jpg
    ./00196.jpg
    ./00197.jpg
    ./00198.jpg
    ./00199.jpg
    ./00200.jpg
    ./00201.jpg
    ./00202.jpg
    ./00203.jpg
    ./00204.jpg
    ./00205.jpg
    ./00206.jpg
    ./00207.jpg
    ./00208.jpg
    ./00209.jpg
    ./00210.jpg
    ./00211.jpg
    ./00212.jpg
    ./00213.jpg
    ./00214.jpg
    ./00215.jpg
    ./00216.jpg
    ./00217.jpg
    ./00218.jpg
    ./00219.jpg
    ./00220.jpg
    ./00221.jpg
    ./00222.jpg
    ./00223.jpg
    ./00224.jpg
    ./00225.jpg
    ./00226.jpg
    ./00227.jpg
    ./00228.jpg
    ./00229.jpg
    ./00230.jpg
    ./00231.jpg
    ./00232.jpg
    ./00233.jpg
    ./00234.jpg
    ./00235.jpg
    ./00236.jpg
    ./00237.jpg
    ./00238.jpg
    ./00239.jpg
    ./00240.jpg
    ./00241.jpg
    ./00242.jpg
    ./00243.jpg
    ./00244.jpg
    ./00245.jpg
    ./00246.jpg
    ./00247.jpg
    ./00248.jpg
    ./00249.jpg
    ./00250.jpg
    ./00251.jpg
    ./00252.jpg
    ./00253.jpg
    ./00254.jpg
    ./00255.jpg
    ./00256.jpg
    ./00257.jpg
    ./00258.jpg
    ./00259.jpg
    ./00260.jpg
    ./00261.jpg
    ./00262.jpg
    ./00263.jpg
    ./00264.jpg
    ./00265.jpg
    ./00266.jpg
    ./00267.jpg
    ./00268.jpg
    ./00269.jpg
    ./00270.jpg
    ./00271.jpg
    ./00272.jpg
    ./00273.jpg
    ./00274.jpg
    ./00275.jpg
    ./00276.jpg
    ./00277.jpg
    ./00278.jpg
    ./00279.jpg
    ./00280.jpg
    ./00281.jpg
    ./00282.jpg
    ./00283.jpg
    ./00284.jpg
    ./00285.jpg
    ./00286.jpg
    ./00287.jpg
    ./00288.jpg
    ./00289.jpg
    ./00290.jpg
    ./00291.jpg
    ./00292.jpg
    ./00293.jpg
    ./00294.jpg
    ./00295.jpg
    ./00296.jpg
    ./00297.jpg
    ./00298.jpg
    ./00299.jpg
    ./00300.jpg
    ./00301.jpg
    ./00302.jpg
    ./00303.jpg
    ./00304.jpg
    ./00305.jpg
    ./00306.jpg
    ./00307.jpg
    ./00308.jpg
    ./00309.jpg
    ./00310.jpg
    ./00311.jpg
    ./00312.jpg
    ./00313.jpg
    ./00314.jpg
    ./00315.jpg
    ./00316.jpg
    ./00317.jpg
    ./00318.jpg
    ./00319.jpg
    ./00320.jpg
    ./00321.jpg
    ./00322.jpg
    ./00323.jpg
    ./00324.jpg
    ./00325.jpg
    ./00326.jpg
    ./00327.jpg
    ./00328.jpg
    ./00329.jpg
    ./00330.jpg
    ./00331.jpg
    ./00332.jpg
    ./00333.jpg
    ./00334.jpg
    ./00335.jpg
    ./00336.jpg
    ./00337.jpg
    ./00338.jpg
    ./00339.jpg
    ./00340.jpg
    ./00341.jpg
    ./00342.jpg
    ./00343.jpg
    ./00344.jpg
    ./00345.jpg
    ./00346.jpg
    ./00347.jpg
    ./00348.jpg
    ./00349.jpg
    ./00350.jpg
    ./00351.jpg
    ./00352.jpg
    ./00353.jpg
    ./00354.jpg
    ./00355.jpg
    ./00356.jpg
    ./00357.jpg
    ./00358.jpg
    ./00359.jpg
    ./00360.jpg
    ./00361.jpg
    ./00362.jpg
    ./00363.jpg
    ./00364.jpg
    ./00365.jpg
    ./00366.jpg
    ./00367.jpg
    ./00368.jpg
    ./00369.jpg
    ./00370.jpg
    ./00371.jpg
    ./00372.jpg
    ./00373.jpg
    ./00374.jpg
    ./00375.jpg
    ./00376.jpg
    ./00377.jpg
    ./00378.jpg
    ./00379.jpg
    ./00380.jpg
    ./00381.jpg
    ./00382.jpg
    ./00383.jpg
    ./00384.jpg
    ./00385.jpg
    ./00386.jpg
    ./00387.jpg
    ./00388.jpg
    ./00389.jpg
    ./00390.jpg
    ./00391.jpg
    ./00392.jpg
    ./00393.jpg
    ./00394.jpg
    ./00395.jpg
    ./00396.jpg
    ./00397.jpg
    ./00398.jpg
    ./00399.jpg
    ./00400.jpg
    ./00401.jpg
    ./00402.jpg
    ./00403.jpg
    ./00404.jpg
    ./00405.jpg
    ./00406.jpg
    ./00407.jpg
    ./00408.jpg
    ./00409.jpg
    ./00410.jpg
    ./00411.jpg
    ./00412.jpg
    ./00413.jpg
    ./00414.jpg
    ./00415.jpg
    ./00416.jpg
    ./00417.jpg
    ./00418.jpg
    ./00419.jpg
    ./00420.jpg
    ./00421.jpg
    ./00422.jpg
    ./00423.jpg
    ./00424.jpg
    ./00425.jpg
    ./00426.jpg
    ./00427.jpg
    ./00428.jpg
    ./00429.jpg
    ./00430.jpg
    ./00431.jpg
    ./00432.jpg
    ./00433.jpg
    ./00434.jpg
    ./00435.jpg
    ./00436.jpg
    ./00437.jpg
    ./00438.jpg
    ./00439.jpg
    ./00440.jpg
    ./00441.jpg
    ./00442.jpg
    ./00443.jpg
    ./00444.jpg
    ./00445.jpg
    ./00446.jpg
    ./00447.jpg
    ./00448.jpg
    ./00449.jpg
    ./00450.jpg
    ./00451.jpg
    ./00452.jpg
    ./00453.jpg
    ./00454.jpg
    ./00455.jpg
    ./00456.jpg
    ./00457.jpg
    ./00458.jpg
    ./00459.jpg
    ./00460.jpg
    ./00461.jpg
    ./00462.jpg
    ./00463.jpg
    ./00464.jpg
    ./00465.jpg
    ./00466.jpg
    ./00467.jpg
    ./00468.jpg
    ./00469.jpg
    ./00470.jpg
    ./00471.jpg
    ./00472.jpg
    ./00473.jpg
    ./00474.jpg
    ./00475.jpg
    ./00476.jpg
    ./00477.jpg
    ./00478.jpg
    ./00479.jpg
    ./00480.jpg
    ./00481.jpg
    ./00482.jpg
    ./00483.jpg
    ./00484.jpg
    ./00485.jpg
    ./00486.jpg
    ./00487.jpg
    ./00488.jpg
    ./00489.jpg
    ./00490.jpg
    ./00491.jpg
    ./00492.jpg
    ./00493.jpg
    ./00494.jpg
    ./00495.jpg
    ./00496.jpg
    ./00497.jpg
    ./00498.jpg
    ./00499.jpg
    ./00500.jpg

    
  //   ./frame_000_delay-0.03s.gif
  //   ./frame_001_delay-0.03s.gif
  //   ./frame_002_delay-0.03s.gif
  //   ./frame_003_delay-0.03s.gif
  //   ./frame_004_delay-0.03s.gif
  //   ./frame_005_delay-0.03s.gif
  //   ./frame_006_delay-0.03s.gif
  //   ./frame_007_delay-0.03s.gif
  //   ./frame_008_delay-0.03s.gif
  //   ./frame_009_delay-0.03s.gif
  //   ./frame_010_delay-0.03s.gif
  //  ./frame_011_delay-0.03s.gif
  //   ./frame_012_delay-0.03s.gif
  //   ./frame_013_delay-0.03s.gif
  //   ./frame_014_delay-0.03s.gif
  //   ./frame_015_delay-0.03s.gif
  //   ./frame_016_delay-0.03s.gif
  //   ./frame_017_delay-0.03s.gif
  //   ./frame_018_delay-0.03s.gif
  //   ./frame_019_delay-0.03s.gif
  //   ./frame_020_delay-0.03s.gif
  //   ./frame_021_delay-0.03s.gif
  //   ./frame_022_delay-0.03s.gif
  //   ./frame_023_delay-0.03s.gif
  //   ./frame_024_delay-0.03s.gif
  //   ./frame_025_delay-0.03s.gif
  //   ./frame_026_delay-0.03s.gif
  //   ./frame_027_delay-0.03s.gif
  //   ./frame_028_delay-0.03s.gif
  //   ./frame_029_delay-0.03s.gif
  //   ./frame_030_delay-0.03s.gif
  //   ./frame_031_delay-0.03s.gif
  //   ./frame_032_delay-0.03s.gif
  //   ./frame_033_delay-0.03s.gif
  //   ./frame_034_delay-0.03s.gif
  //   ./frame_035_delay-0.03s.gif
  //   ./frame_036_delay-0.03s.gif
  //   ./frame_037_delay-0.03s.gif
  //   ./frame_038_delay-0.03s.gif
  //   ./frame_039_delay-0.03s.gif
  //   ./frame_040_delay-0.03s.gif
  //   ./frame_041_delay-0.03s.gif
  //   ./frame_042_delay-0.03s.gif
  //   ./frame_043_delay-0.03s.gif
  //   ./frame_044_delay-0.03s.gif
  //   ./frame_045_delay-0.03s.gif
  //   ./frame_046_delay-0.03s.gif
  //   ./frame_047_delay-0.03s.gif
  //   ./frame_048_delay-0.03s.gif
  //   ./frame_049_delay-0.03s.gif
  //   ./frame_050_delay-0.03s.gif
  //   ./frame_051_delay-0.03s.gif
  //   ./frame_052_delay-0.03s.gif
  //   ./frame_053_delay-0.03s.gif
  //   ./frame_054_delay-0.03s.gif
  //   ./frame_055_delay-0.03s.gif
  //   ./frame_056_delay-0.03s.gif
  //   ./frame_057_delay-0.03s.gif
  //   ./frame_058_delay-0.03s.gif
  //   ./frame_059_delay-0.03s.gif
  //   ./frame_060_delay-0.03s.gif
  //   ./frame_061_delay-0.03s.gif
  //   ./frame_062_delay-0.03s.gif
  //   ./frame_063_delay-0.03s.gif
  //   ./frame_064_delay-0.03s.gif
  //   ./frame_065_delay-0.03s.gif
  //   ./frame_066_delay-0.03s.gif
  //   ./frame_067_delay-0.03s.gif
  //   ./frame_068_delay-0.03s.gif
  //   ./frame_069_delay-0.03s.gif
  //   ./frame_070_delay-0.03s.gif
  //   ./frame_071_delay-0.03s.gif
  //   ./frame_072_delay-0.03s.gif
  //   ./frame_073_delay-0.03s.gif
  //   ./frame_074_delay-0.03s.gif
  //   ./frame_075_delay-0.03s.gif
  //   ./frame_076_delay-0.03s.gif
  //   ./frame_077_delay-0.03s.gif
  //   ./frame_078_delay-0.03s.gif
  //   ./frame_079_delay-0.03s.gif
  //   ./frame_080_delay-0.03s.gif
  //   ./frame_081_delay-0.03s.gif
  //   ./frame_082_delay-0.03s.gif
  //   ./frame_083_delay-0.03s.gif
  //   ./frame_084_delay-0.03s.gif
  //   ./frame_085_delay-0.03s.gif
  //   ./frame_086_delay-0.03s.gif
  //   ./frame_087_delay-0.03s.gif
  //   ./frame_088_delay-0.03s.gif
  //   ./frame_089_delay-0.03s.gif
  //   ./frame_090_delay-0.03s.gif
  //   ./frame_091_delay-0.03s.gif
  //   ./frame_092_delay-0.03s.gif
  //   ./frame_093_delay-0.03s.gif
  //   ./frame_094_delay-0.03s.gif
  //   ./frame_095_delay-0.03s.gif
  //   ./frame_096_delay-0.03s.gif
  //   ./frame_097_delay-0.03s.gif
  //   ./frame_098_delay-0.03s.gif
  //   ./frame_099_delay-0.03s.gif
  //   ./frame_100_delay-0.03s.gif
  //   ./frame_101_delay-0.03s.gif
  //   ./frame_102_delay-0.03s.gif
  //   ./frame_103_delay-0.03s.gif
  //   ./frame_104_delay-0.03s.gif
  //   ./frame_105_delay-0.03s.gif
  //   ./frame_106_delay-0.03s.gif
  //   ./frame_107_delay-0.03s.gif
  //   ./frame_108_delay-0.03s.gif
  //   ./frame_109_delay-0.03s.gif
  //   ./frame_110_delay-0.03s.gif
  //   ./frame_111_delay-0.03s.gif
  //   ./frame_112_delay-0.03s.gif
  //   ./frame_113_delay-0.03s.gif
  //   ./frame_114_delay-0.03s.gif
  //   ./frame_115_delay-0.03s.gif
  //   ./frame_116_delay-0.03s.gif
  //   ./frame_117_delay-0.03s.gif
  //   ./frame_118_delay-0.03s.gif
  //   ./frame_119_delay-0.03s.gif
  //   ./frame_120_delay-0.03s.gif
  //   ./frame_121_delay-0.03s.gif
  //   ./frame_122_delay-0.03s.gif
  //   ./frame_123_delay-0.03s.gif
  //   ./frame_124_delay-0.03s.gif
  //   ./frame_125_delay-0.03s.gif
  //   ./frame_126_delay-0.03s.gif
  //   ./frame_127_delay-0.03s.gif
  //   ./frame_128_delay-0.03s.gif
  //   ./frame_129_delay-0.03s.gif
  //   ./frame_130_delay-0.03s.gif
  //   ./frame_131_delay-0.03s.gif
  //   ./frame_132_delay-0.03s.gif
  //   ./frame_133_delay-0.03s.gif
  //   ./frame_134_delay-0.03s.gif
  //   ./frame_135_delay-0.03s.gif
  //   ./frame_136_delay-0.03s.gif
  //   ./frame_137_delay-0.03s.gif
  //   ./frame_138_delay-0.03s.gif
  //   ./frame_139_delay-0.03s.gif
  //   ./frame_140_delay-0.03s.gif
  //   ./frame_141_delay-0.03s.gif
  //   ./frame_142_delay-0.03s.gif
  //   ./frame_143_delay-0.03s.gif
  //   ./frame_144_delay-0.03s.gif
  //   ./frame_145_delay-0.03s.gif
  //   ./frame_146_delay-0.03s.gif
  //   ./frame_147_delay-0.03s.gif
  //   ./frame_148_delay-0.03s.gif
  //   ./frame_149_delay-0.03s.gif
    




    





    `;
    return data.split("\n")[index];
  }

  const frameCount = 500;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.3,
      trigger: `#mainPage>canvas`,
      start: `top top`,
      end: `1000% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#mainPage>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `1000% top`,
    // markers: true,
  });
}
canvasOne();
let tl = gsap.timeline();
tl.from("#main>.nav>h4", {
  y: 50,
  delay: 0.5,
  opacity: 0,
});
tl.from("#main>.nav>button", {
  y: 50,
  opacity: 0,
});

// let tl = gsap.timeline();
// // tl.from("#atmos", {
// //   opacity: 0,
// //   y: 20,
// //   rotate: 15,
// //   delay: 1,
// // });
// tl.from("#atmos>#a", {
//   opacity: 0,
//   x: -50,
// });
// tl.from("#atmos>#b", {
//   opacity: 0,
//   x: -50,
// });
// tl.from("#atmos>#c", {
//   opacity: 0,
//   x: -50,
// });
// tl.from("#atmos>#d", {
//   opacity: 0,
//   x: -50,
// });
// tl.from("#atmos>#e", {
//   opacity: 0,
//   x: -50,
// });
// function canvas() {
//   const canvas = document.querySelector("#page3>canvas");
//   const context = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });

//   function files(index) {
//     var data = `
//     ./frame_000_delay-0.04s.gif
//     ./frame_001_delay-0.04s.gif
//     ./frame_002_delay-0.04s.gif
//     ./frame_003_delay-0.04s.gif
//     ./frame_004_delay-0.04s.gif
//     ./frame_005_delay-0.04s.gif
//     ./frame_006_delay-0.04s.gif
//     ./frame_007_delay-0.04s.gif
//     ./frame_008_delay-0.04s.gif
//     ./frame_009_delay-0.04s.gif
//     ./frame_010_delay-0.04s.gif
//     ./frame_011_delay-0.04s.gif
//     ./frame_012_delay-0.04s.gif
//     ./frame_013_delay-0.04s.gif
//     ./frame_014_delay-0.04s.gif
//     ./frame_015_delay-0.04s.gif
//     ./frame_016_delay-0.04s.gif
//     ./frame_017_delay-0.04s.gif
//     ./frame_018_delay-0.04s.gif
//     ./frame_019_delay-0.04s.gif
//     ./frame_020_delay-0.04s.gif
//     ./frame_021_delay-0.04s.gif
//     ./frame_022_delay-0.04s.gif
//     ./frame_023_delay-0.04s.gif
//     ./frame_024_delay-0.04s.gif
//     ./frame_025_delay-0.04s.gif
//     ./frame_026_delay-0.04s.gif
//     ./frame_027_delay-0.04s.gif
//     ./frame_028_delay-0.04s.gif
//     ./frame_029_delay-0.04s.gif
//     ./frame_030_delay-0.04s.gif
//     ./frame_031_delay-0.04s.gif
//     ./frame_032_delay-0.04s.gif
//     ./frame_033_delay-0.04s.gif
//     ./frame_034_delay-0.04s.gif
//     ./frame_035_delay-0.04s.gif
//     ./frame_036_delay-0.04s.gif
//     ./frame_037_delay-0.04s.gif
//     ./frame_038_delay-0.04s.gif
//     ./frame_039_delay-0.04s.gif
//     ./frame_040_delay-0.04s.gif
//     ./frame_041_delay-0.04s.gif
//     ./frame_042_delay-0.04s.gif
//     ./frame_043_delay-0.04s.gif
//     ./frame_044_delay-0.04s.gif
//     ./frame_045_delay-0.04s.gif
//     ./frame_046_delay-0.04s.gif
//     ./frame_047_delay-0.04s.gif
//     ./frame_048_delay-0.04s.gif
//     ./frame_049_delay-0.04s.gif
//     ./frame_050_delay-0.04s.gif
//     ./frame_051_delay-0.04s.gif
//     ./frame_052_delay-0.04s.gif
//     ./frame_053_delay-0.04s.gif
//     ./frame_054_delay-0.04s.gif
//     ./frame_055_delay-0.04s.gif
//     ./frame_056_delay-0.04s.gif
//     ./frame_057_delay-0.04s.gif
//     ./frame_058_delay-0.04s.gif
//     ./frame_059_delay-0.04s.gif
//     ./frame_060_delay-0.04s.gif
//     ./frame_061_delay-0.04s.gif
//     `;
//     return data.split("\n")[index];
//   }

//   const frameCount = 61;

//   const images = [];
//   const imageSeq = {
//     frame: 1,
//   };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
//   }

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: 0.5,
//       trigger: `#page3`,
//       start: `top top`,
//       end: `250% top`,
//       scroller: `#main`,
//     },
//     onUpdate: render,
//   });

//   images[1].onload = render;

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   ScrollTrigger.create({
//     trigger: "#page3",
//     pin: true,
//     scroller: `#main`,
//     start: `top top`,
//     end: `250% top`,
//   });
// }
// canvas();

// function cloud() {
//   const canvas = document.querySelector("#page3>#cloud");
//   const context = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });

//   function files(index) {
//     var data = `
//       ./frame_000_delay-0.04s.gif
//       ./frame_001_delay-0.04s.gif
//       ./frame_002_delay-0.04s.gif
//       ./frame_003_delay-0.04s.gif
//       ./frame_004_delay-0.04s.gif
//       ./frame_005_delay-0.04s.gif
//       ./frame_006_delay-0.04s.gif
//       ./frame_007_delay-0.04s.gif
//       ./frame_008_delay-0.04s.gif
//       ./frame_009_delay-0.04s.gif
//       ./frame_010_delay-0.04s.gif
//       ./frame_011_delay-0.04s.gif
//       ./frame_012_delay-0.04s.gif
//       ./frame_013_delay-0.04s.gif
//       ./frame_014_delay-0.04s.gif
//       ./frame_015_delay-0.04s.gif
//       ./frame_016_delay-0.04s.gif
//       ./frame_017_delay-0.04s.gif
//       ./frame_018_delay-0.04s.gif
//       ./frame_019_delay-0.04s.gif
//       ./frame_020_delay-0.04s.gif
//       ./frame_021_delay-0.04s.gif
//       ./frame_022_delay-0.04s.gif
//       ./frame_023_delay-0.04s.gif
//       ./frame_024_delay-0.04s.gif
//       ./frame_025_delay-0.04s.gif
//       ./frame_026_delay-0.04s.gif
//       ./frame_027_delay-0.04s.gif
//       ./frame_028_delay-0.04s.gif
//       ./frame_029_delay-0.04s.gif
//       ./frame_030_delay-0.04s.gif
//       ./frame_031_delay-0.04s.gif
//       ./frame_032_delay-0.04s.gif
//       ./frame_033_delay-0.04s.gif
//       ./frame_034_delay-0.04s.gif
//       ./frame_035_delay-0.04s.gif
//       ./frame_036_delay-0.04s.gif
//       ./frame_037_delay-0.04s.gif
//       ./frame_038_delay-0.04s.gif
//       ./frame_039_delay-0.04s.gif
//       ./frame_040_delay-0.04s.gif
//       ./frame_041_delay-0.04s.gif
//       ./frame_042_delay-0.04s.gif
//       ./frame_043_delay-0.04s.gif
//       ./frame_044_delay-0.04s.gif
//       ./frame_045_delay-0.04s.gif
//       ./frame_046_delay-0.04s.gif
//       ./frame_047_delay-0.04s.gif
//       ./frame_048_delay-0.04s.gif
//       ./frame_049_delay-0.04s.gif
//       ./frame_050_delay-0.04s.gif
//       ./frame_051_delay-0.04s.gif
//       ./frame_052_delay-0.04s.gif
//       ./frame_053_delay-0.04s.gif
//       ./frame_054_delay-0.04s.gif
//       ./frame_055_delay-0.04s.gif
//       ./frame_056_delay-0.04s.gif
//       ./frame_057_delay-0.04s.gif
//       ./frame_058_delay-0.04s.gif
//       ./frame_059_delay-0.04s.gif
//       ./frame_060_delay-0.04s.gif
//       ./frame_061_delay-0.04s.gif
//       `;
//     return data.split("\n")[index];
//   }

//   const frameCount = 61;

//   const images = [];
//   const imageSeq = {
//     frame: 1,
//   };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
//   }

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: 0.5,
//       trigger: `#page3`,
//       start: `top top`,
//       end: `250% top`,
//       scroller: `#main`,
//     },
//     onUpdate: render,
//   });

//   images[1].onload = render;

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   ScrollTrigger.create({
//     trigger: "#page3",
//     pin: true,
//     scroller: `#main`,
//     start: `top top`,
//     end: `250% top`,
//   });
// }


