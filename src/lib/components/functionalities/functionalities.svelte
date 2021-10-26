<script>
  export let functionalitiesData = {};
  const { HEADING, ALL_FUNCTIONALITIES, SERVICE_LIST } = functionalitiesData;
</script>


<section id="functionalities" class="section">
  <div class="container text-center">
    <h2 class="title">{HEADING}</h2>
    <div class="row section-body">
      {#each SERVICE_LIST as list}
        <div class="col-md-4 service">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <h4>{list.LABEL}</h4>
          <p>{list.DESCRIPTION}</p>
        </div>
      {/each}
    </div>
    <buttom class="btn btn-primary round-border main-bgcolor">
      {ALL_FUNCTIONALITIES}
    </buttom>
  </div>
</section>


<style>
  .service-img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  .service h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .title {
    text-transform: uppercase;
  }

  .title::before {
    content: "";
    background: linear-gradient(90deg, green 0%, lightgreen 100%);
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(60px);
  }

  .title::after {
    content: "";
    background: linear-gradient(90deg, green 0%, lightgreen 100%);
    height: 10px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    transform: translateY(14px);
  }

  section .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
  }
</style>