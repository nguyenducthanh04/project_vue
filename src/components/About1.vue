<template>
        <nav class="navbar navbar-expand-sm navbar-info bg-white">
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
    <!-------Navbar------->
    <hr />
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <div class="card" style="width: 550px">
          <img src="@/assets/aot1.jpg" alt="Eren Yeager " />
        </div>
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <form action="" style="border: 1">
          <div style="margin-top: 80px; margin-left: 18px;" class="row">
            <button class="" style="width: 110px; height: 38px; border-radius: 8px;"><span class="reaction" onclick="react('love')">❤️</span><span class="count" id="loveCount" style="margin-left: 4px;">0</span></button>
            <button class="" style="width: 110px; height: 38px; border-radius: 8px; margin-left: 10px;"><i class="fa-regular fa-floppy-disk"></i> Save</button>
            <button class="" style="width: 110px; height: 38px; border-radius: 8px; margin-left: 10px;"><i class="fa-regular fa-comment"></i></button>
            <!-- <button class="" style="width: 40px; height: 40px; border-radius: 8px; margin-left: 10px;"><i class="fa-solid fa-share"></i></button> -->
          </div>
          <hr>
          <div class="row">
            <div class="" style="margin-left: 18px;">
                <p><img src="@/assets/aot1.jpg" alt="" style="width: 38px; height: 38px; border-radius: 50%;"> Thanh Nguyen</p>
            </div>
            <p style="margin-left: 18px;">Wildlife and nature photographer.</p>
          </div>
          <div class="row" style="text-align: center;">
            <button style="border-radius: 20px; height: 40px; width: 360px; margin-left: 26px;">Donate</button>
          </div>
        </form>
      </div>
    </div>
    <!-----Comment------>
    <div class="row" style="margin-top: 60px;">
      <div class="col-sm-2">
      </div>
      <div class="col-sm-4">
        <form action="" id="comment-form">
          <img src="@/assets/aot1.jpg" alt=""  style="width: 64px; height: 64px; border-radius: 50%; margin-top: -54px; margin-left: 18px;">
          <textarea name="comment" id="comment" style="padding: 15px 0 0 10px; margin-left: 8px; border-radius: 25px; width:278px;" placeholder="Add your comments"></textarea>
          <button type="submit" style="border-radius: 20px; margin-left: 272px; height: 40px; width: 100px;">Comment</button>       
        </form>
      </div>
      <div class="col-sm-6"></div>

      </div>
      <div class="row">
        <div class="col-sm-2"></div>
          <div class="col-sm-4">
          <div id="comments-list" style="margin-left: 18px;"></div>
        </div>
        <div class="col-sm-6"></div>
      </div>
      <!-----Picture------>
      <p style="font-weight: bold; margin-left: 32px;">Related free images</p>
      <div class="row">
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
      <div class="row" style="margin-top: 70px">
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
      <div class="row" style="margin-top: 70px">
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
      <!---------footer--------->
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
        <a class="text-reset fw-bold" href="https://www.facebook.com/profile.php?id=100029011241481"
          >Thanh And Khải</a
        >
      </div>
      <!-- Copyright -->
    </footer>
</template>

<script>
//Emoji
function sendReaction(reaction) {
        // In a real application, you would send this data to the server to store it in a database.
        // For simplicity, we'll just update the counts here.
        const countSpan = document.getElementById(reaction + "Count");
        countSpan.textContent = parseInt(countSpan.textContent) + 1;
      }

      // Handle the click event on a reaction
      function react(reaction) {
        sendReaction(reaction);
      }
      //comment
document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.getElementById("comments-list");
  const commentForm = document.getElementById("comment-form");

  // Sự kiện khi người dùng gửi bình luận
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy nội dung bình luận
    const commentText = document.getElementById("comment").value;

    // Tạo một phần tử mới để hiển thị bình luận
    const newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.textContent = commentText;

    // Thêm bình luận mới vào danh sách
    commentsList.appendChild(newComment);

    // Xóa nội dung của ô nhập liệu
    document.getElementById("comment").value = "";
  });
});

    </script>