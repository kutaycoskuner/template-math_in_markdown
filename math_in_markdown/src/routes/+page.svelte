<script lang="ts">
    import PostContent from '$content/test-math_expressions.md';
</script>

<div class="center">
    <svelte:component this={PostContent} />
</div>

<style>
    .center {
        width: 50%;
        max-width: 1920px;
        margin: auto;
        text-align: center;
    }
</style>