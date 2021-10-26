<script>
  export let pteroSocialData = {};
  const { HEADING, PTERO_SOCIAL } = pteroSocialData;
</script>


<section id="about-ptero" class="section grey-bgcolor">
  <div class="container">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="row section-body">
      <div class="col-md-6">
        <ul>
          {#each PTERO_SOCIAL as list}
            <li>{list}</li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6">
        <!-- <img src={} alt="" class="img-fluid" /> -->
      </div>
    </div>
  </div>
</section>


<style>
  .about-title {
    margin-top: 8%;
    margin-bottom: 20px;
  }

  section ul li {
    margin: 10px 0;
  }

  section ul {
    padding-left: 23px;
  }
</style>