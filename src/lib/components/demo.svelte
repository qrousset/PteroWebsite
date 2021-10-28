  <script>
  export let demoData = {};
  const { HEADING, DEMO_LIST } = demoData;
</script>


<section id="demo" class="section">
  <div class="container">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="row offset-1 section-body">
      {#each DEMO_LIST as list}
        <div class="col-md-5 testimonial">
          <p>{list.DESCRIPTION}</p>
          <img src='/images/examples/halfptero.png' alt="" />
          <p class="user-details">
            <br />
            {list.DESIGNATION}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- {list.IMAGE_URL} -->
<style>
  .testimonial {
    border-left: 4px solid var(--support);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .testimonial img {
    height: 60px;
    width: 100px;
    margin: 0 0px;
    align-items: center;
  }

  .user-details {
    display: inline-block;
    /* font-size: 12px; */
    font-weight: bold;
  }
</style>