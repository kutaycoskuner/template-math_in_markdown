<script lang="ts">
    import PostContent from '$content/post.md';
    import Katex from '$lib/components/Katex.svelte';
</script>

<div class="center">
    <svelte:component this={PostContent} />
    
    <Katex expression="a^2 + b^2 = c^2" displayMode=false/>
</div>

<style>
    .center {
        width: 50%;
        max-width: 1920px;
        margin: auto;
        text-align: center;
    }
</style>