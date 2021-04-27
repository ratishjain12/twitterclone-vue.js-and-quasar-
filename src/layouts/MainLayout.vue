<template>
  <q-layout view="lHr lpR fFf">

    <q-header elevated class="bg-white text-black">
      <q-toolbar>

        <q-toolbar-title >
          <q-btn class="lt-md" dense flat round icon="menu" @click="left = !left" />
          <span class="text-weight-bold gt-sm"> Twitter </span>
          <q-icon color="primary" size="30px" class="q-ma-md lt-md header-icon">
            <i class="fab fa-twitter"></i>
          </q-icon>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="250">
      <q-icon color="primary" size="30px" class="q-ma-md ">
        <i class="fab fa-twitter"></i>
      </q-icon>
      <q-list >
      <q-item exact to='/' clickable v-ripple class = 'q-pa-md '>
        <q-item-section avatar>
          <q-icon size="35px" name="home"/>
            
        </q-item-section>

        <q-item-section class="text-weight-bold text-h6">Home</q-item-section>
      </q-item>
      <q-item exact to='/about' clickable v-ripple class = 'q-pa-md '>
        <q-item-section avatar>
          <q-icon size="35px" name="help_outline"/>
        </q-item-section>

        <q-item-section class="text-weight-bold text-h6">About</q-item-section>
      </q-item>
      
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered :width="400">

      <!-- drawer content -->
      <q-input 
      placeholder='Search'
      outlined
      rounded 
      :dense="dense" 
      class="q-ma-md" 
      >

        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list bordered class="q-ma-sm" padding separator>
        <q-item>
        <span class="text-h6 text-weight-bold q-ml-lg">What's happening</span>
        </q-item>
      <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label class="text-weight-bold">Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label class="text-weight-bold">Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      
      <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label class="text-weight-bold">Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position:absolute
  bottom:0
  left:39%
  transform:translateX(-60%)

</style>
