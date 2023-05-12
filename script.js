var bodyElm = document.getElementById("mybody");
var sideElm = document.getElementById("sideBar");


var content = {
  home: `    
<div id="home" class='home'>       
<h3 class="tracking-in-expand">HI THERE !</h3>
<h1>I'M <span>Ajmal Abbas</span></h1>
<p class="tracking-in-contract-bck-bottom">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
  deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam
  tenetur! , at.
</p>
<a href="#about"
  ><button class="btn">about me <i class="fas fa-user"></i></button
></a>
</div>
`,
about:`
<div class='about' id="about">
<h1 class="heading"><span>about</span> me</h1>

      <div class="row">
        <div class="info">
          <h3 class="tracking-in-expand"><span> name : </span> Ajmal Abbas</h3>
          <h3 class="tracking-in-expand"><span> age : </span> 20</h3>
          <h3 class="tracking-in-expand"><span> qualification : </span> BCA</h3>
          <h3 class="tracking-in-expand"><span> post : </span> front end developer</h3>
          <h3 class="tracking-in-expand"><span> language : </span>English , Tamil , Malayalam</h3>
          <a href="#"
            ><button onclick="downloadCv()" class="btn">
              download CV <i class="fas fa-download"></i></button
          ></a>
        </div>
      </div>

</div>
`,
education:`<div class='slide-top education' id="education"> 
<h1 class="heading">my <span>education</span></h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2019</span>
          <h3>front end development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2020</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2021</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>
      </div>
</div>`,
portfolio:`<div class='portfolio' id="portfolio"> 
<h1 class="heading">my <span>portfolio</span></h1>

<div class="box-container">
  <div class="box">
    <img class="swirl-in-fwd" src="./keyboard-5017973_1920.jpg" alt="" />
  </div>

  <div class="box">
    <img class="swirl-in-fwd" src="./laptop-2443737_1920.jpg" alt="" />
  </div>

  <div class="box">
      <img class="swirl-in-fwd" src="./pexels-xxss-is-back-777001.jpg" alt="" />
    </div>

  <div class="box">
    <img class="swirl-in-fwd" src="./plans-1867745_1920.jpg" alt="" />
  </div>

  <div class="box">
    <img class="swirl-in-fwd" src="./purse-1478852_1920.jpg" alt="" />
  </div>

  <div class="box">
    <img class="swirl-in-fwd" src="./workspace-2443050_1920.jpg" alt="" />
  </div>

  <div class="box">
    <img class="swirl-in-fwd" src="./code-1689066_1920.jpg" alt="" />
  </div>
</div>
</div>`,

contact:`<div class='about' id="contact"> 
<h1 class="heading"><span>contact</span> me</h1>

      <div class="row">
        <div class="content">
          <h3 class="title">contact info</h3>

          <div class="info">
            <h3 class="tracking-in-expand"><i class="fas fa-envelope"></i> ajmal19bca@gmail.com</h3>
            <h3 class="tracking-in-expand"><i class="fas fa-phone"></i> +91-8870259712</h3>
            <h3 class="tracking-in-expand"><i class="fas fa-city"></i> coimbatore</h3>
            <h3 class="tracking-in-expand">
              <i class="fas fa-map-marker-alt"></i> Tamil Nadu, india - 641023.
            </h3>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="name" class="box" />
          <input type="email" placeholder="email" class="box" />
          <input type="text" placeholder="project" class="box" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="box message"
            placeholder="message"
          ></textarea>
          <button type="submit" class="btn">
            send <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
</div>`
};

var mysec = document.getElementById("secdiv");

function downloadCv() {
  window.open(
    "https://docs.google.com/document/d/1D83zUSCVai2iMf59HwN9eKiU-mUSjr3i/edit?usp=share_link&ouid=103473137939873937750&rtpof=true&sd=true"
  );

  
}

function changeContent(text) {
  mysec.innerHTML = content[text];
}
