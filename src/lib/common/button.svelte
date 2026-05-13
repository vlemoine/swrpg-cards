<script lang="ts">
	let { children, onclick } = $props();
</script>

<button {onclick}><span>{@render children()}</span></button>

<style>
  button {
    align-items: center;
    background-color: var(--navy);
    border-radius: 10rem;
    border: none;
    color: #fff;
    corner-shape: bevel;
    display: inline-flex;
    font: 1rem/1 "Elektra Medium Pro";
    padding: .67rem 1.25rem;
    span {
      padding-top: .1rem;
      display: flex;
    }
  }
</style>