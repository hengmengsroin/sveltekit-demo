<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    let {service} = data;
    console.log(service);
    
</script>

<main>
   <div class="image">
    <img src={service.thumbnails[0]} alt="thumbnail"/>
   </div>
   <div class="title">
    {service.name}
   </div>
   <div class="merchant">
    {service.merchant.name}
   </div>
  
</main>

<style lang="scss">
    main{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
</style>