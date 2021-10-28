<script>
import { listen } from "svelte/internal";

  export let pteroSocialData = {};
  const { HEADING, PTERO_SOCIAL } = pteroSocialData;
</script>


<section id="about-ptero" class="section grey-bgcolor">
  <div class="container">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="row section-body" id='rowPtero'>
      <ul>
        {#each PTERO_SOCIAL as list}
        <div class="links">
          <h4>{list.name}</h4>
          <a href='{list.link}' >
            <img src={list.image} alt="picture {list.image}" href='{list.link}'/> 
          </a>
          <p class='text'>{list.text}</p>
        </div>
        <!-- <div class="socialList">
          <li>{list.name}
            <p>{list.text}<br>
              <a href='{list.link}' >github.com/oslabs-beta/Ptero</a>
            </p>
          </li>
        </div> -->
        {/each}
      </ul>
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
  .links {
    align-items: center;
    text-align: center;
    
  }
  .links .title p {
    padding-top: 10px;
    font-weight: bold;
  }
  .links img {
    height: 100px;
    padding-bottom: 1em;
  }
  .links img:hover{
    transform: rotate(10deg)

  }

  section ul {
    padding-left: 23px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-around;
  }
  
</style>