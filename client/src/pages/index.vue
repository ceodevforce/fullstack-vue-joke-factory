<script setup lang="ts">

</script>
<template>
  <div>
    <!-- Navbar Light -->
    <div
      class="container position-sticky z-index-sticky top-0 bg-gradient-primary min-vh-100"
    >
      <div class="row">
        <div class="col-12">
          <nav
            class="navbar navbar-expand-lg blur border-radius-xl position-absolute my-3 top-0 border-bottom py-3 z-index-3 shadow my-3 py-2 start-0 end-0 mx-4"
          >
            <div class="container">
              <RouterLink
                to="/"
                class="navbar-brand"
                rel="tooltip"
                title="Created by CeoDev"
                data-placement="bottom"
              >
                Jokea Factory
              </RouterLink>

              <button
                class="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon mt-2">
                  <span class="navbar-toggler-bar bar1"></span>
                  <span class="navbar-toggler-bar bar2"></span>
                  <span class="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div
                class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
                id="navigation"
              >
                <ul class="navbar-nav navbar-nav-hover mx-auto">
                  <li class="nav-item mx-2">
                    <a
                      class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      role="button"
                    >
                      Pages
                      <img
                        src="../../assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        class="arrow ms-1"
                      />
                    </a>
                  </li>

                  <li class="nav-item mx-2">
                    <a
                      class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      role="button"
                    >
                      Account
                      <img
                        src="../../assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        class="arrow ms-1"
                      />
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a
                      class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      role="button"
                    >
                      Blocks
                      <img
                        src="../../assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        class="arrow ms-1"
                      />
                    </a>
                  </li>

                  <li class="nav-item mx-2">
                    <a
                      class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    >
                      Docs
                      <img
                        src="../../assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        class="arrow ms-1"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="navbar-nav d-lg-block d-none">
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com/product/material-design-system-pro#pricingCard"
                      class="btn btn-sm bg-gradient-primary mb-0 me-1"
                      role="button"
                      >Buy Now</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- End Navbar -->
        </div>
      </div>
    </div>
  </div>
</template>
