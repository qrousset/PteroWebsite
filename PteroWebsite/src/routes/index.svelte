<script>
  import '../../global.css';
  import Navbar from "$lib/components/navbar.svelte";
  import Banner from "$lib/components/banner.svelte";
  import Services from "$lib/components/functionalities/functionalities.svelte";
  import About from "$lib/components/about.svelte";
  import Demo from "$lib/components/demo.svelte";
  import TeamSocial from "$lib/components/teamSocial.svelte";
  import Footer from "$lib/components/footer.svelte";
  import DATA from "$lib/data";
  import PteroSocial from '$lib/components/pteroSocial.svelte';
  export const prerender = true;
</script>


<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<Banner bannerData={DATA.BANNER_DATA}/>
<Services functionalitiesData={DATA.FUNCTIONALITIES_DATA} />
<About aboutData={DATA.ABOUT_DATA} />
<Demo demoData={DATA.DEMO_DATA} />
<PteroSocial pteroSocialData={DATA.PTERO_SOCIAL_DATA} />
<TeamSocial teamSocialData={DATA.TEAM_SOCIAL_DATA} />
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />