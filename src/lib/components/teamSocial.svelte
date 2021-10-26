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
          <a href={member.github} alt="Github">Github </a>
          <a href={member.linkedin} alt="LinkedIn">Linked In </a>
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
  .social-icons img {
    width: 75px;
    transition: 0.5s;
    border-radius: 50px;
  }
  a:hover {
    text-decoration: none;
  }
  .team-member{
    display: flex;
    flex-direction: column;
  }
  .team-member a:hover {
    transform: translateY(-10px);
  }
  .social-icons a:hover img{
    transform: translateY(-10px);
  }
</style>