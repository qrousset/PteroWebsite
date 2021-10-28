<script>
  export let teamSocialData = {};
  const { MEMBER_LIST, HEADING } = teamSocialData;
</script>


<section id="the-team" class="section white-bgcolor">
  <div class="container text-center">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="social-icons section-body">
      {#each MEMBER_LIST as member}
        <div class="team-member">
          <img src={member.image} alt="picture {member.image}" /> 
          <p>{member.name}</p>
          <a class='logos' href={member.github} alt="Github"><img src='images/github.png'> </a>
          <a class='logos' href={member.linkedin} alt="LinkedIn"><img src='images/linkedin.png'></a>
        </div>
      {/each}
    </div>
  </div>
</section>


<style>
  .social-icons{
    display: flex;
    justify-content: space-around;

  }
  p {
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-weight: bold;
    /* height: 2em; */
    margin-top: .75em;
    text-shadow: 0px 1px lightgrey;

  }
  .social-icons img {
    outline: 1px solid lightgray;
    width: 75px;
    height: 75px;
    transition: 0.5s;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
  }
  .social-icons img:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px lightgrey;
  }
  .logos img {
    outline: 0px;
    border-radius: 0px;
    max-width: 100%;
    max-height: 100%;
    width: 70px;
    height: 100%;
    padding-bottom: 5px;
    box-shadow: 0px 0px;
  }
  .logos img:hover{
    transform: translateY(0); 
    box-shadow: 0px 0px ;
    width: 75px;
    padding-bottom: 0px;
  }
  a:hover {
    text-decoration: none;
    /* color: red; */
    position: relative;
  }
  .team-member{
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: pink; */
  }
  .team-member :hover {
    /* transform: translateY(-5px); */
  }
</style>