<template>
  <Fragment>
    <VglGridHelper ref="grid" :divisions="divisions" />
    <VglGridHelper ref="grid" divisions="5" />
  </Fragment>
</template>

<script>
import settings from './settings';

const { divisions } = settings;

export default {
  name: "Matrix",
  data: () => ({
    divisions,
  }),
}
</script>