<!--src/Components/Banner/Banner.svelte-->
<script>
	export let bannerData = {};
	const { HEADING, DECRIPTION } = bannerData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section class="main-bgcolor light-color" id="banner">
	<div class="curve"/>
	<!-- <div class="custom-shape-divider-top-1635357384">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
  </div>
   -->

	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h1>{HEADING}</h1>
				<p>{DECRIPTION}</p>
			</div>
			<div class="col-md-6">
				<!-- <img src="images/home.png" alt="" class="img-fluid" /> -->
			</div>
		</div>
	</div>
	<!-- <img src="images/david.png" alt="" class="wave-img" /> -->
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style>
	#main-bgcolor {
    padding-top: var(--padding);
  }
	section {
		padding-top: 5%;
		position: relative;
    
	}

	h1 {
		font-size: 40px;
		font-weight: 600;
		margin-top: 100px;
		text-transform: uppercase;
	}

	.watch-btn {
		margin: auto 20px;
		position: relative;
		top: 8px;
	}

	section a {
		text-decoration: none;
	}

	.curve {
		position: absolute;
		bottom: 0;
		height: 100px;
		width: 99%;
    
	}
	.curve::before {
		content: '';
		position: absolute;
		border-radius: 100% 50%;
		width: 54.6%;
		height: 100%;
		background-color:  var(--light);
		transform: translate(85%, 62%);
	}
	.curve::after {
		content: '';
		position: absolute;
		border-radius: 100% 50%;
		width: 55%;
		height: 100%;
		background-image: linear-gradient(90deg, var(--main) 0%, var(--support) 200%);
		transform: translate(-4%, 40%);
		z-index: -1;
	}
</style>
