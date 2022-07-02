<template>
    <div class="mt-5">
        <section class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 mx-auto text-center">
                        <div class="ms-3 mb-md-5">
                            <div class="icon icon-shape bg-gradient-info shadow text-center mb-4">
                                <i class="fas fa-user"></i>
                            </div>
                            <h3>Profile</h3>
                            <p>
                                Enter profile details below.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="card card-plain">
                            <form id="contact-form" method="post" autocomplete="off">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Username</label>
                                            <div class="input-group mb-4">
                                                <input class="form-control" placeholder="eg. johnblcack"
                                                    aria-label="Username" type="text" v-model="username">
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="mb-4">
                                        <label>Website</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="eg. www.ceodevforce.com" v-model="website">
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-check form-switch mb-4">
                                                <input class="form-check-input" type="checkbox"
                                                    id="flexSwitchCheckDefault" checked="">
                                                <label class="form-check-label" for="flexSwitchCheckDefault">I agree to
                                                    the <a href="javascript:;" class="text-dark"><u>Terms and
                                                            Conditions</u></a>.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button type="submit" class="btn bg-gradient-info w-100">Send
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>