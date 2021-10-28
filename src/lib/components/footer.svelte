<script>
  export let footerData = {};
  export let header;
  const {
    DESCRIPTION,
    CONTACT_DETAILS,
    SUBSCRIBE_NEWSLETTER,
    SUBSCRIBE
  } = footerData;
  const { HEADING, ADDRESS, MOBILE, EMAIL } = CONTACT_DETAILS;
</script>


<section class="main-bgcolor light-color" id="footer">
  <!-- <img src="images/quentin.png" alt="" class="wave-img" /> -->
  <div class="container">
    <div class="row section-body">
      <div class="col-md-4 footer-box">
        <div class="company_brand">{header.name}</div>
        <p>Product development accelerated by <a href='https://opensourcelabs.io/'>OSLabs</a>. Issues or concerns? Report them to our <a href='https://github.com/oslabs-beta/Ptero'>GitHub</a>,
        </p>
      </div>
      <div class="col-md-4 footer-box">
        <p class="footer-title">{HEADING}</p>
        <p>
          <i class="fas fa-map-marker-alt" />
          {ADDRESS}
        </p>
        <!-- <p>
          <i class="fas fa-phone" />
          {MOBILE}
        </p> -->
        <p>
          <i class="fas fa-envelope" />
          {EMAIL}
        </p>
      </div>
      <div class="col-md-4 footer-box">
        <p class="footer-title">{SUBSCRIBE_NEWSLETTER}</p>
        <input
          type="email"
          class="form-control round-border"
          placeholder="Your Email" />
        <button type="button" class="btn btn-outline-light round-border">
          {SUBSCRIBE}
        </button>
      </div>
    </div>
  </div>
</section>


<style>
  main-bgcolor {
    padding-top: var(--padding);
  }
  
  .footer-title {
    font-weight: bold;
    text-transform: uppercase;
  }

  .footer-box button {
    margin-top: 30px;
  }

  .round-border {
    border-radius: 20px !important;
  }
  .wave-img {
    width: 100%;
    height: auto;
  }
</style>