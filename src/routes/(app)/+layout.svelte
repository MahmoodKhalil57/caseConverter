<script lang="ts">
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import Navigation from '$lib/components/layout/navigation.svelte';
	import DrawerContainer from '$lib/components/ui/DrawerContainer.svelte';
	import { Toaster } from 'svelte-french-toast';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<!-- <DrawerContainer closeBtn={true} drawerClass="bg-base-100" drawerId="main-menu-drawer">
	<svelte:fragment slot="main">
		<Header />
		<main class="z-10 relative flex justify-center w-full min-h-page">
			<slot />
		</main>
		<Footer />
	</svelte:fragment>
	<Navigation menu slot="drawerContent" />
</DrawerContainer> -->

<Header />
<main class="z-10 relative flex justify-center w-full min-h-page">
	<slot />
</main>
<Footer />

<Toaster />
