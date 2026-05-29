<script lang="ts">
  import Button from './Button.svelte';

  interface Props {
    short?: boolean;
    title: string;
    type?: string;
    value: unknown;
    min?: string;
    style?: string | null;
    removable?: boolean;
    removed?: () => void;
  }

  let {
    short,
    title,
    type = 'text',
    min = $bindable('0'),
    value = $bindable(''),
    style,
    removable = false,
    removed = () => {}
  }: Props = $props();
  const id = $derived(`${title}-input`);
  const classes = ['text-field'];
  $effect(() => {
    if (type) classes.push(type);
    if (short) classes.push('short');
  });
</script>

<div class={classes.join(' ')} {style}>
  <label for={id}>{title}</label>
  <div class="input" class:removable>
    <input bind:value {type} {id} {min} />
    {#if removable}
      <Button class="remove" hex onclick={removed}
        ><i class="fa-sharp fa-solid fa-xmark"></i></Button
      >
    {/if}
  </div>
</div>

<style>
  .text-field {
    font-size: 1rem;
    &.short {
      display: inline-block;
      max-width: 90px;
      input {
        padding: 0.25rem;
      }
    }
    label {
      background: var(--gray);
      border-radius: 2rem 2rem 0 0;
      color: #fff;
      corner-shape: bevel;
      display: inline-block;
      font: 1rem/1 'Elektra Medium Pro';
      margin: 0 calc(1rem / 16 * 7.5);
      padding: 0.5rem 1.75rem 0.25rem;
    }
    .input {
      display: flex;
    }
    input {
      border: calc(1rem / 32 * 3) solid #000;
      border-radius: 0.5rem;
      corner-shape: bevel;
      font-size: 1rem;
      font: 1rem 'ITC Symbol Book';
      padding: 0.5rem 0.75rem;
      width: stretch;
      &:focus {
        box-shadow: var(--outline);
        outline: none;
      }
    }
    .removable input {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-right-width: 0;
    }
  }
</style>
