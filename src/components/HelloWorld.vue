<template>
  <div class="nav-header">
      <nav class="navbar navbar-expand-sm navbar-info bg-muted" style="background-color: #ccc;">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">Pixabay</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Join</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="p-5 bg-muted text-white" style="background-color: #ccc; height: 310px; ">
        <h3 class="title" style="text-align: center; font-weight: bold">
          Stunning royalty-free images & royalty-free stock
        </h3>
        <p style="text-align: center">
          Over 4.2 million+ high quality stock images, videos and music shared
          by our talented community.
        </p>
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for all images on Pixabay"
                aria-label="Search"
                style="border-radius: 36px; height: 40px"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                style="border-radius: 30px"
              >
                Search
              </button>
            </form>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>
    <!----- Navbar_Header ---->
    <div class="topic" style="text-align: center">
      <h3 style="margin-top: 30px;">PICTURE BEAUTIFULL</h3>
      <p>If you need beautiful photos, don't hesitate to come to us</p>
    </div>
    <!----- Title ------>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <!-- Indicators/dots -->
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <!-- The slideshow/carousel -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="@/assets/anh4.webp"
                alt="Los Angeles"
                class="d-block w-100"
                style="height: 500px; border-radius: 20px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/anh2.png"
                alt="Chicago"
                class="d-block w-100"
                style="height: 500px; border-radius: 20px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/anh3.webp"
                alt="New York"
                class="d-block w-100"
                style="height: 500px; border-radius: 20px"
              />
            </div>
          </div>

          <!-- Left and right controls/icons -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <div class="col-sm-2"></div>
    </div>
    <!------Slide------->
    <div class="row" style="margin-top: 70px">
      <div class="col-sm-4">
        <router-link to="/about1">
          <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
        </router-link>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 482px">
          <img class="card-img-top" src="@/assets/aot1.jpg" alt="Card image" />
          <div class="card-img-overlay">
            <a style="color: white">Attack on Titan</a>
          </div>
        </div>
      </div>
    </div>
    <!------Images-------->
    <!-- Footer -->
    <footer
      class="text-center text-lg-start bg-light text-muted"
      style="margin-top: 80px"
    >
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Pixabay
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">Picture</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Music</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Video</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Tech</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> Hà Nội, Việt Nam</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                dducthanh04@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 84 585762666</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
          >Thanh And Khải</a
        >
      </div>
      <!-- Copyright -->
    </footer>
</template>

    <style>
     .card:hover {
        opacity: 0.7;
        cursor: pointer;
      }
      .nav-header {
        background-image: url(https://i1-dulich.vnecdn.net/2021/12/23/2-7996-1640236604.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=nxLNf6kt76nWKuTHOm84LA);
      }
  </style>