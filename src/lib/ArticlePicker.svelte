<script lang="ts">
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    
     let monthPicker = $state("");

    function handleSubmit(e) {
        e.preventDefault();
        const [yyyy, mm] = monthPicker.split("-");
        goto(resolve('/articles/[yyyy]/[mm]', { yyyy, mm }));
    }
</script>

<form onsubmit={handleSubmit}>
    <label for="monthPicker">Input month to see the article for that month:</label>
    <input type="month" name="monthPicker" id="monthPicker" bind:value={monthPicker}/>
    <button type="submit" id="submitBtn">Go</button>
    <button type="reset">Reset</button>
</form>