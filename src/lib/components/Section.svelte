<script lang="ts">
	export let title: string;
    export let content: string;
</script>
<main>
    <div class="title">{title}</div>
    <div class="content">{@html content}</div>
</main>

<style lang="scss">
    main{
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 10px 0;
        .title{
            font-weight: 600;
            color: blue;
            font-size: 1.1rem;
        }

        .content{
            color: rgb(41, 41, 41);
        }
    }
</style>